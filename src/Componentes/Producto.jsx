import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../Estilos/Producto.scss';

export default function Producto({ producto }) {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="Producto">
      <div className="contenedorImagenProducto">
        <img className="imgProducto" src={producto.url} alt={producto.nombre} />
      </div>
      <div className="datosProducto">
        <p className="nombreProducto">{producto.nombre}</p>
        <p className="precioProducto">{ `S/. ${producto.precio} `}</p>
        <button type="button" className="btnAgregar" onClick={() => handleClick(producto)}>Agregar</button>
      </div>
    </div>
  );
}
