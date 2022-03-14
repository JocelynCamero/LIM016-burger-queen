import React, { useState } from 'react';
import { auth, onAuthStateChanged } from '../Firebase/firebaseConfig';
import BarraNav from '../Components/BarraNav';
import CabeceraMesero from '../Components/CabeceraMesero';
import SegBarraNav from '../Components/SegBarraNav';
import VistaProductos from '../Components/VistaProductos';
import { getUser, getDate } from '../Firebase/firebaseStore';

export default function ViewMesero() {
  const [currentCate, SetCurrentCate] = useState('Desayuno');
  let uid;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      // console.log(uid);
    }
  });
  // console.log(uid);
  const obtenerNombre = () => {
    let nombr;
    getUser(uid).then((docu) => {
      nombr = docu.data().nombre;
    });
    return nombr;
  };

  return (
    <div>
      <BarraNav SetCurrentCate={SetCurrentCate} />
      <CabeceraMesero nombreMesero="Mario" fecha={getDate()} />
      <SegBarraNav cat="Almuerzo" />
      <VistaProductos />
    </div>
  );
}
