
import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import {
    PencilIcon,
    BotMessageSquareIcon,
    SaveIcon,
    XIcon,
    CameraIcon,
    UserIcon,
} from '../components/Icons';
import ProfileMentor from '../components/ProfileMentor';

const ProfileScreen: React.FC = () => {
    const { user, updateUserProfile, logout } = useAppContext();
    const [isEditing, setIsEditing] = useState(false);
    const [isMentorOpen, setIsMentorOpen] = useState(false);
    
    // Use a separate state for form data to allow canceling edits
    const [formData, setFormData] = useState(user);

    // Update form data if global user context changes (e.g., from AI mentor)
    useEffect(() => {
        setFormData(user);
    }, [user]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setFormData(prev => ({ ...prev, profilePicture: event.target!.result as string }));
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSave = () => {
        updateUserProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(user); // Reset form data to original user state
        setIsEditing(false);
    };

    const userInitial = user.name ? user.name.charAt(0).toUpperCase() : 'S';

    return (
        <div className="space-y-6 pb-20">
            <header className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-cybee-black">My Profile</h1>
                {!isEditing ? (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 bg-cybee-black text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition-colors"
                    >
                        <PencilIcon className="w-4 h-4" />
                        <span>Edit Profile</span>
                    </button>
                ) : (
                    <div className="flex items-center space-x-2">
                         <button 
                            onClick={handleCancel}
                            className="flex items-center space-x-2 bg-gray-200 text-cybee-black font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-300 transition-colors"
                        >
                            <XIcon className="w-4 h-4" />
                            <span>Cancel</span>
                        </button>
                        <button 
                            onClick={handleSave}
                            className="flex items-center space-x-2 bg-cybee-blue text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition-colors"
                        >
                            <SaveIcon className="w-4 h-4" />
                            <span>Save</span>
                        </button>
                    </div>
                )}
            </header>

            {/* --- Profile Picture --- */}
            <div className="relative w-32 h-32 mx-auto">
                {formData.profilePicture ? (
                    <img src={formData.profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-cybee-yellow" />
                ) : (
                    <div className="w-full h-full bg-cybee-black rounded-full flex items-center justify-center text-cybee-white font-bold text-5xl border-4 border-cybee-yellow/50">
                        {userInitial}
                    </div>
                )}
                {isEditing && (
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute bottom-0 right-0 w-10 h-10 bg-cybee-blue text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                        <CameraIcon className="w-6 h-6" />
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleProfilePicChange} className="hidden" />
                    </button>
                )}
            </div>

            {/* --- User Details --- */}
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EditableField label="Full Name" name="name" value={formData.name} isEditing={isEditing} onChange={handleInputChange} />
                    <EditableField label="Username" name="username" value={formData.username} isEditing={isEditing} onChange={handleInputChange} prefix="@" />
                </div>
                <EditableField label="Email" name="email" value={formData.email} isEditing={isEditing} onChange={handleInputChange} type="email" />
                <EditableField label="Bio / About Me" name="bio" value={formData.bio} isEditing={isEditing} onChange={handleInputChange} type="textarea" />
            </div>

            {/* --- Stats & Preferences --- */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <h3 className="font-bold text-gray-500 mb-2">Learning Stats</h3>
                    <div className="flex justify-around text-center">
                        <div>
                            <p className="font-bold text-2xl text-cybee-blue">{user.rank}</p>
                            <p className="text-xs text-gray-500 font-semibold">Learning Level</p>
                        </div>
                        <div>
                            <p className="font-bold text-2xl text-cybee-purple">{user.points}</p>
                            <p className="text-xs text-gray-500 font-semibold">XP Points</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <h3 className="font-bold text-gray-500 mb-2">Preferences</h3>
                     <div className="flex justify-around items-center">
                         <EditableField label="Theme" name="theme" value={formData.theme} isEditing={isEditing} onChange={handleInputChange} type="select" options={['light', 'dark']} />
                         <EditableField label="Language" name="language" value={formData.language} isEditing={isEditing} onChange={handleInputChange} type="select" options={['English', 'Spanish', 'French']} />
                     </div>
                </div>
             </div>


            {/* --- AI Mentor FAB --- */}
            <button
                onClick={() => setIsMentorOpen(true)}
                className="fixed bottom-24 right-4 sm:right-6 bg-cybee-yellow text-cybee-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40"
                aria-label="Open AI Profile Mentor"
            >
                <BotMessageSquareIcon className="w-8 h-8" />
            </button>
            
            {isMentorOpen && <ProfileMentor onClose={() => setIsMentorOpen(false)} />}
        </div>
    );
};

// Helper component for editable fields
const EditableField: React.FC<{
    label: string;
    name: string;
    value: string;
    isEditing: boolean;
    onChange: (e: any) => void;
    type?: 'text' | 'email' | 'textarea' | 'select';
    prefix?: string;
    options?: string[];
}> = ({ label, name, value, isEditing, onChange, type = 'text', prefix = '', options = [] }) => (
    <div>
        <label className="block text-sm font-bold text-gray-500 mb-1">{label}</label>
        {isEditing ? (
            type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybee-blue"
                    rows={3}
                />
            ) : type === 'select' ? (
                <select 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybee-blue capitalize"
                >
                    {options.map(opt => <option key={opt} value={opt} className="capitalize">{opt}</option>)}
                </select>
            ) : (
                <div className="relative">
                    {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{prefix}</span>}
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={`w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybee-blue ${prefix ? 'pl-7 pr-3' : 'px-3'}`}
                    />
                </div>
            )
        ) : (
            <p className="text-lg text-cybee-black font-semibold truncate capitalize">{prefix}{value}</p>
        )}
    </div>
);

export default ProfileScreen;
