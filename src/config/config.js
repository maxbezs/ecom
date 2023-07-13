// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXMQPlGkL8wHxyc1EgpNLvSBRQt9qeoaU",
  authDomain: "e-commerce-82915.firebaseapp.com",
  projectId: "e-commerce-82915",
  storageBucket: "e-commerce-82915.appspot.com",
  messagingSenderId: "405556393687",
  appId: "1:405556393687:web:983287b20543317fa32292",
  measurementId: "G-GPV5K8PGRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);