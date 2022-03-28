import React from 'react';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import BarraSecundaria from '../Componentes/BarraSecundaria';

export default function Pedidos() {
  return (
    <div>
      <CabeceraUsuario />
      <BarraSecundaria />
      <div className="contenedorPedidos" />
    </div>
  );
}
