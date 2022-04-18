// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZp2eNRkAzHW4uPd5uzf7nOtc9bW3J8i8",
  authDomain: "photography-c82cd.firebaseapp.com",
  projectId: "photography-c82cd",
  storageBucket: "photography-c82cd.appspot.com",
  messagingSenderId: "957994830785",
  appId: "1:957994830785:web:cc4166cf9c6fb2f3967d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth