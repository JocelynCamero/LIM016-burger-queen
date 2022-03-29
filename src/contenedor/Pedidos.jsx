import React, { useState, useEffect } from 'react';
import { obtenerOrdenesFiltradas } from '../firebase/firebaseStore';
import BarraPrincipal from '../componente/BarraPrincipal';
import CabeceraUsuario from '../componente/CabeceraUsuario';
import BarraSecundaria from '../componente/BarraSecundaria';
import PedidoPendiente from '../componente/PedidoPendiente';
import '../estilo/Notificaciones.scss';

export default function Pedidos() {
  const [subcategoria, setSubcategoria] = useState('Por preparar');

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
      <BarraPrincipal vista="Pedidos" />
      <CabeceraUsuario />
      <BarraSecundaria cat="Pedidos" setSubcategoria={setSubcategoria} />
      <div className="contenedorPedidos">
        {arregloOrdenes.map((orden) => <PedidoPendiente key={orden.numeroOrden} orden={orden} subcategoria={subcategoria} />)}
      </div>
    </div>
  );
}
