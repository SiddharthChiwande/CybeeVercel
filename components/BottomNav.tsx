import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGridIcon, BookOpenIcon, SearchIcon, UserIcon, BarChartIcon } from './Icons';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
                `flex flex-col items-center justify-center space-y-1 w-full p-2 rounded-lg transition-colors duration-200 ${
                isActive ? 'text-cybee-blue font-bold' : 'text-gray-400 hover:text-cybee-blue'
                }`
            }
        >
            {icon}
            <span className="text-xs font-medium">{label}</span>
        </NavLink>
    );
};


const BottomNav: React.FC = () => {
    const iconClass = "w-7 h-7";

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-cybee-white shadow-top z-50 border-t-2 border-cybee-gray">
            <div className="max-w-4xl mx-auto flex justify-around items-center h-20 px-2">
                <NavItem to="/" icon={<LayoutGridIcon className={iconClass} />} label="Dashboard" />
                <NavItem to="/lessons" icon={<BookOpenIcon className={iconClass} />} label="Learn" />
                <NavItem to="/explore" icon={<SearchIcon className={iconClass} />} label="Explore" />
                <NavItem to="/progress" icon={<UserIcon className={iconClass} />} label="Profile" />
                <NavItem to="/report" icon={<BarChartIcon className={iconClass} />} label="Report" />
            </div>
        </nav>
    );
};

export default BottomNav;