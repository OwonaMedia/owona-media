// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAheQrucfi3VnuisIIepjm168uzWaKP-8I",
  authDomain: "owona-media.firebaseapp.com",
  projectId: "owona-media",
  storageBucket: "owona-media.firebasestorage.app",
  messagingSenderId: "743690114456",
  appId: "1:743690114456:web:848aadd27bb7826e3f47ed",
  measurementId: "G-QWEB6QWK5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 