// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import getAuth to use it for authentication
// import { getAnalytics } from "firebase/analytics";  // Import getAnalytics if you plan to use it

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVcgPMX7t9P7oAlM_FK6C9ru6B-hlzdiw",
  authDomain: "fitnesswebsite-731b5.firebaseapp.com",
  projectId: "fitnesswebsite-731b5",
  storageBucket: "fitnesswebsite-731b5.appspot.com",
  messagingSenderId: "689407468611",
  appId: "1:689407468611:web:12590300636e25e8d3e0f6",
  measurementId: "G-65FTGHRZ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // Ensure 'app' is defined before using it to initialize anything else

// Optional: Initialize Firebase Analytics
// const analytics = getAnalytics(app);  // Only initialize if you actually plan to use Firebase Analytics

// Export authentication related functionality
export const auth = getAuth(app);  // Now 'getAuth' is correctly imported and used
