import React, { useState, useEffect } from 'react';
import BarraSecundaria from '../componentes/BarraSecundaria';
import Producto from '../componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../componentes/CabeceraUsuario';
import { obtenerProductos } from '../firebase/firebaseStore';
import '../estilos/Desayuno.scss';

export default function Almuerzo() {
  // Estado de la subcategoria
  const [subcategoria, setSubcategoria] = useState('Hamburguesa');

  // Funcion obtener productos de Firestore
  const bdProductos = async () => {
    const querySnapshot = await obtenerProductos('Almuerzo', subcategoria);
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
    //  console.log(arr);
    setArregloProductos(arr);
  }), [subcategoria]);

  return (
    <div className="Almuerzo">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Almuerzo" setSubcategoria={setSubcategoria} />
        <div className="contenedorProductos">
          { arregloProductos.map((item) => <Producto key={item.id} className="contenedorProducto" producto={item} />) }
        </div>
      </div>
      <Orden />
    </div>
  );
}
