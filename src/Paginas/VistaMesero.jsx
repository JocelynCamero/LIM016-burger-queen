import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraPrincipal from '../Componentes/BarraPrincipal';
import '../Estilos/VistaMesero.scss';

export default function VistaMesero() {
  return (
    <div className="VistaMesero">
      <BarraPrincipal vista="VistaMesero" />
      <Outlet />
    </div>
  );
}
