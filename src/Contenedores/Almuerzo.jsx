import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraUsuario from '../Componentes/CabeceraUsuario';
import '../Estilos/Desayuno.scss';

export default function Almuerzo() {
  return (
    <div className="Almuerzo">
      <div className="menu">
        <CabeceraUsuario />
        <BarraSecundaria cat="Almuerzo" />
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
