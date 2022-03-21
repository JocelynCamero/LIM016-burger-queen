import React from 'react';
import '../Estilos/TotalOrden.scss';

export default function TotalOrden() {
  return (
    <div className="TotalOrden">
      <div className="lineaSeparadora" />
      <div className="contenedorMontoTotal">
        <p>Total</p>
        <p className="totalSoles">S/. 30</p>
      </div>
      <button className="btnTotal" type="button">Enviar a cocinero</button>
    </div>
  );
}
