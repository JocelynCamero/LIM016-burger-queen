import {
  auth,
  signInWithEmailAndPassword,
  signOut,
} from './firebaseConfig';

export const iniciarSesion = (correo, clave) => signInWithEmailAndPassword(auth, correo, clave);

export const cerrarSesion = () => signOut(auth);
