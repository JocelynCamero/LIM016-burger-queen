import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraPrincipal from '../componente/BarraPrincipal';

export default function VistaCocina() {
  return (
    <div className="VistaCocina">
      <BarraPrincipal vista="VistaCocina" />
      <Outlet />
    </div>
  );
}
