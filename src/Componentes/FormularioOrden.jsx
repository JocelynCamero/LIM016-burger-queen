import React from 'react';
import '../Estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  return (
    <form className="FormularioOrden">
      <input className="orden-nombreCliente" type="text" placeholder="Nombre del cliente" required />
      <select name="mesa" className="mesa">
        <option value="Mesa 1">Mesa 1</option>
        <option value="Mesa 2">Mesa 2</option>
        <option value="Mesa 3">Mesa 3</option>
        <option value="Mesa 4">Mesa 4</option>
      </select>
      {/* <input className="orden-numeroMesa" type="text" placeholder="N° de mesa" /> */}
    </form>
  );
}
