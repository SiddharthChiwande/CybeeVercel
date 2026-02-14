
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingLogo: React.FC = () => (
    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-500">
        <svg viewBox="0 0 100 100" className="w-12 h-12">
            <path d="M20 80 L50 20 L80 80 L70 80 L50 40 L30 80 Z" fill="#4CAF50" />
            <path d="M55 80 L65 80 L85 20 L75 20 Z" fill="#FFC107" />
        </svg>
    </div>
);


const SplashScreen: React.FC = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        sessionStorage.setItem('splashSeen', 'true');
        navigate('/auth');
    };

    return (
        <div 
            className="relative w-full h-screen bg-[#A0E9FF] overflow-hidden flex flex-col cursor-pointer"
            onClick={handleStart}
            role="button"
            tabIndex={0}
            aria-label="Tap anywhere to start"
        >
            {/* Placeholder for top illustration */}
            <div className="flex-grow flex items-center justify-center text-white text-center p-4">
                 <div className="absolute top-1/4 w-full px-4">
                    <h1 className="text-4xl font-bold text-cybee-black drop-shadow-md">Welcome to CyBee</h1>
                    <p className="text-lg text-cybee-black/80 drop-shadow-sm mt-1">Your personal guide to online safety.</p>
                </div>
            </div>
            
            {/* White curved bottom part */}
            <div className="relative h-[45%] w-full bg-transparent">
                <div 
                    className="absolute bottom-0 w-[160%] h-full bg-cybee-white rounded-t-[100%]"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                />
                <div className="relative h-full bg-cybee-white flex flex-col items-center justify-center text-center px-8 pt-12 pb-8">
                     <div className="absolute -top-10">
                        <OnboardingLogo />
                    </div>
                    
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-cybee-black leading-tight">
                            Empowering 45M+ Learners <br/> & 10M+ Graduates in 193 Countries!
                        </h2>

                        <div className="flex items-center justify-center space-x-2 my-6">
                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                            <div className="w-5 h-2.5 bg-gray-700 rounded-full"></div>
                        </div>

                        <p className="text-lg font-semibold text-green-600 animate-pulse">
                            Tap anywhere to start
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
