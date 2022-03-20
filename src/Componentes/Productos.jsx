/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../Firebase/firebaseStore';

export default function Productos(props) {
  const { categoria } = props;
  const { subcategoriaUrl } = useParams();
  const [subcategoria, setSubcategoria] = useState('Cafe');
  // useEffect(() => setSubcategoria(subcategoriaUrl), [subcategoriaUrl]);

  // Funcion obtener productos de Firestore
  const bdProductos = async () => {
    const querySnapshot = await obtenerProductos(categoria, subcategoria);
    const arrProductos = [];
    querySnapshot.forEach((docu) => {
      arrProductos.push(docu.data());
    });
    return arrProductos;
  };

  const [arregloProductos, setArregloProductos] = useState([]);
  useEffect(() => bdProductos().then((arr) => {
    setArregloProductos(arr);
  }));
  return (
    <div className="Productos">
      <h1>Productos</h1>
      <h2>{subcategoriaUrl}</h2>
      { arregloProductos.map((item) => <div key={item.id} className="contenedorProducto">{item.nombre}</div>) }
    </div>
  );
}
