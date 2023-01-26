// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4L_OoKlFGvV4UHl5rVHuI4D6Rp_hBQ3c",
  authDomain: "react-movies-e8c00.firebaseapp.com",
  projectId: "react-movies-e8c00",
  storageBucket: "react-movies-e8c00.appspot.com",
  messagingSenderId: "514999509635",
  appId: "1:514999509635:web:aabc685a1979ae0146b1b6",
  measurementId: "G-RXK8WT04FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

