import {
  db,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  orderBy,
} from './firebaseConfig';

// Funcion para obtener el usuario de la db
export const obtenerUsuario = (id) => getDoc(doc(db, 'usuarios', id)).then((docu) => docu.data());

// Funcion para obtener los producto por categoria y subcategoria de la db
export const obtenerProductos = async (categoria, subcategoria) => {
  const q = query(collection(db, 'productos'), where('categoria', '==', categoria), where('subcategoria', '==', subcategoria));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

// Funcion para obtener todas las ordenes de la db
export const obtenerOrdenes = async () => {
  const querySnapshot = await getDocs(collection(db, 'ordenes'));
  const arrOrdenes = [];
  querySnapshot.forEach((docu) => {
    arrOrdenes.push(docu.data());
  });
  console.log(arrOrdenes);
  return arrOrdenes;
};

// Funcion para obtener las ordenes filtradas
export const obtenerOrdenesFiltradas = async (estado) => {
  const q = query(
    collection(db, 'ordenes'),
    orderBy('timestamp', 'asc'),
    where('estado', '==', estado),
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

// Funcion para guardar las ordenes en la db
export const guardarData = async (orden) => {
  const docRefOrden = await addDoc(collection(db, 'ordenes'), {
    numeroOrden: orden.numeroOrden,
    nombreCliente: orden.nombreCli,
    numeroMesa: orden.numeroMesa,
    nombreMesero: orden.nombreMesero,
    timestamp: new Date(),
    total: orden.totalOrden,
    productosAgregados: orden.productosAgregados,
    estado: 'Por preparar',
  });
  console.log('Se guardo publicacion en la db con el id: ', docRefOrden.id);
  return docRefOrden;
};

export const actualizarEstadoPedido = async (id, estadoPedido) => updateDoc(doc(db, 'ordenes', id), {
  estado: estadoPedido,
});
