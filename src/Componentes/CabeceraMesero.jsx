import React from 'react';
import '../Estilos/CabeceraMesero.scss';

export default function CabeceraMesero() {
  return (
    <div className="CabeceraMesero">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreMesero">
          Pepito
        </h1>
        <h3 className="fecha">
          23/12/22
        </h3>
      </div>
      {/* <input className="BarraBusqueda" placeholder="Buscar alimento o bebida" /> */}
    </div>
  );
}
