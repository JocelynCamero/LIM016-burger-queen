import React from 'react';
import '../Estilos/CabeceraUsuario.scss';

export default function CabeceraUsuario() {
  return (
    <div className="CabeceraUsuario">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreUsuario">
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
