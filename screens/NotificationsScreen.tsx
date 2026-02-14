import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Notification } from '../types';
import { NOTIFICATIONS_DATA } from '../constants';
import {
    ArrowLeftIcon,
    TrophyIcon,
    GraduationCapIcon,
    CalendarIcon,
    MegaphoneIcon
} from '../components/Icons';

// Helper function to format date
const timeSince = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "mo ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "m ago";
    return Math.floor(seconds) + "s ago";
};

// Map category to icon and color
const categoryStyles = {
    LEARNING: { icon: <GraduationCapIcon />, color: 'bg-blue-100 text-blue-600' },
    ACHIEVEMENT: { icon: <TrophyIcon />, color: 'bg-yellow-100 text-yellow-600' },
    REMINDER: { icon: <CalendarIcon />, color: 'bg-purple-100 text-purple-600' },
    ANNOUNCEMENT: { icon: <MegaphoneIcon />, color: 'bg-green-100 text-green-600' },
};

const NotificationItem: React.FC<{ notification: Notification; onClick: () => void }> = ({ notification, onClick }) => {
    const { icon, color } = categoryStyles[notification.category];

    return (
        <li
            onClick={onClick}
            className="flex items-start space-x-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
        >
            <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full ${color}`}>
                {React.cloneElement(icon, { className: 'w-6 h-6' })}
            </div>
            <div className="flex-grow">
                <p className="font-semibold text-cybee-black">{notification.title}</p>
                <p className="text-sm text-gray-500">{timeSince(new Date(notification.timestamp))}</p>
            </div>
            {!notification.isRead && (
                 <div className="w-2.5 h-2.5 bg-cybee-blue rounded-full mt-1.5 flex-shrink-0"></div>
            )}
        </li>
    );
};

const NotificationsScreen: React.FC = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS_DATA);

    const handleMarkAsRead = (id: string) => {
        setNotifications(current =>
            current.map(n => (n.id === id ? { ...n, isRead: true } : n))
        );
    };

    const handleMarkAllAsRead = () => {
        setNotifications(current => current.map(n => ({ ...n, isRead: true })));
    };
    
    const groupedNotifications = useMemo(() => {
        // Explicitly type `groups` with `Record<string, Notification[]>` to help `Object.entries`
        // correctly infer that its values are arrays of notifications.
        const groups: Record<string, Notification[]> = { Today: [], Yesterday: [], Earlier: [] };
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        notifications.forEach(n => {
            const nDate = new Date(n.timestamp);
            if (nDate.toDateString() === today.toDateString()) {
                groups.Today.push(n);
            } else if (nDate.toDateString() === yesterday.toDateString()) {
                groups.Yesterday.push(n);
            } else {
                groups.Earlier.push(n);
            }
        });
        return groups;
    }, [notifications]);

    return (
        <div className="space-y-6 pb-4">
            <header className="flex items-center justify-between">
                <div className="flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white" aria-label="Go back">
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-3xl font-bold text-cybee-black ml-2">Notifications</h1>
                </div>
                <button
                    onClick={handleMarkAllAsRead}
                    className="text-sm font-semibold text-cybee-blue hover:underline"
                >
                    Mark all as read
                </button>
            </header>

            {/* Fix: Replace Object.entries with Object.keys to avoid type inference issues.
                Object.entries can sometimes produce an `unknown` type for values in certain TypeScript configurations.
                Using Object.keys and then accessing the property ensures the value is correctly typed as Notification[]. */}
            {Object.keys(groupedNotifications).map((groupName) => {
                const groupNotifications = groupedNotifications[groupName];
                return (
                    groupNotifications.length > 0 && (
                        <section key={groupName}>
                            <h2 className="text-sm font-bold text-gray-500 uppercase px-4 pb-2">{groupName}</h2>
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                <ul className="divide-y divide-gray-200">
                                    {groupNotifications.map(n => (
                                        <NotificationItem
                                            key={n.id}
                                            notification={n}
                                            onClick={() => handleMarkAsRead(n.id)}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )
                );
            })}
            
            {notifications.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-500 font-semibold">No notifications yet!</p>
                    <p className="text-sm text-gray-400">Complete a lesson or quiz to get started.</p>
                </div>
            )}
        </div>
    );
};

export default NotificationsScreen;
