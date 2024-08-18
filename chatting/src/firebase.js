import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdQf6Vzl-KwT2LaqnP8Du87_dMKW6rM4",
  authDomain: "chatterup-be4db.firebaseapp.com",
  projectId: "chatterup-be4db",
  storageBucket: "chatterup-be4db.appspot.com",
  messagingSenderId: "631292075775",
  appId: "1:631292075775:web:bc50a38aae5ca3e0e076ca"
};

// Initialize Firebase


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
