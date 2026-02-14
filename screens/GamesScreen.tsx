
import React, { useState } from 'react';
import { GamepadIcon, ArrowLeftIcon, ShieldCheckIcon, ShieldAlertIcon, KeyIcon, LockIcon, MessageCircleWarningIcon, CodeIcon } from '../components/Icons';
import CybersecurityQuizGame from '../components/games/CybersecurityQuizGame';
import SpotThePhishingGame from '../components/games/SpotThePhishingGame';
import PasswordStrengthChallenge from '../components/games/PasswordStrengthChallenge';
import CyberDefenseMemoryGame from '../components/games/CyberDefenseMemoryGame';
import CyberWordPuzzle from '../components/games/CyberWordPuzzle';
import HackAttackSimulationGame from '../components/games/HackAttackSimulationGame';


const games = [
    { id: 'quiz', title: 'Cybersecurity Quiz', description: 'Test your knowledge on various topics.', icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-blue" />, component: CybersecurityQuizGame },
    { id: 'phishing', title: 'Spot the Phishing', description: 'Can you tell real emails from fakes?', icon: <MessageCircleWarningIcon className="w-8 h-8 text-cybee-purple" />, component: SpotThePhishingGame },
    { id: 'password', title: 'Password Challenge', description: 'Create a strong password and see its rating.', icon: <KeyIcon className="w-8 h-8 text-cybee-green" />, component: PasswordStrengthChallenge },
    { id: 'memory', title: 'Cyber Memory Match', description: 'Match pairs of cybersecurity icons.', icon: <LockIcon className="w-8 h-8 text-cybee-dark-blue" />, component: CyberDefenseMemoryGame },
    { id: 'puzzle', title: 'Cyber Word Puzzle', description: 'Unscramble cybersecurity terms.', icon: <ShieldAlertIcon className="w-8 h-8 text-cybee-yellow" />, component: CyberWordPuzzle },
    { id: 'simulation', title: 'Hack Attack Sim', description: 'Make choices to defend against an attack.', icon: <CodeIcon className="w-8 h-8 text-red-500" />, component: HackAttackSimulationGame },
];

const GamesScreen: React.FC = () => {
    const [activeGameId, setActiveGameId] = useState<string | null>(null);

    const handleGameSelect = (id: string) => {
        setActiveGameId(id);
    };

    const handleBack = () => {
        setActiveGameId(null);
    };

    const ActiveGame = games.find(g => g.id === activeGameId)?.component;

    return (
        <div className="space-y-6">
            {!ActiveGame ? (
                <>
                    <div>
                        <h1 className="text-3xl font-bold text-cybee-black flex items-center space-x-2">
                            <GamepadIcon className="w-8 h-8" />
                            <span>Cyber Games</span>
                        </h1>
                        <p className="text-gray-600 mt-1">Learn through play! Select a game to start.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {games.map((game, index) => (
                            <div
                                key={game.id}
                                onClick={() => handleGameSelect(game.id)}
                                className="bg-white p-4 rounded-2xl shadow-md transition-all duration-300 flex items-center space-x-4 hover:shadow-xl hover:scale-105 cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cybee-gray rounded-xl">
                                    {game.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-cybee-black">{game.title}</h3>
                                    <p className="text-sm text-gray-500">{game.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div>
                     <button onClick={handleBack} className="flex items-center text-sm font-semibold text-gray-600 hover:text-cybee-black mb-4">
                        <ArrowLeftIcon className="w-4 h-4 mr-1"/>
                        Back to Games
                    </button>
                    <ActiveGame onComplete={handleBack} />
                </div>
            )}
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
        </div>
    );
};

export default GamesScreen;
