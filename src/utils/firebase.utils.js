import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8V4jSiGSWiAjrSbwd-DeQVYAzP1a0nDg",
  authDomain: "shay-tree-db-bb835.firebaseapp.com",
  projectId: "shay-tree-db-bb835",
  storageBucket: "shay-tree-db-bb835.appspot.com",
  messagingSenderId: "330685844343",
  appId: "1:330685844343:web:e5829c11d98bf43983af72",
};

const app = initializeApp(firebaseConfig);
console.log(app);

//google sign in pop up
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//user data/ storing user data
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message, "error creating the user");
    }
  }
  return userDocRef;
};
