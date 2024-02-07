/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle,clearState } from "./utils/authStore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGOMtFbmX2Sux99JnsqviYrsQpTV5ADM8",
    authDomain: "instagram-project-2d47a.firebaseapp.com",
    projectId: "instagram-project-2d47a",
    storageBucket: "instagram-project-2d47a.appspot.com",
    messagingSenderId: "445308517639",
    appId: "1:445308517639:web:432b7a58b9a6bb32c6d9a2",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    userHandle(user || false);
}); //auth durumunu anlık sorguluyor

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user);
    } catch (error) {
        toast.error(error.code); 
    }
};
export const logout = async () => {
    try {
        console.log("logout");
        await signOut(auth);
        clearState();
    } catch (error) {
        toast.error(error.code);
    }
};
