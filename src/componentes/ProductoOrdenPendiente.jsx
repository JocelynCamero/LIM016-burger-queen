import React from 'react';
import '../estilos/ProductoOrdenPendiente.scss';

export default function ProductoOrdenPendiente({ producto }) {
  return (
    <div className="ProductoOrdenPendiente">
      <div className="productoDetalle">
        <p className="texto">{producto.nombre}</p>
      </div>
      <p className="texto">{producto.cantidad}</p>
    </div>
  );
}
