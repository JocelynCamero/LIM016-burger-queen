import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import Orden from './Orden';
import '../Estilos/VistaMesero.scss';
export default function Desayuno() {
  return (

    <div className="Cocina">
      <div className="ordenesCocina">
        <CabeceraUsuario />

        <BarraSecundaria cat="Desayuno" />

        <div className="contenedorOrdenes">

          <Orden />

        </div>

      </div>

    </div>
  );
}
