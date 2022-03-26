import React, { useContext, useEffect } from 'react';
import AppContext from '../Context/AppContext';
import { obtenerOrdenes } from '../Firebase/firebaseStore';
import '../Estilos/CabeceraOrden.scss';

export default function CabeceraOrden() {
  const { orden, numeroOrden } = useContext(AppContext);

  const numeracionOrden = async () => {
    const arrOrdenes = await obtenerOrdenes();
    // console.log(arrOrdenes);
    const numeroOrd = arrOrdenes.length + 1;
    const numOrden = `001-00000${numeroOrd}`;
    console.log(numOrden);
    return numOrden;
  };

  useEffect(() => numeracionOrden().then((numOrden) => numeroOrden(numOrden)), []);

  return (
    <div className="CabeceraOrden">
      <div className="detalleOrdenFecha">
        <h1 className="numeroOrden">
          N° orden
        </h1>
        <h1 className="fecha">
          {orden.numeroOrden}
        </h1>
      </div>
      <div className="contenedorNombreMesero">
        <h4 className="nombreMesero">
          {orden.nombreMesero}
        </h4>
      </div>
    </div>
  );
}
