import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraPrincipal from '../componentes/BarraPrincipal';
import '../estilos/VistaMesero.scss';

export default function VistaMesero() {
  return (
    <div className="VistaMesero">
      <BarraPrincipal vista="VistaMesero" />
      <Outlet />
    </div>
  );
}
