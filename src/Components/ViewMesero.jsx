import React from 'react';
import { auth, onAuthStateChanged } from '../Firebase/firebaseConfig';
import BarraNav from './BarraNav';
import CabeceraMesero from './CabeceraMesero';
import SegBarraNav from './SegBarraNav';
import VistaProductos from './VistaProductos';
import { getUser, getDate } from '../Firebase/firebaseStore';

export default function ViewMesero() {
  let uid;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      console.log(uid);
    }
  });
  console.log(uid);
  const obtenerNombre = () => {
    let nombr;
    getUser(uid).then((docu) => {
      nombr = docu.data().nombre;
    });
    return nombr;
  };
  return (
    <div>
      <BarraNav />
      <CabeceraMesero nombreMesero={obtenerNombre()} fecha={getDate()} />
      <SegBarraNav />
      <VistaProductos />
    </div>
  );
}
