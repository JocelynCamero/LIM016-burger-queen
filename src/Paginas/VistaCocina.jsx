import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraPrincipalCocina from '../Componentes/BarraPrincipalCocina';
import '../Estilos/VistaMesero.scss';

export default function VistaCocina() {
  return (
    <div className="VistaCocina">
      <BarraPrincipalCocina />
      <Outlet />
    </div>
  );
}
