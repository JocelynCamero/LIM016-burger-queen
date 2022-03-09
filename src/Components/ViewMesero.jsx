import React from 'react';
import BarraNav from './BarraNav';
import CabeceraMesero from './CabeceraMesero';
import { getDate } from '../Firebase/firebaseStore';

export default function ViewMesero() {
  console.log(getDate());
  return (
    <div>
      <BarraNav />
      <CabeceraMesero nombreMesero="Andres" fecha={getDate()} />
    </div>
  );
}
