import React from 'react';
import { useParams } from 'react-router-dom';
import '../Estilos/Productos.scss';

export default function Productos() {
  const { nombre } = useParams();
  return (
    <div className="Productos">
      <div className="contenedorProductos">
        {nombre}
      </div>
      <div className="contenedorProductos">
        {nombre}
      </div>
      <div className="contenedorProductos">
        {nombre}
      </div>
      <div className="contenedorProductos">
        {nombre}
      </div>
      <div className="contenedorProductos">
        {nombre}
      </div>
      <div className="contenedorProductos">
        {nombre}
      </div>
    </div>
  );
}
