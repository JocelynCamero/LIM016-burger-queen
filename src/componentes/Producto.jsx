import React, { useContext } from 'react';
import AppContext from '../contextos/AppContext';
import '../estilos/Producto.scss';

export default function Producto({ producto }) {
  const { agregarProducto } = useContext(AppContext);
  const handleClick = (item) => {
    agregarProducto(item);
  };
  return (
    <div className="Producto">
      <div className="contenedorImagenProducto">
        <img className="imgProducto" src={producto.url} alt={producto.nombre} />
      </div>
      <div className="datosProducto">
        <p className="texto">{producto.nombre}</p>
        <p className="texto">{ `S/. ${producto.precio} `}</p>
        <button type="button" className="btnAgregar" onClick={() => handleClick(producto)}>Agregar</button>
      </div>
    </div>
  );
}
