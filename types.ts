
import React from 'react';

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
  onboardingComplete: boolean;
  budgetLimit: number; // Added to fix DashboardScreen error
}

// User profile and application state types
export interface User {
  name: string;
  username: string;
  email: string;
  profilePicture: string | null;
  bio: string;
  rank: string;
  points: number;
  theme: 'light' | 'dark';
  language: string;
}

// Added to fix DashboardScreen error
export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'expense' | 'income';
  category: string;
  note: string;
  date: Date;
}

// Educational and gamification types
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

export interface Quiz {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: Question[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
}

export interface Lesson {
  id: string;
  quizId: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  icon: React.ReactNode;
  progress: number;
  comingSoon?: boolean;
}

export interface Notification {
  id: string;
  category: 'LEARNING' | 'ACHIEVEMENT' | 'REMINDER' | 'ANNOUNCEMENT';
  title: string;
  timestamp: string;
  isRead: boolean;
}

export interface UpcomingTask {
  id: string;
  type: 'Quiz' | 'Assignment';
  name: string;
  dueDate: string;
  status: 'Pending' | 'Completed';
}

export interface WeeklyProgress {
  week: string;
  xp: number;
  maxXP: number;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}
