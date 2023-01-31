// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG2JXxoADrgfQTuZdHKGfeZJn4uSP9dFs",
  authDomain: "shrap-75daa.firebaseapp.com",
  projectId: "shrap-75daa",
  storageBucket: "shrap-75daa.appspot.com",
  messagingSenderId: "828440793543",
  appId: "1:828440793543:web:bcb1dff2c4170952d1c9e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
