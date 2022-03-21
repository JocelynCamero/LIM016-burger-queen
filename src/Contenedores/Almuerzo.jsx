import React from 'react';
import BarraSecundaria from '../Componentes/BarraSecundaria';
import Producto from '../Componentes/Producto';
import Orden from './Orden';
import CabeceraMesero from '../Componentes/CabeceraMesero';
import '../Estilos/Desayuno.scss';

export default function Almuerzo() {
  return (
    <div className="Almuerzo">
      <div className="menu">
        <CabeceraMesero />
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