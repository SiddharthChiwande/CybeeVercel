
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeeIcon, BellIcon, CogIcon } from './Icons.tsx';
import { useAppContext } from '../context/AppContext.tsx';
import { useAuth } from '../context/AuthContext.tsx';
import { NOTIFICATIONS_DATA } from '../constants.tsx';


const Header: React.FC = () => {
    const { user: appUser } = useAppContext();
    const { user: firebaseUser, logout } = useAuth();
    const navigate = useNavigate();
    
    // Fallback to displayName or first letter
    const userInitial = firebaseUser?.displayName 
        ? firebaseUser.displayName.charAt(0).toUpperCase() 
        : (firebaseUser?.email ? firebaseUser.email.charAt(0).toUpperCase() : 'S');

    // Mock check for unread notifications
    const hasUnreadNotifications = NOTIFICATIONS_DATA.some(n => !n.isRead);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/auth');
        } catch (err) {
            console.error("Logout error", err);
        }
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 bg-cybee-white z-50 shadow-md">
            <div className="max-w-4xl mx-auto flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-cybee-yellow rounded-full flex items-center justify-center">
                        <BeeIcon className="w-8 h-8 text-cybee-black" />
                    </div>
                    <h1 className="text-xl font-bold text-cybee-black">CyBee</h1>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                     <button onClick={() => navigate('/notifications')} className="relative p-2 rounded-full hover:bg-cybee-gray" aria-label="Notifications">
                        <BellIcon className="w-6 h-6 text-gray-500" />
                        {hasUnreadNotifications && (
                            <span className="absolute top-1.5 right-1.5 block w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-cybee-white"></span>
                        )}
                    </button>
                    <button onClick={() => navigate('/settings')} className="p-2 rounded-full hover:bg-cybee-gray" aria-label="Settings">
                        <CogIcon className="w-6 h-6 text-gray-500" />
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="w-10 h-10 bg-cybee-black rounded-full flex items-center justify-center text-cybee-white font-bold text-lg hover:opacity-90"
                        role="button"
                        tabIndex={0}
                        aria-label="Logout"
                    >
                        {userInitial}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
