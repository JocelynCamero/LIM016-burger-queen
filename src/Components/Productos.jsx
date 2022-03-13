import React from 'react';

export default function Productos(props) {
  const { nombProd, preProd } = props;
  return (
    <div className="ContenedorProducto">
      <p className="NombreProducto">
        {nombProd}
      </p>
      <p className="PrecioProducto">{preProd}</p>
    </div>
  );
}
