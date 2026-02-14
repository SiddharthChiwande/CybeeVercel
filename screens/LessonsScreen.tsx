
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LESSONS_DATA, PHISHING_QUIZ } from '../constants';
import { getPersonalizedTip } from '../services/geminiService';
import { useAppContext } from '../context/AppContext';
import type { Question, Lesson, Quiz } from '../types';
import { SearchIcon, ArrowLeftIcon, GamepadIcon, ChevronRightIcon } from '../components/Icons';

const difficultyColorMap = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Hard: 'bg-red-100 text-red-800',
};

const GamificationCard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate('/games')}
            className="cursor-pointer bg-gradient-to-r from-cybee-purple to-cybee-blue p-6 rounded-2xl shadow-lg text-white flex items-center justify-between hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-6"
        >
            <div>
                <h2 className="font-bold text-2xl">Play Cyber Games</h2>
                <p className="text-sm opacity-90">Test your skills with fun challenges!</p>
            </div>
            <div className="flex items-center space-x-2">
                <GamepadIcon className="w-10 h-10" />
                <ChevronRightIcon className="w-8 h-8" />
            </div>
        </div>
    );
};

const LessonCard: React.FC<{ lesson: Lesson; onStart: () => void }> = ({ lesson, onStart }) => (
  <div
    onClick={onStart}
    className={`bg-white p-4 rounded-2xl shadow-md transition-all duration-300 flex items-center space-x-4 ${
      lesson.comingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105 cursor-pointer'
    }`}
  >
    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cybee-gray rounded-xl">
      {lesson.icon}
    </div>
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="font-bold text-cybee-black">{lesson.title}</h3>
            <p className="text-sm text-gray-500">{lesson.description}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColorMap[lesson.difficulty]}`}>
            {lesson.difficulty}
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-cybee-yellow h-2 rounded-full" style={{ width: `${lesson.progress}%` }}></div>
        </div>
        <span className="text-xs font-semibold text-gray-500 w-10 text-right">{lesson.progress}%</span>
      </div>
      {lesson.comingSoon && <p className="text-xs text-purple-600 font-semibold mt-1">Coming Soon!</p>}
    </div>
  </div>
);

const QuizView: React.FC<{ quiz: Quiz; onComplete: () => void, onBack: () => void }> = ({ quiz, onComplete, onBack }) => {
  const { updateAiTip, updateUserPoints } = useAppContext();
  const storageKey = `cybee-quiz-progress-${quiz.id}`;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedProgressRaw = localStorage.getItem(storageKey);
    if (savedProgressRaw) {
      try {
        const savedProgress = JSON.parse(savedProgressRaw);
        if (savedProgress) {
          setSelectedAnswers(savedProgress.answers || {});
          setCurrentQuestionIndex(savedProgress.index || 0);
        }
      } catch (e) {
        console.error("Failed to parse quiz progress from localStorage", e);
        localStorage.removeItem(storageKey);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    if (!showResults) {
      localStorage.setItem(storageKey, JSON.stringify({ index: currentQuestionIndex, answers: selectedAnswers }));
    }
  }, [currentQuestionIndex, selectedAnswers, showResults, storageKey]);

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const missedTopics: string[] = [];
    const calculatedScore = quiz.questions.reduce((acc, q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        return acc + 1;
      }
      missedTopics.push(q.topic);
      return acc;
    }, 0);

    const finalScore = (calculatedScore / quiz.questions.length) * 100;
    setScore(finalScore);
    setShowResults(true);
    localStorage.removeItem(storageKey);

    const pointsEarned = Math.round(finalScore);
    updateUserPoints(pointsEarned);

    if (missedTopics.length > 0) {
      setIsLoading(true);
      const tip = await getPersonalizedTip(missedTopics);
      updateAiTip(tip);
      setIsLoading(false);
    } else {
      updateAiTip("Excellent work! You aced the quiz. Keep staying vigilant online!");
    }
  };

  if (showResults) {
    return (
      <div className="bg-cybee-white p-8 rounded-3xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-cybee-black mb-4">Quiz Complete!</h2>
        <p className="text-xl text-gray-700 mb-2">Your Score:</p>
        <p className="text-6xl font-extrabold text-cybee-yellow mb-6">{score.toFixed(0)}%</p>
        {isLoading ? (
          <div className="space-y-3">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cybee-yellow mx-auto"></div>
            <p className="text-cybee-black">CyBee is analyzing your results...</p>
          </div>
        ) : (
          <button
            onClick={onComplete}
            className="bg-cybee-yellow text-cybee-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors"
          >
            See Your New Tip & Go to Lessons
          </button>
        )}
      </div>
    );
  }

  const currentQuestion: Question = quiz.questions[currentQuestionIndex];

  return (
    <div className="bg-cybee-white p-6 md:p-8 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-cybee-black">
          <ArrowLeftIcon className="w-4 h-4 mr-1"/>
          Back to Lessons
        </button>
        <p className="text-sm font-semibold text-gray-500">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
      </div>
      <div className="w-full bg-cybee-gray rounded-full h-2.5 mb-6">
        <div className="bg-cybee-yellow h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
      </div>
      <h2 className="text-2xl font-bold text-cybee-black mb-6">{currentQuestion.text}</h2>
      <div className="space-y-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
              selectedAnswers[currentQuestionIndex] === option
                ? 'bg-cybee-yellow border-cybee-yellow text-cybee-black font-semibold'
                : 'bg-cybee-gray border-transparent hover:border-cybee-yellow'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-8 text-right">
        <button
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestionIndex]}
          className="bg-cybee-black text-white font-bold py-3 px-10 rounded-full disabled:bg-gray-300 hover:bg-gray-800 transition-colors"
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

const LessonsScreen: React.FC = () => {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLessons = LESSONS_DATA.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startQuiz = (lesson: Lesson) => {
    if (!lesson.comingSoon) {
      setActiveQuizId(lesson.quizId);
    }
  };
  
  // This is a simple mapping for now. In a real app, you might fetch quiz data based on ID.
  const getQuizData = (quizId: string | null) => {
    if (quizId === 'phishing101') {
        return PHISHING_QUIZ;
    }
    return null;
  }
  
  const activeQuiz = getQuizData(activeQuizId);

  if (activeQuiz) {
    return <QuizView quiz={activeQuiz} onComplete={() => setActiveQuizId(null)} onBack={() => setActiveQuizId(null)} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-cybee-black">Learn Cybersecurity</h1>
        <p className="text-gray-600 mt-1">Strengthen your digital safety skills with these lessons.</p>
      </div>
      
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text"
          placeholder="Search for a lesson..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border-2 border-gray-200 rounded-full py-3 pl-12 pr-4 focus:ring-cybee-blue focus:border-cybee-blue transition"
        />
      </div>
      
      <GamificationCard />

      <div className="space-y-4">
        {filteredLessons.length > 0 ? (
            filteredLessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} onStart={() => startQuiz(lesson)} />
            ))
        ) : (
            <p className="text-center text-gray-500 pt-4">No lessons found. Try a different search term!</p>
        )}
      </div>
    </div>
  );
};

export default LessonsScreen;
