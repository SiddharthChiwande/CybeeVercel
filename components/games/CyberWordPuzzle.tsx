
import React, { useState } from 'react';
import { WORD_PUZZLES } from '../../constants/games';
import { useAppContext } from '../../context/AppContext';

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const CyberWordPuzzle: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const { updateUserPoints } = useAppContext();
    const [puzzles, setPuzzles] = useState(() => shuffleArray(WORD_PUZZLES));
    const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    
    const currentPuzzle = puzzles[currentPuzzleIndex];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (guess.toUpperCase() === currentPuzzle.answer) {
            setScore(prev => prev + 10);
            updateUserPoints(10);
            setFeedback('Correct!');
        } else {
            setFeedback('Try again!');
        }

        setTimeout(() => {
            setFeedback(null);
            setGuess('');
            if (currentPuzzleIndex < puzzles.length - 1) {
                setCurrentPuzzleIndex(prev => prev + 1);
            } else {
                setShowResults(true);
            }
        }, 1500);
    };
    
    const handlePlayAgain = () => {
        setPuzzles(shuffleArray(WORD_PUZZLES));
        setCurrentPuzzleIndex(0);
        setGuess('');
        setScore(0);
        setShowResults(false);
    }
    
    if (showResults) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-cybee-black mb-4">Puzzle Complete!</h2>
                <p className="text-xl mb-6">Your final score is:</p>
                <p className="text-6xl font-extrabold text-cybee-yellow mb-8">{score}</p>
                 <button
                    onClick={handlePlayAgain}
                    className="bg-cybee-yellow text-cybee-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors"
                >
                    Play Again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full text-center">
            <div className="flex justify-between items-center text-sm font-semibold text-gray-500 mb-6">
                <span>Puzzle {currentPuzzleIndex + 1} of {puzzles.length}</span>
                <span>Score: <span className="text-cybee-blue font-bold">{score}</span></span>
            </div>
            
            <p className="text-gray-600 mb-2">Unscramble the word:</p>
            <div className="flex justify-center space-x-2 mb-6">
                {currentPuzzle.scrambled.split('').map((char, index) => (
                    <span key={index} className="w-12 h-12 text-3xl font-bold bg-cybee-yellow text-cybee-black flex items-center justify-center rounded-lg shadow-md">
                        {char}
                    </span>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value.toUpperCase())}
                    placeholder="Your answer..."
                    className="w-full text-center text-lg px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cybee-blue focus:border-cybee-blue mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-cybee-black text-white font-bold py-3 rounded-full text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                    disabled={!guess || !!feedback}
                >
                    Submit
                </button>
            </form>
            
            {feedback && <p className={`mt-4 font-bold ${feedback === 'Correct!' ? 'text-green-600' : 'text-red-600'}`}>{feedback}</p>}
        </div>
    );
};

export default CyberWordPuzzle;
