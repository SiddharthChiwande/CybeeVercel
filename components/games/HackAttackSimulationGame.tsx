
import React, { useState } from 'react';
import { HACK_SIM_SCENARIO } from '../../constants/games';
import { useAppContext } from '../../context/AppContext';

const HackAttackSimulationGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const { updateUserPoints } = useAppContext();
    // Use useState to manage game state; imported from react to fix previous error
    const [currentScene, setCurrentScene] = useState(HACK_SIM_SCENARIO.start);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleChoice = (choice: { text: string; next: string; score: number }) => {
        setScore(prev => prev + choice.score);
        updateUserPoints(choice.score);
        const nextSceneKey = choice.next as keyof typeof HACK_SIM_SCENARIO;
        const nextScene = HACK_SIM_SCENARIO[nextSceneKey];
        setCurrentScene(nextScene);
        if (nextScene.choices.length === 0 || nextScene.choices[0].text.includes('Game Over') || nextScene.choices[0].text.includes('You Win')) {
             setTimeout(() => setIsGameOver(true), 500);
        }
    };
    
    const handlePlayAgain = () => {
        setCurrentScene(HACK_SIM_SCENARIO.start);
        setScore(0);
        setIsGameOver(false);
    }

    return (
        <div className="font-mono bg-cybee-dark-blue text-green-400 p-6 rounded-2xl shadow-lg w-full border-2 border-green-400/30">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-green-400/30">
                 <h2 className="text-xl font-bold text-white">[Hack Attack Simulation]</h2>
                 <p className="text-white">Score: <span className="font-bold">{score}</span></p>
            </div>
            
            <div className="mb-6 min-h-[100px]">
                <p className="whitespace-pre-wrap animate-fade-in">{currentScene.text}</p>
            </div>
            
            {!isGameOver ? (
                <div className="space-y-3">
                    {currentScene.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => handleChoice(choice)}
                            className="w-full text-left p-3 border border-green-400/50 rounded-lg hover:bg-green-400/10 transition-colors"
                        >
                            {'>'} {choice.text}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <button
                        onClick={handlePlayAgain}
                        className="bg-green-500 text-cybee-dark-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
                    >
                        Play Again
                    </button>
                </div>
            )}
            <style>{`
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default HackAttackSimulationGame;
