import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../estilo/ProductoOrden.scss';
import AppContext from '../contexto/AppContext';

export default function ProductoOrden({ product }) {
  const { eliminarProducto, aumentarCantidad, disminuirCantidad } = useContext(AppContext);
  const handleRemove = (producto) => {
    console.log('estoy eliminando');
    eliminarProducto(producto);
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
        <button
          type="button"
          className="btnDisminuir"
          aria-label="botonDisminuir"
          onClick={() => disminuirCantidad(product.id)}
        >
          <FontAwesomeIcon className="IconoDsiminuir" icon={faMinus} size="1x" color="#3FAA86" />
        </button>
        <p className="orden-cantidadProductoAgregado">{product.cantidad}</p>
        <button
          type="button"
          className="btnAumentar"
          aria-label="botonAumentar"
          onClick={() => aumentarCantidad(product.id)}
        >
          <FontAwesomeIcon className="IconoAumentar" icon={faPlus} size="1x" color="#3FAA86" />
        </button>
      </div>
      <p className="orden-subototatProductoAgregado">
        S/.
        {' '}
        {product.subtotal}
      </p>
      <button
        type="button"
        className="btnEliminar"
        aria-label="botonEliminar"
        onClick={() => handleRemove(product)}
      >
        <FontAwesomeIcon className="IconoAumentar" icon={faTrashCan} size="1x" color="#FF7CA3" />
      </button>
    </div>
  );
}
