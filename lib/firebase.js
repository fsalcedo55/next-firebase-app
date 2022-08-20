// import firebase from "firebase/app";
// import "firebase/compat/auth";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzRHwbdcIB7mjqpgX3LAjfd7paB_vgZ44",
  authDomain: "nextfire-app-a378e.firebaseapp.com",
  projectId: "nextfire-app-a378e",
  storageBucket: "nextfire-app-a378e.appspot.com",
  messagingSenderId: "274958671481",
  appId: "1:274958671481:web:6f74aa9efc009a1b3a3ea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
