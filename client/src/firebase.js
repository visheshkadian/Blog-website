// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-818ed.firebaseapp.com",
  projectId: "blog-website-818ed",
  storageBucket: "blog-website-818ed.appspot.com",
  messagingSenderId: "136385634543",
  appId: "1:136385634543:web:507f407b0afd85b7613b1a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
