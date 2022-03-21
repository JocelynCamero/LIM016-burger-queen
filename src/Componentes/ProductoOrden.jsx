import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/ProductoOrden.scss';

export default function ProductoOrden() {
  return (
    <div className="ProductoOrden">
      <div className="contenedorProductoAgregado">
        <img className="orden-productoAgregado" src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" alt="" />
        <div>
          <p className="orden-nombreProductoAgregado">Nombre producto</p>
          <p className="orden-extras"> </p>
          <p className="orden-precioProductoAgregado">S/. 10</p>
        </div>
      </div>
      <p className="orden-cantidadProductoAgregado">3</p>
      <p className="orden-subototatProductoAgregado">S/. 30</p>
      <FontAwesomeIcon>{faTrashCan}</FontAwesomeIcon>
    </div>
  );
}
