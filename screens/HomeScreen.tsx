import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import {
  CheckCircleIcon,
  StarIcon,
  BotMessageSquareIcon,
  ClipboardListIcon,
  ChevronRightIcon,
  ClockIcon
} from '../components/Icons';

import {
  RECOMMENDED_LESSONS,
  CURRENT_LESSONS_DATA,
  UPCOMING_TASKS_DATA,
  WEEKLY_PROGRESS_DATA
} from '../constants';

/* ✅ Firebase (ONLY Firestore — no auth duplication) */
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';



/* =====================================================
   🔹 Greeting Header
===================================================== */
const GreetingHeader: React.FC = () => {
  const { user } = useAppContext();

  return (
    <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <h1 className="text-3xl font-bold text-cybee-black">
        Hello, {user.name} 👋
      </h1>
      <p className="text-gray-600 mt-1">
        You're 70% done with your AI lesson!
      </p>
    </div>
  );
};



/* =====================================================
   🔹 Reusable Widget
===================================================== */
const Widget: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
  animationDelay: number;
}> = ({ title, children, className, animationDelay }) => (
  <div
    className={`widget bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${className} animate-fade-in-up`}
    style={{ animationDelay: `${animationDelay}ms` }}
  >
    <h2 className="text-lg font-bold text-cybee-black mb-4">{title}</h2>
    {children}
  </div>
);



/* =====================================================
   🔹 Current Lessons
===================================================== */
const CurrentLessonsWidget: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Widget title="Current Lessons" animationDelay={200}>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {CURRENT_LESSONS_DATA.map((lesson) => (
          <div
            key={lesson.id}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg">{lesson.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                <ClockIcon className="w-4 h-4" />
                <span>{lesson.estimatedTime}</span>
              </div>
            </div>

            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold text-gray-600 text-right">
                {lesson.progress}%
              </p>
            </div>

            <button
              onClick={() => navigate('/lessons')}
              className="w-full bg-cybee-black text-white font-bold py-2 px-3 rounded-lg text-sm hover:bg-gray-800 transition-transform hover:scale-105"
            >
              CONTINUE LEARNING
            </button>
          </div>
        ))}
      </div>
    </Widget>
  );
};



/* =====================================================
   🔹 Upcoming Tasks
===================================================== */
const UpcomingTasksWidget: React.FC = () => (
  <Widget title="Upcoming Tasks" animationDelay={300}>
    <div className="space-y-4">
      {UPCOMING_TASKS_DATA.map((task) => {
        const isPending = task.status === 'Pending';

        return (
          <div
            key={task.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
          >
            <ClipboardListIcon className="w-5 h-5 text-blue-600" />

            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800">{task.name}</h3>
              <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
            </div>

            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                isPending
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {task.status}
            </span>
          </div>
        );
      })}
    </div>
  </Widget>
);



/* =====================================================
   🔹 Progress + Firestore Save
===================================================== */
const ProgressOverviewWidget: React.FC = () => {
  const { user } = useAppContext();
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsChartVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  /* ✅ SAVE TO FIRESTORE */
  const saveScore = async () => {
    try {
      const totalXP = WEEKLY_PROGRESS_DATA.reduce((a, b) => a + b.xp, 0);

      await setDoc(doc(db, 'progress', user.name), {
        name: user.name,
        xp: totalXP,
        savedAt: new Date()
      });

      alert('✅ Progress saved to Firebase');
    } catch (e) {
      console.error(e);
      alert('❌ Error saving progress');
    }
  };

  return (
    <Widget title="Progress Overview" animationDelay={400}>
      <div className="h-32 flex items-end justify-around mb-4">
        {WEEKLY_PROGRESS_DATA.map((weekData) => {
          const barHeight = isChartVisible
            ? (weekData.xp / weekData.maxXP) * 100
            : 0;

          return (
            <div
              key={weekData.week}
              className="w-4 bg-cybee-blue rounded transition-all duration-700"
              style={{ height: `${barHeight}%` }}
            />
          );
        })}
      </div>

      {/* ✅ SAVE BUTTON */}
      <button
        onClick={saveScore}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700"
      >
        Save Progress
      </button>
    </Widget>
  );
};



/* =====================================================
   🔹 Mentor
===================================================== */
const AskCybeeMentorWidget: React.FC = () => {
  const { openMentor } = useAppContext();

  return (
    <Widget title="Ask CyBee Mentor" animationDelay={500}>
      <div
        onClick={openMentor}
        className="bg-gradient-to-br from-cybee-blue to-cybee-purple p-6 rounded-xl text-white cursor-pointer"
      >
        Ask your AI Mentor 🤖
      </div>
    </Widget>
  );
};



/* =====================================================
   🔹 HomeScreen
===================================================== */
const HomeScreen: React.FC = () => {
  return (
    <div className="space-y-6">
      <GreetingHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentLessonsWidget />
        <UpcomingTasksWidget />
        <ProgressOverviewWidget />
        <AskCybeeMentorWidget />
      </div>
    </div>
  );
};

export default HomeScreen;
