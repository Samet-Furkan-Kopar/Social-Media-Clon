/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle, clearState } from "./utils/authStore";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBGOMtFbmX2Sux99JnsqviYrsQpTV5ADM8",
//     authDomain: "instagram-project-2d47a.firebaseapp.com",
//     projectId: "instagram-project-2d47a",
//     storageBucket: "instagram-project-2d47a.appspot.com",
//     messagingSenderId: "445308517639",
//     appId: "1:445308517639:web:432b7a58b9a6bb32c6d9a2",
// };
const firebaseConfig = {
    
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid));
        let data = {
            uid: user.uid,
            full_name: user.displayName,
            email: user.email,
            username: dbUser.data().username,
            emailVerified: user.emailVerified,
            ...dbUser.data(),
        };

        userHandle(data);
    } else {
        userHandle(null);
    }
    // userHandle(user ? user : null);
}); //auth durumunu anlık sorguluyor

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error) {
        toast.error(error.code);
    }
};

// eslint-disable-next-line no-unused-vars
export const register = async ({ email, password, full_name, username }) => {
    try {
        const user = await getDoc(doc(db, "usernames", username));
        if (user.exists()) {
            toast.error("Username already taken");
        } else {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response?.user) {
                await setDoc(doc(db, "usernames", username), {
                    user_id: response?.user.uid,
                });

                await setDoc(doc(db, "users", response.user.uid), {
                    full_name,
                    username,
                    followers: [],
                    following: [],
                    notifications: [],
                    website: "",
                    bio: "",
                    phoneNumber: "",
                    gender: "",
                    post: 0,
                });
            }
            return response;
        }
    } catch (error) {
        toast.error(error.code);
        throw new Error(error);
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

export const getUserInfo = async (name) => {
    console.log(name, "name");
    const username = await getDoc(doc(db, "usernames", name));
    console.log(username, "username");
    if(username.exists()){
        return (await getDoc(doc(db, "users", username.data().user_id))).data();
    }
    else {
        toast.error("Kullanıcı bulunamadı");
        throw new Error("Kullanıcı bulunamadı");
    }
}
