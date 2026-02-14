
import React, { useState, useEffect } from 'react';
import { MEMORY_ICONS } from '../../constants/games';

const shuffle = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const CyberDefenseMemoryGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [cards, setCards] = useState(() => shuffle([...MEMORY_ICONS, ...MEMORY_ICONS]).map((card, index) => ({ ...card, id: index, isFlipped: false, isMatched: false })));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards.find(c => c.id === firstIndex);
      const secondCard = cards.find(c => c.id === secondIndex);

      if (firstCard && secondCard && firstCard.type === secondCard.type) {
        // Match
        setCards(prevCards =>
          prevCards.map(card =>
            card.type === firstCard.type ? { ...card, isMatched: true } : card
          )
        );
      }
      
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (id: number) => {
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length === 2) {
      return;
    }
    
    setCards(prevCards =>
      prevCards.map(c => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    
    if (flippedCards.length === 0) {
        setFlippedCards([id]);
    } else if (flippedCards.length === 1) {
        setFlippedCards([flippedCards[0], id]);
        setMoves(prev => prev + 1);
    }
  };
  
  // Unflip non-matched cards
  useEffect(() => {
      if (flippedCards.length < 2) {
        const timeout = setTimeout(() => {
            setCards(prevCards => prevCards.map(c => {
                if (!c.isMatched && flippedCards.indexOf(c.id) === -1) {
                    return {...c, isFlipped: false};
                }
                return c;
            }));
        }, 1500); // give time for the flip animation
        return () => clearTimeout(timeout);
      }
  }, [flippedCards]);
  
  const allMatched = cards.every(card => card.isMatched);

  const resetGame = () => {
    setCards(shuffle([...MEMORY_ICONS, ...MEMORY_ICONS]).map((card, index) => ({ ...card, id: index, isFlipped: false, isMatched: false })));
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cybee-black">Memory Match</h2>
        <p className="font-bold text-lg">Moves: <span className="text-cybee-blue">{moves}</span></p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-4 gap-3">
          {cards.map(card => (
            <div key={card.id} className="aspect-square perspective-1000" onClick={() => handleCardClick(card.id)}>
              <div
                className={`w-full h-full relative transition-transform duration-500 transform-style-preserve-3d ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}
              >
                <div className="absolute w-full h-full bg-cybee-blue rounded-lg flex items-center justify-center backface-hidden">
                  {/* Card Back */}
                </div>
                <div className="absolute w-full h-full bg-cybee-gray rounded-lg flex items-center justify-center rotate-y-180 backface-hidden">
                  {/* Card Front */}
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {allMatched && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center text-center backdrop-blur-sm rounded-2xl">
            <h3 className="text-4xl font-extrabold text-cybee-green mb-2">You Win!</h3>
            <p className="text-lg font-semibold mb-4">Completed in {moves} moves.</p>
            <button onClick={resetGame} className="bg-cybee-yellow text-cybee-black font-bold py-2 px-6 rounded-full text-lg hover:bg-yellow-500 transition-colors">
              Play Again
            </button>
          </div>
        )}
      </div>

       <style>{`
          .perspective-1000 { perspective: 1000px; }
          .transform-style-preserve-3d { transform-style: preserve-3d; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
};

export default CyberDefenseMemoryGame;
