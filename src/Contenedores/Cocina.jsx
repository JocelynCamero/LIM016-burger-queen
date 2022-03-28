import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import '../Estilos/VistaMesero.scss';
// import OrdenPendiente from '../Componentes/OrdenPendiente';

export default function Cocina() {
  return (

    <div className="Cocina">
      <div className="ordenesCocina">
        <CabeceraUsuario />
        <BarraSecundaria cat="Cocina" />
      </div>
      <div className="contenedorOrdenes" />
    </div>
  );
}
