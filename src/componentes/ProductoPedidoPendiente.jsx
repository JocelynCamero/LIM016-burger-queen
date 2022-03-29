import React from 'react';
import '../estilos/ProductoOrdenPendiente.scss';

export default function ProductoPedidoPendiente({ producto }) {
  return (
    <div className="ProductoPedidoPendiente">
      <div className="productoDetalle">
        <p className="texto">{producto.nombre}</p>
      </div>
      <p>{producto.cantidad}</p>
    </div>
  );
}
