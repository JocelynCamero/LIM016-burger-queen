import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraPrincipalMesero from '../Componentes/BarraPrincipalMesero';
import '../Estilos/VistaMesero.scss';

export default function VistaMesero() {
  return (
    <div className="VistaMesero">
      <BarraPrincipalMesero />
      <Outlet />
    </div>
  );
}
