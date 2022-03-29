import React from 'react';
import ProductoPedidoPendiente from './ProductoPedidoPendiente';
import { actualizarEstadoPedido } from '../firebase/firebaseStore';
import '../estilos/OrdenPendiente.scss';

export default function PedidoPendiente({ orden, setActualizandoEstado }) {
  return (
    <div className="PedidoPendiente">
      <div className="ContenedorCabecera">
        <div className="PedidoCocinaA">
          <p className="numeroOrden">
            <span className="negrita">Orden N°: </span>
            {orden.numeroOrden}
          </p>
          <p className="nombreCliente">
            <span className="negrita">Cliente: </span>
            Hora
          </p>
          <p className="nombreMesero">
            <span className="negrita">Mesero: </span>
            {orden.numeroMesa}
          </p>
        </div>
        <div className="PedidoCocinaB">
          <p className="hora">
            <span className="negrita">Hora: </span>
            Fecha
          </p>

          <p className="numeroMesa">
            <span className="negrita">Mesa: </span>
            Fecha
          </p>
          <p className="fecha">
            <span className="negrita">Fecha: </span>
            Fecha
          </p>
        </div>
      </div>
      <div className="contenedorProductosPendientes">
        {orden.productosAgregados.map((producto) => <ProductoPedidoPendiente key={producto.id} producto={producto} />)}
      </div>
      {orden.estado === 'Por preparar' ? (
        <button
          type="button"
          className="btnEntregar"
          onClick={() => { actualizarEstadoPedido(orden.id, 'Preparado'); setActualizandoEstado(true); }}
        >
          Preparado
        </button>
      ) : ' '}
    </div>
  );
}
