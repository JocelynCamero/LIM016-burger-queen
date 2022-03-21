import React from 'react';
import '../Estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  return (
    <form className="FormularioOrden">
      <input className="orden-nombreCliente" type="text" placeholder="Nombre del cliente" />
      <input className="orden-numeroMesa" type="text" placeholder="N° de mesa" />
    </form>
  );
}
