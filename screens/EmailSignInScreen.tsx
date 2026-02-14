
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import { ArrowLeftIcon } from '../components/Icons.tsx';

const EmailSignInScreen: React.FC = () => {
    const navigate = useNavigate();
    const { signInWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email.trim() || !password.trim()) return;

        setIsLoading(true);
        try {
            await signInWithEmail(email.trim(), password);
            navigate('/');
        } catch (err: any) {
            console.error(err);
            // Specific requirements for error messaging
            if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
                setError("Email or password is incorrect");
            } else {
                setError(err.message || "An error occurred during sign in");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-cybee-gray flex flex-col p-4 sm:p-6">
            <header className="flex items-center justify-between w-full max-w-md mx-auto">
                <button onClick={() => navigate('/signin')} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Go back">
                    <ArrowLeftIcon className="w-6 h-6 text-cybee-black" />
                </button>
                <h1 className="text-xl font-bold text-cybee-black">Sign In with Email</h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto">
                <form onSubmit={handleSignIn} className="bg-cybee-white shadow-lg rounded-3xl p-8 space-y-6 w-full">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cybee-yellow focus:border-cybee-yellow"
                            placeholder="you@example.com"
                        />
                    </div>
                     <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cybee-yellow focus:border-cybee-yellow"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-full text-lg hover:bg-green-700 transition-colors disabled:bg-green-400"
                        disabled={isLoading || !email.trim() || !password.trim()}
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default EmailSignInScreen;
