import React, { useState } from 'react';
import { 
    CheckCircleIcon, 
    LightbulbIcon, 
    StarIcon, 
    ClockIcon,
    DownloadIcon,
    TrophyIcon,
} from '../components/Icons';
import { useAppContext } from '../context/AppContext';

const FILTERS = ['Weekly', 'Monthly', 'All Time'];
const MOCK_DATA = {
    modulesCompleted: 1,
    totalModules: 4,
    quizzesAttempted: 1,
    averageScore: 75,
    xpGain: [80, 150, 120, 250], // Last 4 weeks
    timeSpent: 5,
    badges: ['Phishing Defender', 'Quiz Master', 'Cyber Smart'],
};

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string; delay: number }> = ({ title, children, className, delay }) => (
  <section 
    className={`animate-fade-in-up ${className}`} 
    style={{ animationDelay: `${delay}ms` }}
  >
    <h2 className="text-xl font-bold text-cybee-black mb-3 px-1">{title}</h2>
    <div className="bg-white p-4 rounded-2xl shadow-md border">
      {children}
    </div>
  </section>
);

const OverallPerformanceSummary: React.FC = () => {
    const overallProgress = (MOCK_DATA.modulesCompleted / MOCK_DATA.totalModules) * 100;
    return (
        <Section title="Overall Performance" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                    <p className="font-bold text-2xl text-cybee-blue">{MOCK_DATA.modulesCompleted}/{MOCK_DATA.totalModules}</p>
                    <p className="text-xs text-gray-500 font-semibold">Modules Completed</p>
                </div>
                <div>
                    <p className="font-bold text-2xl text-cybee-purple">{MOCK_DATA.quizzesAttempted}</p>
                    <p className="text-xs text-gray-500 font-semibold">Quizzes Attempted</p>
                </div>
                <div>
                    <p className="font-bold text-2xl text-cybee-green">{MOCK_DATA.averageScore}%</p>
                    <p className="text-xs text-gray-500 font-semibold">Average Score</p>
                </div>
                 <div>
                    <p className="font-bold text-2xl text-cybee-yellow">{overallProgress}%</p>
                    <p className="text-xs text-gray-500 font-semibold">Overall Progress</p>
                </div>
            </div>
             <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-cybee-yellow to-orange-400 h-2 rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
        </Section>
    );
};

const LearningProgressGraph: React.FC = () => (
    <Section title="Learning Progress (XP Gained)" delay={200}>
        <div className="h-48 relative">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                 <line x1="0" y1="30" x2="300" y2="30" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="0" y1="90" x2="300" y2="90" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="2,2" />
                <path d="M 0 100 L 75 80 L 150 50 L 225 70 L 300 40" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
            </svg>
            <div className="absolute bottom-0 w-full flex justify-around px-2 text-xs text-gray-500 font-semibold">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>This Week</span>
            </div>
        </div>
    </Section>
);

const QuizPerformance: React.FC = () => (
    <Section title="Quiz Performance" delay={300}>
        <div className="space-y-4">
            <div>
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-cybee-black">Phishing Awareness</h3>
                    <p className="font-bold text-cybee-green text-lg">75%</p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>Accuracy: 3/4</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Score: +75 XP</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-semibold text-green-800">Best Topic</p>
                    <p className="text-gray-600">Scam Recognition</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                    <p className="font-semibold text-red-800">Needs Improvement</p>
                    <p className="text-gray-600">Suspicious Links</p>
                </div>
            </div>
        </div>
    </Section>
);

const PersonalizedInsights: React.FC = () => (
    <Section title="Personalized Insights" delay={400}>
        <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cybee-blue/20 rounded-full">
                <LightbulbIcon className="w-6 h-6 text-cybee-blue" />
            </div>
            <p className="text-blue-900 text-sm font-semibold pt-1">You're strong in Scam Recognition! To improve your score, try reviewing the lesson on how to identify suspicious links in emails.</p>
        </div>
    </Section>
);

const ReportScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Weekly');

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-cybee-black">Your Report</h1>
          <p className="text-gray-600 mt-1">A summary of your cybersecurity learning journey.</p>
        </div>
        
        <div className="flex space-x-2">
          {FILTERS.map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                activeFilter === filter 
                ? 'bg-cybee-black text-white shadow' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <OverallPerformanceSummary />
        <LearningProgressGraph />
        <QuizPerformance />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Section title="Time Spent Learning" delay={350}>
                <div className="flex items-center space-x-3">
                    <ClockIcon className="w-8 h-8 text-cybee-purple" />
                    <div>
                        <p className="font-bold text-2xl text-cybee-black">{MOCK_DATA.timeSpent} hrs</p>
                        <p className="text-sm text-gray-500">this week</p>
                    </div>
                </div>
            </Section>
            <Section title="Achievements" delay={350}>
                <div className="flex items-center space-x-3">
                    <TrophyIcon className="w-8 h-8 text-cybee-yellow" />
                     <div>
                        <p className="font-bold text-2xl text-cybee-black">{MOCK_DATA.badges.length}</p>
                        <p className="text-sm text-gray-500">badges earned</p>
                    </div>
                </div>
            </Section>
        </div>

        <PersonalizedInsights />

        <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <button
                className="w-full flex items-center justify-center space-x-2 bg-cybee-blue text-white font-bold py-3 px-4 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
                <DownloadIcon className="w-6 h-6" />
                <span>Download PDF Report</span>
            </button>
        </div>

      </div>
    </>
  );
};

export default ReportScreen;