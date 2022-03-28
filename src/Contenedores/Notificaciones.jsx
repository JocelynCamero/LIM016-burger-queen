import React, { useState, useEffect } from 'react';
import { obtenerOrdenesFiltradas } from '../Firebase/firebaseStore';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import OrdenPendiente from '../Componentes/OrdenPendiente';
import '../Estilos/Notificaciones.scss';

export default function Notificaciones() {
  // Estado de la subcategoria
  const [subcategoria, setSubcategoria] = useState('Por entregar');

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
    <div className="Notificaciones">
      <CabeceraUsuario />
      <BarraSecundaria cat="Notificaciones" setSubcategoria={setSubcategoria} />
      <div className="contenedorOrdenes">
        {arregloOrdenes.map((orden) => <OrdenPendiente key={orden.numeroOrden} orden={orden} subcategoria={subcategoria} />)}
      </div>

    </div>
  );
}
