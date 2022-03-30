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
            Pepito
          </p>
          <p className="nombreMesero">
            <span className="negrita">Mesero: </span>
            {orden.nombreMesero}
          </p>
        </div>
        <div className="PedidoCocinaB">
          <p className="hora">
            <span className="negrita">Fecha Ing:  </span>
            {orden.horaIngreso.seconds}
          </p>
          {orden.estadoC === 'Preparado'
            ? (
              <div>
                <p key={orden.numeroOrden}>
                  <span className="negrita"> Fecha Fin:</span>
                  {orden.horaSalida.seconds}
                </p>
                <p className="tiempoDuracion">
                  <span className="negrita">Duración:  </span>
                  {((orden.horaSalida.seconds - orden.horaIngreso.seconds) / 60).toFixed(0)}
                  {' '}
                  Min
                </p>
              </div>
            )
            : ''}

        </div>
      </div>
      <div className="contenedorProductosPendientes">
        {orden.productosAgregados.map((producto) => <ProductoPedidoPendiente key={producto.id} producto={producto} />)}
      </div>
      {orden.estadoC === 'Por preparar' ? (
        <button
          type="button"
          className="btnEntregar"
          onClick={() => { actualizarEstadoPedido(orden.id, 'Preparado', 'Por entregar'); setActualizandoEstado(true); }}
        >
          Preparado
        </button>
      ) : ' '}
    </div>
  );
}
