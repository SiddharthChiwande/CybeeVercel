
import React, { useState, useEffect } from 'react';
import { CYBER_QUIZ_QUESTIONS } from '../../constants/games';
import { useAppContext } from '../../context/AppContext';

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const CybersecurityQuizGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const { updateUserPoints } = useAppContext();
    const [questions, setQuestions] = useState(() => shuffleArray(CYBER_QUIZ_QUESTIONS).slice(0, 10));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (answer: string) => {
        if (selectedAnswer) return;

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 10);
            updateUserPoints(10);
        }

        setTimeout(() => {
            setSelectedAnswer(null);
            setIsCorrect(null);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                setShowResults(true);
            }
        }, 1500);
    };

    const handleTryAgain = () => {
        setQuestions(shuffleArray(CYBER_QUIZ_QUESTIONS).slice(0, 10));
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setScore(0);
        setShowResults(false);
    }
    
    if (showResults) {
        return (
            <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-cybee-yellow mb-4">Quiz Finished!</h2>
                <p className="text-xl mb-6">Your final score is:</p>
                <p className="text-6xl font-extrabold mb-8">{score} Points</p>
                <button
                    onClick={handleTryAgain}
                    className="bg-cybee-yellow text-cybee-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 text-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
            <div className="mb-4">
                <p className="text-sm font-semibold text-gray-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                    <div 
                        className="bg-cybee-yellow h-2.5 rounded-full transition-all duration-300" 
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 min-h-[84px]">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
                {currentQuestion.answers.map(answer => {
                    const isSelected = selectedAnswer === answer;
                    const isCorrectAnswer = answer === currentQuestion.correctAnswer;
                    
                    let buttonClass = 'bg-gray-700 hover:bg-gray-600';
                    if (isSelected) {
                        buttonClass = isCorrect ? 'bg-green-600' : 'bg-red-600';
                    } else if (selectedAnswer && isCorrectAnswer) {
                        buttonClass = 'bg-green-600';
                    }

                    return (
                        <button
                            key={answer}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={!!selectedAnswer}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 font-semibold ${buttonClass}`}
                        >
                            {answer}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CybersecurityQuizGame;
