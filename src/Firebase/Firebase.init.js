// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJ6QJhFkGYzOcJFfRTkgtthovSi31HEM",
  authDomain: "computer-manufacture.firebaseapp.com",
  projectId: "computer-manufacture",
  storageBucket: "computer-manufacture.appspot.com",
  messagingSenderId: "847905180333",
  appId: "1:847905180333:web:0e719c04c15c2daee01424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;