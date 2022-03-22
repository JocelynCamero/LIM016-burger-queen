import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../Estilos/Producto.scss';

export default function Producto({ urlProducto, nombreProducto, precioProducto }) {
  const producto = {
    urlProducto,
    nombreProducto,
    precioProducto,
  };
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="Producto">
      <div className="contenedorImagenProducto">
        <img className="imgProducto" src={urlProducto} alt={nombreProducto} />
      </div>
      <div className="datosProducto">
        <p className="nombreProducto">{nombreProducto}</p>
        <p className="precioProducto">{ `S/. ${precioProducto} `}</p>
        <button type="button" className="btnAgregar" onClick={() => handleClick(producto)}>Agregar</button>
      </div>
    </div>
  );
}
