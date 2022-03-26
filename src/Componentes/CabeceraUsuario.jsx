import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../Estilos/CabeceraUsuario.scss';

export default function CabeceraUsuario() {
  const { orden } = useContext(AppContext);
  const date = new Date();
  return (
    <div className="CabeceraUsuario">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreUsuario">
          {orden.nombreMesero}
        </h1>
        <h3 className="fecha">{date.toLocaleDateString()}</h3>
        <h3 className="hora">{date.toLocaleTimeString()}</h3>
      </div>
      {/* <input className="BarraBusqueda" placeholder="Buscar alimento o bebida" /> */}
    </div>
  );
}
