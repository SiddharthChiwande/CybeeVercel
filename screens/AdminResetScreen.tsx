
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetDatabase } from '../services/maintenanceService';
import { ArrowLeftIcon, ShieldAlertIcon, Trash2Icon, RefreshCwIcon } from '../components/Icons';

const AdminResetScreen: React.FC = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState<'idle' | 'confirming' | 'resetting' | 'success' | 'error'>('idle');
    const [safetyKey, setSafetyKey] = useState('');
    const [stats, setStats] = useState<Record<string, number>>({});

    const REQUIRED_KEY = "RESET_CYBEE_2024";

    const handleReset = async () => {
        if (safetyKey !== REQUIRED_KEY) {
            alert("Invalid Safety Key. Operation aborted.");
            return;
        }

        setStatus('resetting');
        try {
            const results = await resetDatabase();
            setStats(results);
            setStatus('success');
            // Force reload after a delay to clear all local states
            setTimeout(() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = '/';
            }, 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center font-mono">
            <div className="w-full max-w-lg bg-gray-800 border-2 border-red-500/30 rounded-3xl p-8 shadow-2xl">
                <header className="flex items-center space-x-4 mb-8">
                    <button onClick={() => navigate('/')} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                        <ArrowLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-2xl font-bold text-red-500">System Maintenance</h1>
                </header>

                {status === 'idle' && (
                    <div className="space-y-6 text-center">
                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-500/50">
                            <ShieldAlertIcon className="w-10 h-10 text-red-500" />
                        </div>
                        <h2 className="text-xl font-bold">Wipe Application Data?</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            This will delete all documents in users, students, transactions, and logs. 
                            Indexes and security rules will remain untouched.
                        </p>
                        <button 
                            onClick={() => setStatus('confirming')}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all"
                        >
                            INITIATE FACTORY RESET
                        </button>
                    </div>
                )}

                {status === 'confirming' && (
                    <div className="space-y-6">
                        <p className="text-yellow-500 font-bold text-center">SAFETY VERIFICATION REQUIRED</p>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-400">Type "{REQUIRED_KEY}" to proceed:</label>
                            <input 
                                type="text"
                                value={safetyKey}
                                onChange={(e) => setSafetyKey(e.target.value)}
                                className="w-full bg-gray-900 border-2 border-red-500 rounded-xl py-3 px-4 text-center text-red-500 font-bold tracking-widest focus:outline-none"
                                placeholder="ENTER KEY"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <button 
                                onClick={() => setStatus('idle')}
                                className="flex-1 bg-gray-700 py-3 rounded-xl font-bold hover:bg-gray-600"
                            >
                                CANCEL
                            </button>
                            <button 
                                onClick={handleReset}
                                disabled={safetyKey !== REQUIRED_KEY}
                                className="flex-1 bg-red-600 py-3 rounded-xl font-bold hover:bg-red-700 disabled:opacity-30 transition-all"
                            >
                                WIPE NOW
                            </button>
                        </div>
                    </div>
                )}

                {status === 'resetting' && (
                    <div className="text-center py-12">
                        <RefreshCwIcon className="w-16 h-16 text-red-500 animate-spin mx-auto mb-6" />
                        <h2 className="text-xl font-bold animate-pulse">DELETING DATA HIVE...</h2>
                        <p className="text-gray-500 mt-2">Connecting to Firestore & Auth...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
                             <Trash2Icon className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-500">RESET COMPLETE</h2>
                        <div className="bg-black/30 p-4 rounded-xl text-left text-xs font-mono space-y-1">
                            {Object.entries(stats).map(([col, count]) => (
                                <div key={col} className="flex justify-between">
                                    <span className="text-gray-400">{col}:</span>
                                    <span className="text-green-400">-{count} docs</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">Application will restart in a few seconds...</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                             <ShieldAlertIcon className="w-8 h-8 text-red-500" />
                        </div>
                        <h2 className="text-xl font-bold text-red-500">RESET FAILED</h2>
                        <p className="text-gray-400">Check your permissions (Firestore Rules) or internet connection.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="bg-gray-700 px-6 py-2 rounded-full"
                        >
                            Retry
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminResetScreen;
