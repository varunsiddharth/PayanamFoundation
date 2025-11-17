// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_fgdPhKIS7ciKn-IS9Bbn968ruFr-mhk",
  authDomain: "ngo-website-56fb6.firebaseapp.com",
  projectId: "ngo-website-56fb6",
  storageBucket: "ngo-website-56fb6.firebasestorage.app",
  messagingSenderId: "122102723108",
  appId: "1:122102723108:web:aa46b46c58c2208a4c9eb1",
  measurementId: "G-396NLEX3X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);