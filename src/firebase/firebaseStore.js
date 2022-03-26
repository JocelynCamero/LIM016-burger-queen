import { addDoc } from 'firebase/firestore';
import {
  db,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from './firebaseConfig';

// Funcion para obtener el usuario de la db
export const obtenerUsuario = (id) => getDoc(doc(db, 'usuarios', id)).then((docu) => docu.data());

// Funcion para obtener los producto por categoria y subategoria de la db
export const obtenerProductos = async (categoria, subcategoria) => {
  const q = query(collection(db, 'productos'), where('categoria', '==', categoria), where('subcategoria', '==', subcategoria));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

// Funcion para obtener las ordenes de la db
export const obtenerOrdenes = async () => {
  const querySnapshot = await getDocs(collection(db, 'ordenes'));
  const arrOrdenes = [];
  querySnapshot.forEach((docu) => {
    arrOrdenes.push(docu.data());
  });
  console.log(arrOrdenes);
  return arrOrdenes;
};

// Funcion para guardar las ordenes en la db
export const guardarData = (orden) => addDoc(collection(db, 'ordenes'), { orden });
