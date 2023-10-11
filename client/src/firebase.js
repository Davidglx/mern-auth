// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6c2f3.firebaseapp.com",
  projectId: "mern-auth-6c2f3",
  storageBucket: "mern-auth-6c2f3.appspot.com",
  messagingSenderId: "550994758181",
  appId: "1:550994758181:web:d0fb0286bda21a8c2acdcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);