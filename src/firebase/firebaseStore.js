import {
  db,
  doc,
  getDoc,
  Timestamp,
  collection,
  query,
  where,
  getDocs,
} from './firebaseConfig';

export const obtenerUsuario = async (uid) => getDoc(doc(db, 'usuarios', uid));

export const obtenerProductos = async (categoria, subcategoria) => {
  const q = query(collection(db, 'productos'), where('categoria', '==', categoria), where('subcategoria', '==', subcategoria));
  const querySnapshot = await getDocs(q);
  /* querySnapshot.forEach((docu) => {
    console.log(docu.data().nombre, ' => ', docu.data());
  }); */
  return querySnapshot;
};
// collection(db, 'productos');

export const obtenerFecha = () => {
  const fecha = Timestamp.fromDate(new Date()).toDate().toDateString();
  return fecha;
};
