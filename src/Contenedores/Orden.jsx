import React from 'react';
import CabeceraOrden from '../Componentes/CabeceraOrden';
import FormularioOrden from '../Componentes/FormularioOrden';
import DetalleOrden from '../Componentes/DetalleOrden';
import ProductoOrden from '../Componentes/ProductoOrden';
import TotalOrden from '../Componentes/TotalOrden';
import '../Estilos/Orden.scss';

export default function Orden() {
  return (
    <div className="Orden">
      <CabeceraOrden />
      <FormularioOrden />
      <DetalleOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <ProductoOrden />
      <TotalOrden />
    </div>
  );
}
