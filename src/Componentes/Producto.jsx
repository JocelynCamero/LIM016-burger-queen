import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/Producto.scss';

export default function Producto({ urlProducto, nombreProducto, precioProducto }) {
  return (
    <div className="Producto">
      <div className="contenedorImagenProducto">
        <img className="imgProducto" src={urlProducto} alt={nombreProducto} />
      </div>
      <div className="datosProducto">
        <p className="nombreProducto">{nombreProducto}</p>
        <p className="precioProducto">{ `S/. ${precioProducto} `}</p>
        <div className="contenedorCantidad">
          <button type="button" className="btnDisminuir"><FontAwesomeIcon className="IconoDsiminuir" icon={faMinus} size="2x" color="#EA7C69" /></button>
          <p className="cantidad">0</p>
          <button type="button" className="btnAumentar"><FontAwesomeIcon className="IconoAumentar" icon={faPlus} size="2x" color="#EA7C69" /></button>
        </div>
        <button type="button" className="btnAgregar">Agregar</button>
      </div>
    </div>
  );
}
