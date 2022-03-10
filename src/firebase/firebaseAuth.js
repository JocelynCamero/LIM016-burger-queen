import {
  auth,
  signInWithEmailAndPassword,
  signOut,
} from './firebaseConfig';

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signOutAccount = () => signOut(auth);
