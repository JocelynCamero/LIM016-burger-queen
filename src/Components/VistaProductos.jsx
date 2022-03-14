import React, { useState, useEffect } from 'react';
import Productos from './Productos';
import { getProducts } from '../Firebase/firebaseStore';

export default function VistaProductos() {
  const [prod, setProd] = useState([]);
  const [desayuno, setDesayuno] = useState('');
  const obtenerProductosDesayuno = async (desayuno) => {
    const arrProd = [];
    await getProducts(desayuno, 'Cafe').then((querySnapshot) => {
      querySnapshot.forEach((docu) => {
        arrProd.push(docu.data());
      });
      console.log(arrProd);
    });
    setProd(arrProd);
  };

  useEffect(() => {
    obtenerProductosDesayuno(desayuno);
  }, []);

  // console.log(prod);
  return (
    <div className="VistaProductos">
      <h1>Selecciona alimentos</h1>
      {prod.map((pro) => <Productos key={pro.id} nombProd={pro.nombre} preProd={pro.precio} />)}
    </div>
  );
}
