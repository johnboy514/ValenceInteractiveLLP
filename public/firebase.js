import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCLrUDNeMbBhWE8mIKU3kpxwXmOiOU6EGo",
    authDomain: "valence-interactive.firebaseapp.com",
    projectId: "valence-interactive",
    storageBucket: "valence-interactive.firebasestorage.app",
    messagingSenderId: "519722550901",
    appId: "1:519722550901:web:e060582e06dee6b15a9a3c",
    measurementId: "G-YCYHK62341"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);