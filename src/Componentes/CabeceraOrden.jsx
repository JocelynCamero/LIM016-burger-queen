import React from 'react';
import '../Estilos/CabeceraOrden.scss';

export default function CabeceraOrden() {
  return (
    <div className="CabeceraOrden">
      <div className="detalleOrdenFecha">
        <h1 className="numeroOrden">
          Nª orden
        </h1>
        <h4 className="fecha">
          Fecha
        </h4>
      </div>
      <div className="contenedorNombreMesero">
        <h4 className="nombreMesero">
          Pepito
        </h4>
      </div>
    </div>
  );
}
