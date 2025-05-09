// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCiLEP7lGSui2tNEeIHJ4qk15xtrvIZYxs",
  authDomain: "taskify-88d0c.firebaseapp.com",
  projectId: "taskify-88d0c",
  storageBucket: "taskify-88d0c.firebasestorage.app",
  messagingSenderId: "1063207789453",
  appId: "1:1063207789453:web:e939ab9bd17abae78fd3c4",
  measurementId: "G-EPGXHWPEJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;
