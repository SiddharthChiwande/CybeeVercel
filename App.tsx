import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AppProvider } from './context/AppContext.tsx';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';

import Header from './components/Header.tsx';
import BottomNav from './components/BottomNav.tsx';
import CybeeMentor from './components/CybeeMentor.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

import HomeScreen from './screens/HomeScreen.tsx';
import LessonsScreen from './screens/LessonsScreen.tsx';
import ReportScreen from './screens/ReportScreen.tsx';
import ProgressScreen from './screens/ProgressScreen.tsx';
import SplashScreen from './screens/SplashScreen.tsx';
import AuthScreen from './screens/AuthScreen.tsx';
import SignUpScreen from './screens/SignUpScreen.tsx';
import SignInScreen from './screens/SignInScreen.tsx';
import EmailSignUpScreen from './screens/EmailSignUpScreen.tsx';
import EmailSignInScreen from './screens/EmailSignInScreen.tsx';
import ExploreScreen from './screens/ExploreScreen.tsx';
import GamesScreen from './screens/GamesScreen.tsx';
import SettingsScreen from './screens/SettingsScreen.tsx';
import NotificationsScreen from './screens/NotificationsScreen.tsx';
import AdminResetScreen from './screens/AdminResetScreen.tsx';
import { app } from "./firebase";


console.log("Firebase connected:", app);



// Layout for the main app after authentication
const MainLayout: React.FC = () => (
  <div className="bg-cybee-gray min-h-screen font-sans flex flex-col">
    <Header />
    <main className="flex-grow pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
    <BottomNav />
  </div>
);

// A component to protect routes that require authentication
const ProtectedRoutes: React.FC = () => {
  const { user, loading } = useAuth();
  
  if (loading) return null; // Or a loading spinner

  return user ? <MainLayout /> : <Navigate to="/auth" />;
};

// A component to handle initial redirection based on auth state
const AuthRedirect: React.FC = () => {
  const { user, loading } = useAuth();
  const splashSeen = sessionStorage.getItem('splashSeen');

  if (loading) return null;

  if (!splashSeen) {
    return <Navigate to="/welcome" />;
  }

  return <Navigate to={user ? '/' : '/auth'} />;
};

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/welcome" element={<SplashScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signup/email" element={<EmailSignUpScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signin/email" element={<EmailSignInScreen />} />
        
        {/* Maintenance / Admin */}
        <Route path="/admin-reset" element={<AdminResetScreen />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lessons" element={<LessonsScreen />} />
          <Route path="/games" element={<GamesScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/notifications" element={<NotificationsScreen />} />
        </Route>
        
        {/* Handle root path and any other paths */}
        <Route path="*" element={<AuthRedirect />} />
      </Routes>
    </>
  );
}



function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppProvider>
          <HashRouter>
            <AppContent />
          </HashRouter>
        </AppProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;