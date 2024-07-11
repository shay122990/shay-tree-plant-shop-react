import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
