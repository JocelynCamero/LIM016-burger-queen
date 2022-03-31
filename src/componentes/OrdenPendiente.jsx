import React from 'react';
import ProductoOrdenPendiente from './ProductoOrdenPendiente';
import { actualizarEstadoPedidoM } from '../firebase/firebaseStore';
import '../estilos/OrdenPendiente.scss';

export default function OrdenPendiente({ orden, setActualizandoEstado }) {
  return (
    <div className="OrdenPendiente">
      <div className="ordenMesero">
        <p className="numeroOrden">
          <span className="negrita">Orden N°: </span>
          {orden.numeroOrden}
        </p>
        <p className="numeroMesa">
          <span className="negrita">Mesa: </span>
          {orden.numeroMesa}
        </p>
      </div>
      <div className="ordenMesero">
        <p className="nombreMesero">
          <span className="negrita">Cliente: </span>
          {orden.nombreMesero}
        </p>
        {orden.estadoM === 'Entregado'
          ? (
            <p className="tiempoDuracion">
              <span className="negrita"> Duración:  </span>
              {((orden.horaEntrega.seconds - orden.horaIngreso.seconds) / 60).toFixed(0)}
              {' '}
              Min
            </p>
          )
          : ''}
      </div>
      <div className="contenedorProductosPendientes">
        {orden.productosAgregados.map((producto) => <ProductoOrdenPendiente key={producto.id} producto={producto} />)}
      </div>
      {orden.estadoM === 'Por entregar' ? (
        <button type="button" className="btnEntregar" onClick={() => { actualizarEstadoPedidoM(orden.id); setActualizandoEstado(true); }}>
          Entregar
        </button>
      ) : ' '}
    </div>
  );
}
