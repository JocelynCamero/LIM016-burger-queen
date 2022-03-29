import React, { useState, useEffect } from 'react';
import { obtenerOrdenesFiltradas } from '../firebase/firebaseStore';
import BarraPrincipal from '../componentes/BarraPrincipal';
import CabeceraUsuario from '../componentes/CabeceraUsuario';
import BarraSecundaria from '../componentes/BarraSecundaria';
import PedidoPendiente from '../componentes/PedidoPendiente';
import '../estilos/Notificaciones.scss';

export default function Pedidos() {
  const [subcategoria, setSubcategoria] = useState('Por preparar');
  const [actualizandoEstado, setActualizandoEstado] = useState(true);

  // Funcion obtener productos de Firestore
  const bdOrdenes = async () => {
    const querySnapshot = await obtenerOrdenesFiltradas(subcategoria);
    const arrOrdenes = [];
    querySnapshot.forEach((docu) => {
      arrOrdenes.push({ ...docu.data(), id: docu.id });
    });
    return arrOrdenes;
  };

  // Estado del arreglo de productos
  const [arregloOrdenes, setArregloOrdenes] = useState([]);
  // Efecto para que se actualice los productos cuando cambie la subcategoria
  useEffect(() => bdOrdenes().then((arr) => {
    console.log(arr);
    setActualizandoEstado(false);
    setArregloOrdenes(arr);
  }), [subcategoria, actualizandoEstado]);
  return (
    <div className="Pedidos">
      <BarraPrincipal vista="Pedidos" />
      <CabeceraUsuario />
      <BarraSecundaria cat="Pedidos" setSubcategoria={setSubcategoria} />
      <div className="contenedorPedidos">
        {arregloOrdenes.map((orden) => <PedidoPendiente key={orden.numeroOrden} orden={orden} setActualizandoEstado={setActualizandoEstado} subcategoria={subcategoria} />)}
      </div>
    </div>
  );
}
