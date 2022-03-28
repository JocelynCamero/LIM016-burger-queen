import React, { useState, useEffect } from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import { obtenerProductos } from '../firebase/firebaseStore';
import '../estilos/Desayuno.scss';

export default function Desayuno() {
  // Estado de la subcategoria
  const [subcategoria, setSubcategoria] = useState('Cafe');

  // Funcion obtener productos de Firestore
  const bdProductos = async () => {
    const querySnapshot = await obtenerProductos('Desayuno', subcategoria);
    const arrProductos = [];
    querySnapshot.forEach((docu) => {
      arrProductos.push(docu.data());
    });
    return arrProductos;
  };

  // Estado del arreglo de productos
  const [arregloProductos, setArregloProductos] = useState([]);

  // Efecto para que se actualice los productos cuando cambie la subcategoria
  useEffect(() => bdProductos().then((arr) => {
    console.log(arr);
    setArregloProductos(arr);
  }), [subcategoria]);
  return (
    <div className="Desayuno">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Desayuno" setSubcategoria={setSubcategoria} />
        <div className="contenedorProductos">
          { arregloProductos.map((item) => <Producto key={item.id} className="contenedorProducto" producto={item} />) }
        </div>
      </div>
      <Orden />
    </div>
  );
}
