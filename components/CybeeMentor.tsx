
import React, { useState, useEffect, useRef } from 'react';
import { XIcon, SendIcon, BeeIcon } from './Icons';
import { getCybeeMentorResponse } from '../services/geminiService';
import { useAppContext } from '../context/AppContext';
import { CURRENT_LESSONS_DATA } from '../constants';
import type { ChatMessage } from '../types';

const CybeeMentor: React.FC = () => {
    const { user, closeMentor } = useAppContext();
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'ai', text: `Hi ${user.name}! I'm Cybee Mentor. 🤖 Ask me anything about cybersecurity, or tell me what you'd like to learn today!` }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = userInput.trim();
        if (!trimmedInput || isLoading) return;

        const newHistory: ChatMessage[] = [...messages, { role: 'user', text: trimmedInput }];
        
        setMessages(newHistory);
        setUserInput('');
        setIsLoading(true);

        try {
            // Create a context object with relevant user and app data
            const userContext = {
                name: user.name,
                points: user.points,
                rank: user.rank,
                lessonProgress: CURRENT_LESSONS_DATA, // Simulate fetching learning data
            };
            const aiResponse = await getCybeeMentorResponse(newHistory, userContext);
            setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
        } catch (error) {
            console.error('Failed to get mentor response:', error);
            setMessages(prev => [...prev, { role: 'ai', text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 mentor-enter">
            <div className="bg-cybee-gray w-full max-w-2xl h-[90vh] max-h-[700px] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-cybee-white p-4 flex items-center justify-between border-b-2 border-gray-200 flex-shrink-0">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cybee-yellow rounded-full flex items-center justify-center">
                            <BeeIcon className="w-8 h-8 text-cybee-black" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-cybee-black">Cybee Mentor</h2>
                            <p className="text-xs text-green-600 font-semibold flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button onClick={closeMentor} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Close chat">
                        <XIcon className="w-6 h-6 text-gray-600" />
                    </button>
                </header>

                {/* Message Area */}
                <main className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'ai' && (
                                <div className="w-8 h-8 bg-cybee-yellow rounded-full flex items-center justify-center flex-shrink-0">
                                    <BeeIcon className="w-6 h-6" />
                                </div>
                            )}
                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cybee-blue text-white rounded-br-none' : 'bg-white text-cybee-black rounded-bl-none'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
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

                {/* Input Form */}
                <footer className="bg-cybee-white p-4 border-t-2 border-gray-200 flex-shrink-0">
                    <form onSubmit={handleSendMessage} className="relative">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Ask a question..."
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

export default CybeeMentor;
