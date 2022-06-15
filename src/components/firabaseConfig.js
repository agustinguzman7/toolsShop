// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuozIH-_sCXhC7eYlZ0xmYswTHisuYUwY",
  authDomain: "toolsshop-29b43.firebaseapp.com",
  projectId: "toolsshop-29b43",
  storageBucket: "toolsshop-29b43.appspot.com",
  messagingSenderId: "651651477041",
  appId: "1:651651477041:web:fce0b90fd8e2498d68ef10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;