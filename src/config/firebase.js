// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdlWQwUCBybKCcTJSQsvWK2tt7NfctRWQ",
  authDomain: "portfolio-lab-2024.firebaseapp.com",
  projectId: "portfolio-lab-2024",
  storageBucket: "portfolio-lab-2024.appspot.com",
  messagingSenderId: "940012228294",
  appId: "1:940012228294:web:9d409bdd2a6d89f6bed1c7",
  measurementId: "G-YL29LGBZ5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);
