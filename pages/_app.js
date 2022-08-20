import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";

function MyApp({ Component, pageProps }) {
  const auth = getAuth();
  const collectionRef = collection(firestore, "users");
  const documentRef = doc(firestore, "users");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const ref = firestore.collection("users").doc(user.uid);
        }
      },
      []
    );
  });

  return (
    <UserContext.Provider value={{ user: {}, username: "fernando" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
