

import React from 'react';
import type { Quiz, LeaderboardEntry, Lesson, Notification, UpcomingTask, WeeklyProgress } from './types';
import { ShieldCheckIcon, KeyIcon, MessageCircleWarningIcon, SearchIcon, CheckCircleIcon, ClipboardListIcon } from './components/Icons';

export const PHISHING_QUIZ: Quiz = {
  id: 'phishing101',
  title: 'Phishing Basics',
  icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-black" />,
  questions: [
    {
      id: 1,
      text: 'What is the main goal of a phishing attack?',
      options: ['To install a virus', 'To steal personal information', 'To crash your computer', 'To sell you a product'],
      correctAnswer: 'To steal personal information',
      topic: 'Phishing Goal',
    },
    {
      id: 2,
      text: 'You receive an email from your bank asking you to click a link to verify your account. What should you do?',
      options: ['Click the link and log in', 'Reply with your account details', 'Ignore it and delete it', 'Go to your bank\'s official website directly'],
      correctAnswer: 'Go to your bank\'s official website directly',
      topic: 'Suspicious Links',
    },
    {
      id: 3,
      text: 'Which of these is a sign of a phishing email?',
      options: ['A generic greeting like "Dear Customer"', 'Perfect grammar and spelling', 'An email from a known contact', 'A request for a donation to charity'],
      correctAnswer: 'A generic greeting like "Dear Customer"',
      topic: 'Email Red Flags',
    },
     {
      id: 4,
      text: 'An email claims you have won a lottery you never entered and asks for a fee to claim the prize. This is likely:',
      options: ['A legitimate opportunity', 'A mistake', 'A scam', 'A marketing survey'],
      correctAnswer: 'A scam',
      topic: 'Scam Recognition',
    }
  ],
};

export const QUICK_ACCESS_QUIZZES: Omit<Quiz, 'questions'>[] = [
  { id: 'passwords', title: 'Passwords', icon: <KeyIcon className="w-8 h-8 text-cybee-black" /> },
  { id: 'phishing101', title: 'Phishing', icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-black" /> },
  { id: 'cyberbullying', title: 'Cyberbullying', icon: <MessageCircleWarningIcon className="w-8 h-8 text-cybee-black" /> },
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, name: 'Alex', points: 4500 },
  { rank: 2, name: 'Beeatrice', points: 3800 },
  { rank: 3, name: 'You', points: 2500 },
  { rank: 4, name: 'Chris', points: 2100 },
  { rank: 5, name: 'Dana', points: 1800 },
];

export const DAILY_TIPS: string[] = [
  "Use a password manager to create and store strong, unique passwords.",
  "Enable Two-Factor Authentication (2FA) on all your important accounts.",
  "Think before you click! Hover over links in emails to see the actual destination.",
  "Be wary of public Wi-Fi. Use a VPN to encrypt your connection.",
  "Regularly update your software and apps to patch security holes."
];

export const RECOMMENDED_LESSONS = [
  {
    id: 'passwords-advanced',
    title: 'Strong Passwords',
    description: 'Learn to create and manage unbreakable passwords.',
    icon: <KeyIcon className="w-8 h-8 text-cybee-black" />
  },
  {
    id: '2fa-deep-dive',
    title: '2FA Explained',
    description: 'Master Two-Factor Authentication.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-black" />
  },
  {
    id: 'social-media-privacy',
    title: 'Social Privacy',
    description: 'Protect your info on social media.',
    icon: <MessageCircleWarningIcon className="w-8 h-8 text-cybee-black" />
  },
  {
    id: 'safe-browsing',
    title: 'Safe Browsing',
    description: 'Tips for browsing the web safely.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-black" />
  }
];

