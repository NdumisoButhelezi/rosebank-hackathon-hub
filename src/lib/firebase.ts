import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgZaC36QpXSZ64TPbO3MIilyf7xYMLM3Q",
  authDomain: "isicathamiya-ac3ab.firebaseapp.com",
  projectId: "isicathamiya-ac3ab",
  storageBucket: "isicathamiya-ac3ab.firebasestorage.app",
  messagingSenderId: "410180006008",
  appId: "1:410180006008:web:505161f0e98d8f5dfcbd8d",
  measurementId: "G-5VVF59L7B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);