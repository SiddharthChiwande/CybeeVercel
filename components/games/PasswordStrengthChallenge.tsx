
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XIcon } from '../Icons';

const PasswordStrengthChallenge: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState({ score: 0, label: 'Very Weak', color: 'bg-red-500' });
    const [criteria, setCriteria] = useState({
        length: false,
        uppercase: false,
        number: false,
        symbol: false,
    });

    useEffect(() => {
        let score = 0;
        const newCriteria = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            symbol: /[^A-Za-z0-9]/.test(password),
        };

        if (newCriteria.length) score++;
        if (newCriteria.uppercase) score++;
        if (newCriteria.number) score++;
        if (newCriteria.symbol) score++;

        if (password.length > 12 && newCriteria.uppercase && newCriteria.number && newCriteria.symbol) {
            score = 5; // Extra strong
        }
        
        setCriteria(newCriteria);

        let label = 'Very Weak';
        let color = 'bg-red-500';
        switch (score) {
            case 1: label = 'Weak'; color = 'bg-orange-500'; break;
            case 2: label = 'Medium'; color = 'bg-yellow-500'; break;
            case 3:
            case 4: label = 'Strong'; color = 'bg-cybee-green'; break;
            case 5: label = 'Very Strong'; color = 'bg-green-700'; break;
        }

        setStrength({ score, label, color });

    }, [password]);

    const strengthPercentage = password.length === 0 ? 0 : (strength.score / 5) * 100;
    
    const Criterion: React.FC<{ text: string; met: boolean }> = ({ text, met }) => (
        <div className={`flex items-center space-x-2 transition-colors ${met ? 'text-cybee-green' : 'text-gray-500'}`}>
            {met ? <CheckCircleIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5 bg-gray-200 text-gray-500 rounded-full p-0.5" />}
            <span className="text-sm font-semibold">{text}</span>
        </div>
    );

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
            <h2 className="text-2xl font-bold text-center text-cybee-black mb-2">Password Strength Challenge</h2>
            <p className="text-center text-gray-600 mb-6">Create a strong password and see how it scores!</p>

            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password here..."
                className="w-full text-center text-lg px-4 py-3 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cybee-blue focus:border-cybee-blue mb-4"
            />

            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                    className={`h-4 rounded-full transition-all duration-300 ${strength.color}`}
                    style={{ width: `${strengthPercentage}%` }}
                ></div>
            </div>
            <p className="text-right font-bold mb-6" style={{ color: strength.color.replace('bg-', '') }}>{strength.label}</p>
            
            <div className="bg-cybee-gray p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Criterion text="At least 8 characters" met={criteria.length} />
                <Criterion text="An uppercase letter (A-Z)" met={criteria.uppercase} />
                <Criterion text="A number (0-9)" met={criteria.number} />
                <Criterion text="A symbol (!@#$...)" met={criteria.symbol} />
            </div>
        </div>
    );
};

export default PasswordStrengthChallenge;
