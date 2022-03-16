import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraNav from './BarraNav';
import CabeceraMesero from './CabeceraMesero';

export default function VistaMesero() {
  return (
    <div className="VistaMesero">
      <BarraNav />
      <CabeceraMesero nombreMesero="Jocelyn Camero" fecha="16/03/2022" />
      <Outlet />
    </div>
  );
}
