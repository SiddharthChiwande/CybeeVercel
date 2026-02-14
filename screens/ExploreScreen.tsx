
import React, { useState } from 'react';
import { 
    SearchIcon, 
    BotMessageSquareIcon,
    KeyIcon, 
    ShieldCheckIcon,
    ShieldAlertIcon,
    LinkIcon,
    NewspaperIcon,
    GamepadIcon,
    CodeIcon,
} from '../components/Icons';
import { useAppContext } from '../context/AppContext';

// --- Mock Data ---

const LATEST_NEWS = [
  {
    id: 'news1',
    headline: 'Global Phishing Attacks Surge',
    summary: 'A new report highlights a significant increase in sophisticated phishing campaigns targeting remote workers.',
    category: 'Threats',
  },
  {
    id: 'news2',
    headline: 'New OS Update Patches Critical Flaw',
    summary: 'Users are urged to update their devices immediately to protect against a newly discovered vulnerability.',
    category: 'Updates',
  },
  {
    id: 'news3',
    headline: 'The Rise of AI in Cybersecurity',
    summary: 'Experts discuss how artificial intelligence is being used to both defend and attack digital systems.',
    category: 'Trending',
  },
];

const CYBER_TOOLS = [
  {
    id: 'tool1',
    name: 'Password Managers',
    description: 'Securely store and generate complex passwords.',
    icon: <KeyIcon className="w-8 h-8 text-cybee-blue" />,
  },
  {
    id: 'tool2',
    name: 'VPNs (Virtual Private Networks)',
    description: 'Encrypt your internet connection, especially on public Wi-Fi.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-green" />,
  },
  {
    id: 'tool3',
    name: 'Antivirus Software',
    description: 'Protect your devices from malware and viruses.',
    icon: <ShieldAlertIcon className="w-8 h-8 text-cybee-purple" />,
  },
  {
    id: 'tool4',
    name: 'Ethical Hacking Kits',
    description: 'Learn defensive techniques in a safe, controlled environment.',
    icon: <CodeIcon className="w-8 h-8 text-cybee-dark-blue" />,
  },
];

const CHALLENGES = [
  {
    id: 'challenge1',
    title: 'Spot the Phishing Email',
    description: 'Can you identify the red flags in a suspicious email?',
    icon: <GamepadIcon className="w-8 h-8 text-yellow-500" />,
    points: 50,
  },
  {
    id: 'challenge2',
    title: 'Safe Website Challenge',
    description: 'Choose the secure website from a list of options.',
    icon: <GamepadIcon className="w-8 h-8 text-green-500" />,
    points: 30,
  },
];

const FILTERS = ['All', 'News', 'Tools', 'Challenges'];

// --- Sub-components ---

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <section className={`animate-fade-in-up ${className}`}>
    <h2 className="text-2xl font-bold text-cybee-black mb-4">{title}</h2>
    {children}
  </section>
);


const MentorCard: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
    <div 
      className="bg-gradient-to-br from-cybee-blue to-cybee-purple p-6 rounded-2xl shadow-lg flex items-start sm:items-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300" 
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label="Open Cybee Mentor chatbot"
    >
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/30 rounded-full">
            <BotMessageSquareIcon className="w-7 h-7 text-white" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">Ask Cybee Mentor</h3>
            <p className="text-white/90">Have a question about cybersecurity? Get instant answers from your AI guide.</p>
        </div>
    </div>
);


// --- Main Component ---

const ExploreScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const { openMentor } = useAppContext();

  const showSection = (sectionName: string) => {
    return activeFilter === 'All' || activeFilter === sectionName;
  };

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
        .mentor-enter {
            animation: mentor-fade-in 0.3s ease-out forwards;
        }
        .mentor-leave {
            animation: mentor-fade-out 0.3s ease-in forwards;
        }
        @keyframes mentor-fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes mentor-fade-out {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); }
        }
      `}</style>
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-cybee-black">Explore & Discover</h1>
          <p className="text-gray-600 mt-1">Stay updated with the latest in cybersecurity.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search topics, tools, or news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-2 border-gray-200 rounded-full py-3 pl-12 pr-4 focus:ring-cybee-blue focus:border-cybee-blue transition"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {FILTERS.map(filter => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors whitespace-nowrap ${
                activeFilter === filter 
                ? 'bg-cybee-black text-white shadow' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* AI Mentor */}
        <Section title="AI Assistant" className="[animation-delay:100ms]">
          <MentorCard onOpen={openMentor} />
        </Section>

        {/* Latest News */}
        {showSection('News') && (
          <Section title="Stay Updated" className="[animation-delay:200ms]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LATEST_NEWS.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-md border hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-lg">
                          <NewspaperIcon className="w-6 h-6 text-red-600"/>
                      </div>
                      <span className="text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="font-bold text-cybee-black mb-1">{item.headline}</h3>
                  <p className="text-sm text-gray-500 mb-4 h-10">{item.summary}</p>
                  <button className="font-semibold text-cybee-blue text-sm flex items-center space-x-1 group-hover:underline">
                    <span>Read More</span>
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </Section>
        )}
        
        {/* Challenges */}
        {showSection('Challenges') && (
          <Section title="Test Your Skills" className="[animation-delay:300ms]">
            <div className="space-y-4">
              {CHALLENGES.map(challenge => (
                <div key={challenge.id} className="bg-white p-4 rounded-2xl shadow-md border hover:shadow-xl hover:scale-[1.02] transition-all flex items-center space-x-4 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
                      {challenge.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-cybee-black">{challenge.title}</h3>
                    <p className="text-sm text-gray-500">{challenge.description}</p>
                  </div>
                  <div className="text-center px-2">
                    <p className="font-bold text-green-600 text-lg">+{challenge.points}</p>
                    <p className="text-xs text-gray-500">XP</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Tools and Resources */}
        {showSection('Tools') && (
          <Section title="Essential Tools & Resources" className="[animation-delay:400ms]">
            <div className="space-y-4">
              {CYBER_TOOLS.map(tool => (
                <a href="#" key={tool.id} className="bg-white p-4 rounded-2xl shadow-md border hover:shadow-xl transition-all flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
                    {tool.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-cybee-black">{tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors" aria-label="Learn more">
                    <LinkIcon className="w-5 h-5 text-gray-500" />
                  </div>
                </a>
              ))}
            </div>
          </Section>
        )}
      </div>
    </>
  );
};

export default ExploreScreen;
