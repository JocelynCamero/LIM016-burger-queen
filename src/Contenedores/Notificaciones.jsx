import React from 'react';
import CabeceraMesero from '../Componentes/CabeceraUsuario';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import OrdenPendiente from '../Componentes/OrdenPendiente';
import '../Estilos/Notificaciones.scss';

export default function Notificaciones() {
  return (
    <div className="Notificaciones">
      <CabeceraMesero />
      <BarraSecundaria cat="Notificaciones" />
      <div className="contenedorOrdenes">
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
        <OrdenPendiente />
      </div>

    </div>
  );
}
