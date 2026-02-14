
import React, { useState } from 'react';
import { PHISHING_EMAILS } from '../../constants/games';
import { useAppContext } from '../../context/AppContext';
import { ShieldCheckIcon, ShieldAlertIcon } from '../Icons';

const SpotThePhishingGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const { updateUserPoints } = useAppContext();
    const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState<{ message: string; correct: boolean } | null>(null);

    const currentEmail = PHISHING_EMAILS[currentEmailIndex];

    const handleChoice = (isPhishingGuess: boolean) => {
        if (feedback) return;

        const isCorrect = isPhishingGuess === currentEmail.isPhishing;
        if (isCorrect) {
            setScore(prev => prev + 1);
            updateUserPoints(20);
            setFeedback({ message: 'Correct!', correct: true });
        } else {
            setFeedback({ message: 'Incorrect!', correct: false });
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentEmailIndex < PHISHING_EMAILS.length - 1) {
                setCurrentEmailIndex(prev => prev + 1);
            } else {
                setShowResults(true);
            }
        }, 2000);
    };
    
    const handlePlayAgain = () => {
        setCurrentEmailIndex(0);
        setScore(0);
        setShowResults(false);
    }

    if (showResults) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-cybee-black mb-4">Game Over!</h2>
                <p className="text-xl mb-6">You spotted</p>
                <p className="text-6xl font-extrabold text-cybee-blue mb-8">{score} / {PHISHING_EMAILS.length}</p>
                 <button
                    onClick={handlePlayAgain}
                    className="bg-cybee-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors"
                >
                    Play Again
                </button>
            </div>
        );
    }
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
            <p className="text-sm font-semibold text-gray-500 text-center mb-2">Email {currentEmailIndex + 1} of {PHISHING_EMAILS.length}</p>
            <div className="bg-cybee-gray p-4 rounded-lg border border-gray-200 mb-6">
                <p className="text-sm text-gray-500">From: <span className="text-cybee-black font-semibold">{currentEmail.from}</span></p>
                <h3 className="text-lg font-bold mt-1">{currentEmail.subject}</h3>
                <hr className="my-2" />
                <p className="text-sm text-gray-700">{currentEmail.body}</p>
            </div>
            
            {feedback && (
                <div className={`text-center font-bold p-3 rounded-lg mb-4 ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {feedback.message}
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => handleChoice(false)}
                    disabled={!!feedback}
                    className="flex flex-col items-center justify-center p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
                >
                    <ShieldCheckIcon className="w-8 h-8 mb-1" />
                    <span className="font-bold">Safe</span>
                </button>
                <button
                    onClick={() => handleChoice(true)}
                    disabled={!!feedback}
                    className="flex flex-col items-center justify-center p-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                    <ShieldAlertIcon className="w-8 h-8 mb-1" />
                    <span className="font-bold">Phishing</span>
                </button>
            </div>
        </div>
    );
};

export default SpotThePhishingGame;
