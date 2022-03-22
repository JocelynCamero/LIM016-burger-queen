import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import '../Estilos/VistaMesero.scss';
import OrdenPendiente from '../Componentes/OrdenPendiente';
import { useParams } from 'react-router-dom';

export default function Cocina() {
  const { vista } = useParams();
  return (

    <div className="Cocina">
      <div className="ordenesCocina">
        <CabeceraUsuario />
        <BarraSecundaria cat="Cocina" />
      </div>
      <div className="contenedorOrdenes">
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
      </div>
    </div>
  );
}
