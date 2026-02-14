// firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA3J4g37q0zDSatS-SUYsnNkwtDzqlCGu8",
  authDomain: "cybee-2e530.firebaseapp.com",
  projectId: "cybee-2e530",
  storageBucket: "cybee-2e530.firebasestorage.app",
  messagingSenderId: "479711134628",
  appId: "1:479711134628:web:f7f321ff572ce0f144b731"
};

// Initialize
export const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Database
export const db = getFirestore(app);

console.log("🔥 Firebase Ready");
