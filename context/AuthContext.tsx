import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '../types';

import { auth, db } from '../firebase';

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Keep user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // =========================
  // 🔵 GOOGLE LOGIN
  // =========================
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    const firebaseUser = result.user;

    // ✅ Save user in Firestore
    await setDoc(
      doc(db, 'users', firebaseUser.uid),
      {
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
        createdAt: new Date()
      },
      { merge: true }
    );
  };

  // =========================
  // 🔵 EMAIL LOGIN
  // =========================
  const signInWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  // =========================
  // 🔵 EMAIL SIGNUP
  // =========================
  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });

      // ✅ Save user in Firestore
      await setDoc(
        doc(db, 'users', auth.currentUser.uid),
        {
          name,
          email,
          photoURL: '',
          createdAt: new Date()
        },
        { merge: true }
      );
    }

    return cred;
  };

  // =========================
  // 🔵 LOGOUT
  // =========================
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile: user
          ? {
              uid: user.uid,
              displayName: user.displayName ?? 'Student',
              email: user.email ?? '',
              photoURL: user.photoURL ?? '',
              onboardingComplete: true,
              budgetLimit: 1000
            }
          : null,
        loading,
        loginWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
