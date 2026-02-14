
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { User } from '../types';

interface AppContextType {
  user: User;
  aiTip: string;
  isLoggedIn: boolean;
  login: (name: string, email?: string) => void;
  logout: () => void;
  updateAiTip: (tip: string) => void;
  updateUserPoints: (points: number) => void;
  updateUserProfile: (updates: Partial<User>) => void;
  isMentorOpen: boolean;
  openMentor: () => void;
  closeMentor: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultUser: User = {
    name: 'Student',
    username: 'studentbee',
    email: 'student@cybee.app',
    profilePicture: null,
    bio: 'Eager to learn about cybersecurity!',
    rank: 'Security Scout',
    points: 0,
    theme: 'light',
    language: 'English',
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem('cybeeUser'));
  const [isMentorOpen, setIsMentorOpen] = useState(false);

  useEffect(() => {
    try {
      const savedUserRaw = localStorage.getItem('cybeeUser');
      if (savedUserRaw) {
        const savedUser = JSON.parse(savedUserRaw);
        setUser({ ...defaultUser, ...savedUser });
        setIsLoggedIn(true);
      }
    } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('cybeeUser');
        setIsLoggedIn(false);
    }
  }, []);

  const [aiTip, setAiTip] = useState<string>(
    "Welcome to CyBee! Complete a quiz to get your first personalized security tip."
  );

  const login = (name: string, email: string = 'user@cybee.app') => {
    const username = name.replace(/\s+/g, '').toLowerCase();
    const newUser: User = {
        ...defaultUser,
        name,
        username,
        email,
    };
    localStorage.setItem('cybeeUser', JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('cybeeUser');
    setIsLoggedIn(false);
    setUser(defaultUser);
    setAiTip("Welcome to CyBee! Complete a quiz to get your first personalized security tip.");
  };

  const updateAiTip = (tip: string) => {
    setAiTip(tip);
  };
  
  const updateUserPoints = (points: number) => {
    setUser(prevUser => {
        const newPoints = prevUser.points + points;
        let newRank = prevUser.rank;
        if (newPoints > 4000) newRank = 'Cyber Guardian';
        else if (newPoints > 3000) newRank = 'Digital Defender';
        
        const updatedUser = { ...prevUser, points: newPoints, rank: newRank };
        localStorage.setItem('cybeeUser', JSON.stringify(updatedUser));
        return updatedUser;
    });
  };

  const updateUserProfile = (updates: Partial<User>) => {
    setUser(prevUser => {
        const updatedUser = { ...prevUser, ...updates };
        localStorage.setItem('cybeeUser', JSON.stringify(updatedUser));
        return updatedUser;
    });
  };

  const openMentor = () => setIsMentorOpen(true);
  const closeMentor = () => setIsMentorOpen(false);


  const value = { user, aiTip, isLoggedIn, login, logout, updateAiTip, updateUserPoints, isMentorOpen, openMentor, closeMentor, updateUserProfile };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
