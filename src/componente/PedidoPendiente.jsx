import React from 'react';
import ProductoPedidoPendiente from './ProductoPedidoPendiente';
import '../estilos/OrdenPendiente.scss';

export default function PedidoPendiente({ orden }) {
  return (
    <div className="PedidoPendiente">
      <div className="PedidoCocina">
        <p className="numeroOrden">
          <span className="negrita">Orden N°: </span>
          {orden.numeroOrden}
        </p>
        <p className="nombreMesero">
          <span className="negrita">Mesero: </span>
          {orden.nombreMesero}
        </p>
      </div>
      <p className="hora">
        <span className="negrita">Hora: </span>
        Hora
      </p>
      <p className="fecha">
        <span className="negrita">Fecha: </span>
        Fecha
      </p>
      <p className="numeroMesa">
        <span className="negrita">Mesa: </span>
        {orden.numeroMesa}
      </p>
      <p className="nombreCliente">
        <span className="negrita">Cliente: </span>
        Fecha
      </p>
      <div className="contenedorProductosPendientes" />
    </div>
  );
}
