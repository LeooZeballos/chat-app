// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfjlaJecNIcPdOmn8fGxlsu1T1DkBl4FM",
  authDomain: "chat-app-2a059.firebaseapp.com",
  projectId: "chat-app-2a059",
  storageBucket: "chat-app-2a059.appspot.com",
  messagingSenderId: "103336277445",
  appId: "1:103336277445:web:131728e7ad309e47f547ac",
  measurementId: "G-08GZQLR087",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
