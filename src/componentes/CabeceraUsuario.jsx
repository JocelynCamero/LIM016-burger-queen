import React, { useContext } from 'react';
import AppContext from '../contextos/AppContext';
import Hora from './Hora';
import '../estilos/CabeceraUsuario.scss';

export default function CabeceraUsuario() {
  const { orden } = useContext(AppContext);
  return (
    <div className="CabeceraUsuario">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreUsuario">
          {orden.nombreMesero}
        </h1>
        <Hora />
      </div>
      {/* <input className="BarraBusqueda" placeholder="Buscar alimento o bebida" /> */}
    </div>
  );
}
