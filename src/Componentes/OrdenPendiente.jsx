import React from 'react';
import { useParams } from 'react-router-dom';
import ProductoOrdenPendiente from './ProductoOrdenPendiente';
import '../Estilos/OrdenPendiente.scss';

export default function OrdenPendiente() {
  const cambiarNombreBoton = () => {
    const { vista } = useParams();
    let nombreBoton;
    if (vista === 'VistaMesero') nombreBoton = 'Entregar';
    if (vista === 'Cocina') nombreBoton = 'Preparar';
    return nombreBoton;
  };

  return (
    <div className="OrdenPendiente">
      <div className="ordenMesero">
        <p className="numeroOrden">
          <span className="negrita">Orden N°: </span>
          000001
        </p>
        <p className="nombreMesero">
          <span className="negrita">Mesero: </span>
          Pepito
        </p>
      </div>
      <p className="numeroMesa">
        <span className="negrita">Mesa: </span>
        2
      </p>
      <div className="contenedorProductosPendientes">
        <ProductoOrdenPendiente />
        <ProductoOrdenPendiente />
        <ProductoOrdenPendiente />
      </div>
      <button type="button" className="btnEntregar">{cambiarNombreBoton}</button>
    </div>
  );
}
