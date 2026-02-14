import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    SunIcon,
    MoonIcon,
    BellIcon,
    GlobeIcon,
    UserIcon,
    LockIcon,
    BotMessageSquareIcon,
    Volume2Icon,
    HelpCircleIcon,
    InfoIcon,
    PaletteIcon,
    LogOutIcon,
    Trash2Icon,
    VibrateIcon,
    TypeIcon,
    PencilIcon,
} from '../components/Icons';

// Reusable Switch component for toggles
const SwitchToggle: React.FC<{ checked: boolean; onChange: (checked: boolean) => void }> = ({ checked, onChange }) => {
    return (
        <button
            type="button"
            className={`${checked ? 'bg-cybee-blue' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
        >
            <span
                aria-hidden="true"
                className={`${checked ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
        </button>
    );
};

// Component for a section of settings
const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section>
        <h2 className="text-sm font-bold text-gray-500 uppercase px-4 pb-2">{title}</h2>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
                {children}
            </ul>
        </div>
    </section>
);

// Reusable component for a single setting item
const SettingsItem: React.FC<{
    // Added <any> to React.ReactElement to resolve "className does not exist" error in cloneElement
    icon: React.ReactElement<any>;
    text: string;
    onClick?: () => void;
    isToggle?: boolean;
    toggleState?: boolean;
    onToggleChange?: (state: boolean) => void;
    color?: string;
}> = ({ icon, text, onClick, isToggle = false, toggleState = false, onToggleChange = () => {}, color = 'text-cybee-black' }) => (
    <li
        className={`flex items-center justify-between p-4 ${onClick ? 'hover:bg-gray-50 cursor-pointer' : ''} transition-colors`}
        onClick={onClick}
    >
        <div className="flex items-center space-x-4">
            <div className="text-gray-500">{React.cloneElement(icon, { className: 'w-6 h-6' })}</div>
            <span className={`font-semibold ${color}`}>{text}</span>
        </div>
        {isToggle ? (
             <SwitchToggle checked={toggleState} onChange={onToggleChange} />
        ) : (
             onClick && <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        )}
    </li>
);

const SettingsScreen: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAppContext();

    // States for interactive settings
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notifications, setNotifications] = useState({
        newQuiz: true,
        achievement: true,
        reminders: false,
    });
    const [sound, setSound] = useState(true);
    const [vibration, setVibration] = useState(true);


    return (
        <div className="space-y-6 pb-4">
            <header className="flex items-center">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white" aria-label="Go back">
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-3xl font-bold text-cybee-black ml-2">Settings</h1>
            </header>

            <SettingsSection title="Theme Settings">
                 <SettingsItem
                    icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
                    text={isDarkMode ? "Dark Mode" : "Light Mode"}
                    isToggle
                    toggleState={isDarkMode}
                    onToggleChange={setIsDarkMode}
                />
                <SettingsItem icon={<PaletteIcon />} text="Accent Color" onClick={() => {}} />
            </SettingsSection>
            
            <SettingsSection title="Notification Settings">
                <SettingsItem
                    icon={<BellIcon />}
                    text="New Quiz Available"
                    isToggle
                    toggleState={notifications.newQuiz}
                    onToggleChange={(val) => setNotifications(p => ({...p, newQuiz: val}))}
                />
                <SettingsItem
                    icon={<BellIcon />}
                    text="Achievement Unlocked"
                    isToggle
                    toggleState={notifications.achievement}
                    onToggleChange={(val) => setNotifications(p => ({...p, achievement: val}))}
                />
                <SettingsItem
                    icon={<BellIcon />}
                    text="App Reminders"
                    isToggle
                    toggleState={notifications.reminders}
                    onToggleChange={(val) => setNotifications(p => ({...p, reminders: val}))}
                />
            </SettingsSection>

            <SettingsSection title="Language Settings">
                <SettingsItem icon={<GlobeIcon />} text="Language" onClick={() => {}} />
            </SettingsSection>

            <SettingsSection title="Account Settings">
                <SettingsItem icon={<PencilIcon />} text="Edit Profile" onClick={() => {}} />
                <SettingsItem icon={<LockIcon />} text="Privacy & Security" onClick={() => {}} />
            </SettingsSection>

            <SettingsSection title="AI Preferences">
                 <SettingsItem icon={<BotMessageSquareIcon />} text="AI Tone" onClick={() => {}} />
            </SettingsSection>

            <SettingsSection title="Sound & Vibration">
                <SettingsItem icon={<Volume2Icon />} text="Sound Effects" isToggle toggleState={sound} onToggleChange={setSound} />
                <SettingsItem icon={<VibrateIcon />} text="Vibration Feedback" isToggle toggleState={vibration} onToggleChange={setVibration} />
            </SettingsSection>

            <SettingsSection title="Display & Accessibility">
                <SettingsItem icon={<TypeIcon />} text="Font Size" onClick={() => {}} />
            </SettingsSection>

            <SettingsSection title="Help & Support">
                <SettingsItem icon={<HelpCircleIcon />} text="Help & FAQ" onClick={() => {}} />
            </SettingsSection>

            <SettingsSection title="About">
                <SettingsItem icon={<InfoIcon />} text="About CyBee" onClick={() => {}} />
            </SettingsSection>

            <div className="pt-4 space-y-3">
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center space-x-2 bg-white text-red-500 font-bold py-3 px-4 rounded-full text-lg hover:bg-red-50 transition-colors border-2 border-gray-200"
                >
                    <LogOutIcon className="w-6 h-6" />
                    <span>Logout</span>
                </button>
                 <button
                    onClick={() => {alert("This action is permanent and cannot be undone.")}}
                    className="w-full flex items-center justify-center space-x-2 bg-white text-red-500 font-bold py-3 px-4 rounded-full text-lg hover:bg-red-50 transition-colors border-2 border-gray-200"
                >
                    <Trash2Icon className="w-6 h-6" />
                    <span>Delete Account</span>
                </button>
            </div>
        </div>
    );
};

export default SettingsScreen;