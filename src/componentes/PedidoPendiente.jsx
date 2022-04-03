import React from 'react';
import ProductoPedidoPendiente from './ProductoPedidoPendiente';
import { actualizarEstadoPedidoC } from '../firebase/firebaseStore';
import '../estilos/OrdenPendiente.scss';

export default function PedidoPendiente({ orden, setActualizandoEstado }) {
  const hIngreso = new Date(orden.horaIngreso.seconds * 1000).toString().slice(3, -32);
  // console.log(typeof hIngreso);
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
            {orden.nombreCliente}
          </p>
          <p className="nombreMesero">
            <span className="negrita">Mesero: </span>
            {orden.nombreMesero}
          </p>
        </div>
        <div className="PedidoCocinaB">
          <p className="hora">
            <span className="negrita">Fecha Ing:  </span>
            {hIngreso}
          </p>
          {orden.estadoC === 'Preparado'
            ? (
              <div>
                <p key={orden.numeroOrden}>
                  <span className="negrita"> Fecha Fin:</span>
                  {new Date(orden.horaSalida.seconds * 1000).toString().slice(3, -32)}
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
          onClick={() => { actualizarEstadoPedidoC(orden.id); setActualizandoEstado(true); }}
        >
          Preparado
        </button>
      ) : ' '}
    </div>
  );
}
