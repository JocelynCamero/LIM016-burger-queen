import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import '../Estilos/Desayuno.scss';

export default function Desayuno() {
  return (
    <div className="Desayuno">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Desayuno" />
        <div className="contenedorProductos">
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
        </div>
      </div>
      <Orden />
    </div>
  );
}
