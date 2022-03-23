import React, { useState, useEffect } from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import { obtenerProductos } from '../Firebase/firebaseStore';
import '../Estilos/Desayuno.scss';

export default function Almuerzo() {
  const [curretMenu, SetCurrentMenu] = useState('Hamburguesa');
  // Funcion obtener productos de Firestore
  const bdProductos = async () => {
    const querySnapshot = await obtenerProductos('Almuerzo', curretMenu);
    const arrProductos = [];
    querySnapshot.forEach((docu) => {
      arrProductos.push(docu.data());
    });
    return arrProductos;
  };

  const [arregloProductos, setArregloProductos] = useState([]);
  useEffect(() => bdProductos().then((arr) => {
    console.log(arr);
    setArregloProductos(arr);
  }), [curretMenu]);

  return (
    <div className="Almuerzo">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Almuerzo" SetCurrentMenu={SetCurrentMenu} />
        <div className="contenedorProductos">
          { arregloProductos.map((item) => <Producto key={item.id} className="contenedorProducto" producto={item} />) }
        </div>
      </div>
      <Orden />
    </div>
  );
}
