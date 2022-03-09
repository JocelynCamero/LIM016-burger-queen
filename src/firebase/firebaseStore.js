import {
  db,
  doc,
  getDoc,
  Timestamp,
} from './firebaseConfig';

export const getUser = async (uid) => getDoc(doc(db, 'usuarios', uid));

export const getProducts = async (uid) => getDoc(doc(db, 'productos', uid));

export const getDate = () => {
  const fecha = Timestamp.fromDate(new Date()).toDate().toDateString();
  return fecha;
};
