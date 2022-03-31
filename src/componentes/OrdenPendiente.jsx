import React from 'react';
import ProductoOrdenPendiente from './ProductoOrdenPendiente';
import { actualizarEstadoPedido } from '../firebase/firebaseStore';
import '../estilos/OrdenPendiente.scss';

export default function OrdenPendiente({ orden, setActualizandoEstado }) {
  return (
    <div className="OrdenPendiente">
      <div className="ordenMesero">
        <p className="numeroOrden">
          <span className="negrita">Orden N°: </span>
          {orden.numeroOrden}
        </p>
        <p className="nombreMesero">
          <span className="negrita">Mesero: </span>
          {orden.nombreMesero}
        </p>
      </div>
      <p className="numeroMesa">
        <span className="negrita">Mesa: </span>
        {orden.numeroMesa}
      </p>
      <div className="contenedorProductosPendientes">
        {orden.productosAgregados.map((producto) => <ProductoOrdenPendiente key={producto.id} producto={producto} />)}
      </div>
      {orden.estado === 'Por entregar' ? (
        <button type="button" className="btnEntregar" onClick={() => { actualizarEstadoPedido(orden.id, 'Preparado', 'Entregado'); setActualizandoEstado(true); }}>
          Entregar
        </button>
      ) : ' '}
    </div>
  );
}
