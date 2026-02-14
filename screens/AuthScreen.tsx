
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BeeIcon } from '../components/Icons';

const AuthScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-cybee-gray flex flex-col items-center justify-center p-4 text-center">
            <div className="mb-12">
                <BeeIcon className="w-24 h-24 mx-auto mb-4" />
                <h1 className="text-4xl font-extrabold text-cybee-black tracking-wider">CYBEE</h1>
                <p className="font-semibold text-cybee-black/80 tracking-wider">BE A SMART BEE ONLINE!</p>
            </div>
            
            <div className="w-full max-w-sm space-y-4">
                <button
                    onClick={() => navigate('/signup')}
                    className="w-full bg-cybee-yellow text-cybee-black font-bold py-4 px-4 rounded-full text-lg hover:bg-yellow-500 transition-colors shadow-lg"
                >
                    Create an Account
                </button>
                <button
                    onClick={() => navigate('/signin')}
                    className="w-full bg-cybee-white text-cybee-black font-bold py-4 px-4 rounded-full text-lg hover:bg-cybee-gray transition-colors border-2 border-cybee-black/20 shadow-lg"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default AuthScreen;
