import React from 'react';
import '../Estilos/CabeceraUsuario.scss';

export default function CabeceraUsuario() {
  const date = new Date();
  return (
    <div className="CabeceraUsuario">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreUsuario">
          Pepito
        </h1>
        <h3 className="fecha">{date.toLocaleDateString()}</h3>
        <h3 className="hora">{date.toLocaleTimeString()}</h3>
      </div>
      {/* <input className="BarraBusqueda" placeholder="Buscar alimento o bebida" /> */}
    </div>
  );
}
