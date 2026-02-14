
import React, { useState, useEffect, useRef } from 'react';
import { XIcon, SendIcon, BeeIcon } from './Icons';
import { getProfileMentorResponse } from '../services/geminiService';
import { useAppContext } from '../context/AppContext';
import type { Content } from '@google/genai';

const ProfileMentor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { user, updateUserProfile } = useAppContext();
    const [history, setHistory] = useState<Content[]>([
        { role: 'model', parts: [{ text: `Hi ${user.name}! I'm your Profile Mentor. 🤖\n\nHow can I help you update your profile today? You can say things like:\n\n- "Change my name to Beeatrice"\n- "Set my bio to 'Cybersecurity enthusiast!'"\n- "Switch my theme to dark"` }] }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [history]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = userInput.trim();
        if (!trimmedInput || isLoading) return;

        const userMessage: Content = { role: 'user', parts: [{ text: trimmedInput }] };
        const newHistory = [...history, userMessage];
        
        setHistory(newHistory);
        setUserInput('');
        setIsLoading(true);

        try {
            const response = await getProfileMentorResponse(newHistory, user.name);
            const functionCalls = response.functionCalls;

            if (functionCalls && functionCalls.length > 0) {
                const functionCall = functionCalls[0];
                const args = functionCall.args as any;
                
                // Call the actual update function
                updateUserProfile(args);

                const functionResponse: Content = {
                    role: 'model',
                    parts: [{ 
                        functionResponse: {
                            name: 'updateUserProfile',
                            response: { success: true, updatedFields: Object.keys(args) }
                        }
                    }]
                };
                
                // Send the result back to the model to get a confirmation message
                const finalHistory = [...newHistory, { role: 'model', parts: [{ functionCall }] }, functionResponse];
                const finalResponse = await getProfileMentorResponse(finalHistory, user.name);
                setHistory(prev => [...prev, { role: 'model', parts: [{ text: finalResponse.text }] }]);

            } else {
                 setHistory(prev => [...prev, { role: 'model', parts: [{ text: response.text }] }]);
            }
        } catch (error) {
            console.error('Failed to get mentor response:', error);
            setHistory(prev => [...prev, { role: 'model', parts: [{ text: 'Sorry, I encountered an error. Please try again.' }] }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    // Helper to extract text from a Content part
    const getMessageText = (content: Content) => {
        return content.parts.map(part => part.text).join('');
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 mentor-enter">
            <div className="bg-cybee-gray w-full max-w-md h-[80vh] max-h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                <header className="bg-cybee-white p-4 flex items-center justify-between border-b-2 border-gray-200 flex-shrink-0">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cybee-yellow rounded-full flex items-center justify-center">
                            <BeeIcon className="w-8 h-8 text-cybee-black" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-cybee-black">Profile Mentor</h2>
                            <p className="text-xs text-green-600 font-semibold flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Close chat">
                        <XIcon className="w-6 h-6 text-gray-600" />
                    </button>
                </header>

                <main className="flex-grow p-4 overflow-y-auto space-y-4">
                    {history.filter(msg => msg.parts[0].text).map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && (
                                <div className="w-8 h-8 bg-cybee-yellow rounded-full flex items-center justify-center flex-shrink-0">
                                    <BeeIcon className="w-6 h-6" />
                                </div>
                            )}
                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cybee-blue text-white rounded-br-none' : 'bg-white text-cybee-black rounded-bl-none'}`}>
                                <p className="text-sm whitespace-pre-wrap">{getMessageText(msg)}</p>
                            </div>
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                            <div className="w-8 h-8 bg-cybee-yellow rounded-full flex items-center justify-center flex-shrink-0">
                                <BeeIcon className="w-6 h-6" />
                            </div>
                            <div className="max-w-[80%] p-3 rounded-2xl bg-white text-cybee-black rounded-bl-none">
                                <div className="flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </main>

                <footer className="bg-cybee-white p-4 border-t-2 border-gray-200 flex-shrink-0">
                    <form onSubmit={handleSendMessage} className="relative">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="e.g., Change my username to Sid_02"
                            className="w-full bg-cybee-gray border-transparent focus:ring-2 focus:ring-cybee-blue focus:border-transparent rounded-full py-3 pl-4 pr-14 text-sm"
                            disabled={isLoading}
                        />
                        <button 
                            type="submit" 
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-cybee-blue text-white hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                            disabled={isLoading || !userInput.trim()}
                            aria-label="Send message"
                        >
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default ProfileMentor;
