// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnG1dDyeoDwQ8PXN-ocgzt3oUGzCrWr9w",
    authDomain: "daraz-auth-fd738.firebaseapp.com",
    projectId: "daraz-auth-fd738",
    storageBucket: "daraz-auth-fd738.firebasestorage.app",
    messagingSenderId: "664317950940",
    appId: "1:664317950940:web:e178ead8a86199ee41ed19",
    measurementId: "G-JJG5XH5XMD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
