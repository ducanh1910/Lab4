import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAIUb0kcVjFNgmsRhvcIbOdkC1FfUoK-x0",
    authDomain: "project1-a0c55.firebaseapp.com",
    projectId: "project1-a0c55",
    storageBucket: "project1-a0c55.appspot.com",
    messagingSenderId: "88114902904",
    appId: "1:88114902904:web:abd9ac532fe7138cfffa8d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
