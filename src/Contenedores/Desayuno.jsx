import React, { useState, useEffect } from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import { obtenerProductos } from '../Firebase/firebaseStore';
import '../Estilos/Desayuno.scss';

export default function Desayuno() {
  const [curretMenu, SetCurrentMenu] = useState('Cafe');
  // Funcion obtener productos de Firestore
  const bdProductos = async () => {
    const querySnapshot = await obtenerProductos('Desayuno', curretMenu);
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
    <div className="Desayuno">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Desayuno" SetCurrentMenu={SetCurrentMenu} />
        <div className="contenedorProductos">
          { arregloProductos.map((item) => <Producto key={item.id} className="contenedorProducto" urlProducto={item.url} nombreProducto={item.nombre} precioProducto={item.precio} />) }
        </div>
      </div>
      <Orden />
    </div>
  );
}
