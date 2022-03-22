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
        <img className="orden-productoAgregado" src={product.urlProducto} alt="" />
        <div>
          <p className="orden-nombreProductoAgregado">{product.nombreProducto}</p>
          <p className="orden-extras"> </p>
          <p className="orden-precioProductoAgregado">S/. {product.precioProducto}</p>
        </div>
      </div>
      <div className="contenedorCantidad">
        <button type="button" className="btnDisminuir"><FontAwesomeIcon className="IconoDsiminuir" icon={faMinus} size="1x" color="#EA7C69" /></button>
        <p className="orden-cantidadProductoAgregado"> 1 </p>
        <button type="button" className="btnAumentar"><FontAwesomeIcon className="IconoAumentar" icon={faPlus} size="1x" color="#EA7C69" /></button>
      </div>
      <p className="orden-subototatProductoAgregado"> S/30 </p>
      <button type="button" onClick={() => handleRemove(product)}><FontAwesomeIcon className="IconoAumentar" icon={faTrashCan} size="1x" color="#EA7C69" /></button>
    </div>
  );
}
