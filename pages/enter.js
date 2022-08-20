import { initializeApp } from "../lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../lib/context";

const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function EnterPage(props) {
  const [user, username] = useContext(UserContext);
  return (
    <main>
      {user ? (
        !username ? (
          <UserNameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} />
      Sign In With Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UserNameForm() {}
