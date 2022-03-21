import React from 'react';
import '../Estilos/ProductoOrdenPendiente.scss';

export default function ProductoOrdenPendiente() {
  return (
    <div className="ProductoOrdenPendiente">
      <div className="productoDetalle">
        <p className="texto">Hamburguesa de carne simple</p>
        <p className="texto">Queso - Huevo</p>
      </div>
      <p>2</p>
    </div>
  );
}