export const LESSONS_DATA: Lesson[] = [
  {
    id: 'phishing101',
    quizId: 'phishing101',
    title: 'Phishing Awareness',
    description: 'Learn to spot and avoid suspicious emails and messages.',
    difficulty: 'Easy',
    icon: <ShieldCheckIcon className="w-8 h-8 text-cybee-blue" />,
    progress: 75,
  },
  {
    id: 'password-protection',
    quizId: 'password-protection',
    title: 'Password Protection',
    description: 'Create strong, unique passwords and manage them.',
    difficulty: 'Easy',
    icon: <KeyIcon className="w-8 h-8 text-cybee-green" />,
    progress: 0,
    comingSoon: true,
  },
  {
    id: 'safe-browsing',
    quizId: 'safe-browsing',
    title: 'Safe Browsing Habits',
    description: 'Navigate the web securely and protect your data.',
    difficulty: 'Medium',
    icon: <SearchIcon className="w-8 h-8 text-cybee-purple" />,
    progress: 0,
    comingSoon: true,
  },
  {
    id: 'network-security',
    quizId: 'network-security',
    title: 'Network Security Basics',
    description: 'Understand Wi-Fi risks and how to use networks safely.',
    difficulty: 'Medium',
    icon: <MessageCircleWarningIcon className="w-8 h-8 text-cybee-dark-blue" />,
    progress: 0,
    comingSoon: true,
  }
];

export const NOTIFICATIONS_DATA: Notification[] = [
    {
        id: '1',
        category: 'ACHIEVEMENT',
        title: '🔥 You earned 100 XP for completing the Phishing quiz!',
        timestamp: new Date().toISOString(),
        isRead: false,
    },
    {
        id: '2',
        category: 'ACHIEVEMENT',
        title: '🥇 You reached Level 2 — Cyber Defender Badge unlocked!',
        timestamp: new Date(Date.now() - 3600 * 1000 * 2).toISOString(), // 2 hours ago
        isRead: false,
    },
    {
        id: '3',
        category: 'LEARNING',
        title: 'Your quiz results for "Phishing Awareness" are ready!',
        timestamp: new Date(Date.now() - 3600 * 1000 * 5).toISOString(), // 5 hours ago
        isRead: true,
    },
    {
        id: '4',
        category: 'REMINDER',
        title: "Hey! You haven’t practiced today. Continue your learning journey!",
        timestamp: new Date(Date.now() - 3600 * 1000 * 24).toISOString(), // 1 day ago
        isRead: true,
    },
    {
        id: '5',
        category: 'ANNOUNCEMENT',
        title: 'New update: AI chatbot now available in the Explore section.',
        timestamp: new Date(Date.now() - 3600 * 1000 * 48).toISOString(), // 2 days ago
        isRead: true,
    },
     {
        id: '6',
        category: 'LEARNING',
        title: 'New module added: "Strong Password Fundamentals"!',
        timestamp: new Date(Date.now() - 3600 * 1000 * 72).toISOString(), // 3 days ago
        isRead: true,
    },
];


export const CURRENT_LESSONS_DATA = [
    {
        id: 'ai-lesson',
        title: 'AI Lesson',
        progress: 70,
        estimatedTime: '25 mins left'
    },
    {
        id: 'cyber-awareness',
        title: 'Cybersecurity Lesson',
        progress: 40,
        estimatedTime: '45 mins left'
    }
];

export const UPCOMING_TASKS_DATA: UpcomingTask[] = [
    {
        id: 'quiz1',
        type: 'Quiz',
        name: 'AI Quiz 1',
        dueDate: 'Tomorrow, 10:00 AM',
        status: 'Pending',
    },
    {
        id: 'assignment1',
        type: 'Assignment',
        name: 'Phishing Analysis',
        dueDate: 'Wednesday, 3:00 PM',
        status: 'Pending',
    },
    {
        id: 'quiz2',
        type: 'Quiz',
        name: 'Password Security Quiz',
        dueDate: 'Last Friday',
        status: 'Completed',
    }
];

export const WEEKLY_PROGRESS_DATA: WeeklyProgress[] = [
    { week: 'Week 1', xp: 150, maxXP: 500 },
    { week: 'Week 2', xp: 300, maxXP: 500 },
    { week: 'Week 3', xp: 220, maxXP: 500 },
    { week: 'This Week', xp: 400, maxXP: 500 },
];
