import React from 'react';
import ProductoOrdenPendiente from './ProductoOrdenPendiente';
import { actualizarEstadoPedidoM } from '../firebase/firebaseStore';
import '../estilos/OrdenPendiente.scss';

export default function OrdenPendiente({ orden, setActualizandoEstado }) {
  return (
    <div className="OrdenPendiente">
      <div className="cabeceraDatos">
        <div className="ordenMesero">
          <p className="texto">
            <span className="negrita">Orden N°: </span>
            {orden.numeroOrden}
          </p>
          <p className="texto">
            <span className="negrita">Cliente: </span>
            {orden.nombreMesero}
          </p>
        </div>
        <div className="ordenMesero">
          <p className="texto">
            <span className="negrita">Mesa: </span>
            {orden.numeroMesa}
          </p>
          {orden.estadoM === 'Entregado'
            ? (
              <p className="texto">
                <span className="negrita"> Duración:  </span>
                {((orden.horaEntrega.seconds - orden.horaIngreso.seconds) / 60).toFixed(0)}
                {' '}
                Min
              </p>
            )
            : ''}
        </div>
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
