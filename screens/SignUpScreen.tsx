
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { 
    AppleIcon, GoogleIcon, FacebookIcon, LinkedInIcon, MicrosoftIcon, 
    ArrowLeftIcon, UKFlagIcon, ChevronDownIcon 
} from '../components/Icons';

const SocialButton: React.FC<{
    icon: React.ReactNode,
    provider: string,
    onClick: () => void,
    delay: number
}> = ({ icon, provider, onClick, delay }) => (
    <button
        onClick={onClick}
        className="w-full flex items-center justify-center bg-white py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        {icon}
        <span className="ml-3">Continue With {provider}</span>
    </button>
);


const SignUpScreen: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAppContext();

    const handleSocialLogin = (provider: string) => {
        // Simulate login and navigate to home
        login(`${provider} User`, `${provider.toLowerCase()}user@cybee.app`);
        navigate('/');
    };

    const socialProviders = [
        { name: 'Apple', icon: <AppleIcon className="w-5 h-5" />, action: () => handleSocialLogin('Apple') },
        { name: 'Google', icon: <GoogleIcon className="w-5 h-5" />, action: () => handleSocialLogin('Google') },
        { name: 'Facebook', icon: <FacebookIcon className="w-5 h-5" />, action: () => handleSocialLogin('Facebook') },
        { name: 'LinkedIn', icon: <LinkedInIcon className="w-5 h-5" />, action: () => handleSocialLogin('LinkedIn') },
        { name: 'Microsoft', icon: <MicrosoftIcon className="w-5 h-5" />, action: () => handleSocialLogin('Microsoft') },
    ];
    
    return (
        <div className="min-h-screen bg-cybee-gray flex flex-col p-4 sm:p-6">
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
            
            <header className="flex items-center justify-between w-full max-w-md mx-auto">
                <button onClick={() => navigate('/auth')} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Go back">
                    <ArrowLeftIcon className="w-6 h-6 text-cybee-black" />
                </button>
                <h1 className="text-xl font-bold text-cybee-black">Create Your Account</h1>
                <button className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm font-semibold">
                    <UKFlagIcon />
                    <span>English</span>
                    <ChevronDownIcon />
                </button>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto">
                <div className="w-full space-y-3">
                    {socialProviders.map((provider, index) => (
                         <SocialButton 
                            key={provider.name}
                            icon={provider.icon}
                            provider={provider.name}
                            onClick={provider.action}
                            delay={100 * (index + 1)}
                         />
                    ))}
                </div>

                <div className="flex items-center my-6 w-full animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm font-semibold">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                    onClick={() => navigate('/signup/email')}
                    className="w-full bg-green-600 text-white font-bold py-4 px-4 rounded-full text-lg hover:bg-green-700 transition-colors shadow-lg animate-fade-in-up"
                    style={{ animationDelay: '700ms' }}
                >
                    Sign Up With Email
                </button>
                
                <p className="text-center mt-8 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    Already have an account?{' '}
                    <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
                        Log In
                    </Link>
                </p>
            </main>
        </div>
    );
};

export default SignUpScreen;
