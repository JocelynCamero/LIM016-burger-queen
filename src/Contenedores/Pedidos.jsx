import React, { useState, useEffect } from 'react';
import { obtenerOrdenesFiltradas } from '../firebase/firebaseStore';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import PedidoPendiente from '../Componentes/PedidoPendiente';
import '../estilos/Notificaciones.scss';

export default function Pedidos() {
  const [subcategoria, setSubcategoria] = useState('Recibidos');

  // Funcion obtener productos de Firestore
  const bdOrdenes = async () => {
    const querySnapshot = await obtenerOrdenesFiltradas(subcategoria);
    const arrOrdenes = [];
    querySnapshot.forEach((docu) => {
      arrOrdenes.push(docu.data());
    });
    return arrOrdenes;
  };

  // Estado del arreglo de productos
  const [arregloOrdenes, setArregloOrdenes] = useState([]);

  // Efecto para que se actualice los productos cuando cambie la subcategoria
  useEffect(() => bdOrdenes().then((arr) => {
    console.log(arr);
    setArregloOrdenes(arr);
  }), [subcategoria]);
  return (
    <div className="Pedidos">
      <CabeceraUsuario />
      <BarraSecundaria cat="Pedidos" setSubcategoria={setSubcategoria} />
      <div className="contenedorPedidos" />
      {arregloOrdenes.map((orden) => <PedidoPendiente key={orden.numeroOrden} orden={orden} subcategoria={subcategoria} />)}
    </div>
  );
}
