import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import FirebaseApp from "../firebase/firebase.config";

export const FIREBASE_AUTH = getAuth(FirebaseApp);

export const signInFirebase = (email, password) => {
  return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
};

export const signUpFirebase = (email, password) => {
  return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
};

export const signOutUser = () => {
  return signOut(FIREBASE_AUTH);
};
