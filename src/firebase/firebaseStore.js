import {
  db,
  doc,
  getDoc,
} from './firebaseConfig';

export const getUser = async (uid) => getDoc(doc(db, 'usuarios', uid));

export const getProducts = async (uid) => getDoc(doc(db, 'productos', uid));
