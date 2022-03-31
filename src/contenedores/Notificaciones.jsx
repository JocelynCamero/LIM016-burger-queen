import React, { useState, useEffect } from 'react';
import { obtenerOrdenesFiltradas } from '../firebase/firebaseStore';
import CabeceraUsuario from '../componentes/CabeceraUsuario';
import BarraSecundaria from '../componentes/BarraSecundaria';
import OrdenPendiente from '../componentes/OrdenPendiente';
import '../estilos/Notificaciones.scss';

export default function Notificaciones() {
  // Estado de la subcategoria
  const [subcategoria, setSubcategoria] = useState('Por entregar');
  const [actualizandoEstado, setActualizandoEstado] = useState(true);

  // Funcion obtener productos de Firestore
  const bdOrdenes = async () => {
    const querySnapshot = await obtenerOrdenesFiltradas('estadoM', subcategoria);
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
    // console.log(arr);
    setActualizandoEstado(false);
    setArregloOrdenes(arr);
    // console.log(arregloOrdenes);
  }), [subcategoria, actualizandoEstado]);

  return (
    <div className="Notificaciones">
      <CabeceraUsuario />
      <BarraSecundaria cat="Notificaciones" setSubcategoria={setSubcategoria} />
      <div className="contenedorOrdenes">
        {arregloOrdenes.map((orden) => <OrdenPendiente key={orden.numeroOrden} orden={orden} subcategoria={subcategoria} setActualizandoEstado={setActualizandoEstado} />)}
      </div>

    </div>
  );
}
