import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/Producto.scss';

export default function Producto() {
  return (
    <div className="Producto">
      <div className="contenedorImagenProducto">
        <img className="imgProducto" src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="" />
      </div>
      <div className="datosProducto">
        <p className="nombreProducto">Hamburguesa de carne simple</p>
        <p className="precioProducto">$10</p>
        <div className="contenedorCantidad">
          <button type="button" className="btnDisminuir">-</button>
          <FontAwesomeIcon>{faMinus}</FontAwesomeIcon>
          <p className="cantidad">0</p>
          <button type="button" className="btnAumentar"><FontAwesomeIcon>{faPlus}</FontAwesomeIcon></button>
        </div>
        <button type="button" className="btnAgregar">Agregar</button>
      </div>
    </div>
  );
}
