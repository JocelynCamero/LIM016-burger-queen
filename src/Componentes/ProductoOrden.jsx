import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/ProductoOrden.scss';
import AppContext from '../Context/AppContext';

export default function ProductoOrden({ product }) {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (producto) => {
    console.log('estoy eliminando');
    removeFromCart(producto);
  };

  return (
    <div className="ProductoOrden">
      <div className="contenedorProductoAgregado">
        <img className="orden-productoAgregado" src={product.url} alt="" />
        <div>
          <p className="orden-nombreProductoAgregado">{product.nombre}</p>
          <p className="orden-extras"> </p>
          <p className="orden-precioProductoAgregado">
            S/.
            {' '}
            {product.precio}
          </p>
        </div>
      </div>
      <div className="contenedorCantidad">
        <button type="button" className="btnDisminuir"><FontAwesomeIcon className="IconoDsiminuir" icon={faMinus} size="1x" color="#3FAA86" /></button>
        <p className="orden-cantidadProductoAgregado">{product.cantidadProducto}</p>
        <button type="button" className="btnAumentar"><FontAwesomeIcon className="IconoAumentar" icon={faPlus} size="1x" color="#3FAA86" /></button>
      </div>
      <p className="orden-subototatProductoAgregado">
        {product.subtotal * product.cantidadProducto}
      </p>
      <button type="button" className="btnEliminar" onClick={() => handleRemove(product)}><FontAwesomeIcon className="IconoAumentar" icon={faTrashCan} size="1x" color="#3FAA86" /></button>
    </div>
  );
}
