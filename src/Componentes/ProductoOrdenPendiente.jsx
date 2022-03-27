import React from 'react';
import '../Estilos/ProductoOrdenPendiente.scss';

export default function ProductoOrdenPendiente({ producto }) {
  return (
    <div className="ProductoOrdenPendiente">
      <div className="productoDetalle">
        <p className="texto">{producto.nombre}</p>
      </div>
      <p>{producto.cantidad}</p>
    </div>
  );
}
