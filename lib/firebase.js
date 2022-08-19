import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzRHwbdcIB7mjqpgX3LAjfd7paB_vgZ44",
  authDomain: "nextfire-app-a378e.firebaseapp.com",
  projectId: "nextfire-app-a378e",
  storageBucket: "nextfire-app-a378e.appspot.com",
  messagingSenderId: "274958671481",
  appId: "1:274958671481:web:6f74aa9efc009a1b3a3ea8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
