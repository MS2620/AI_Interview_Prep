import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQydBZedEqmHKeEdj-D_mlbQ6xvJrtCJM",
    authDomain: "interview-prep-94eeb.firebaseapp.com",
    projectId: "interview-prep-94eeb",
    storageBucket: "interview-prep-94eeb.firebasestorage.app",
    messagingSenderId: "784834619345",
    appId: "1:784834619345:web:cc3a0fda02702d65c422f0",
    measurementId: "G-4MZF057205"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)