// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0J1CowdWnlcoLgY5dJIu2GjI0FEKX-Pk",
  authDomain: "auth-practice-c09b9.firebaseapp.com",
  projectId: "auth-practice-c09b9",
  storageBucket: "auth-practice-c09b9.appspot.com",
  messagingSenderId: "256459809938",
  appId: "1:256459809938:web:07136c1aaf32e4b540724b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;