import React, { useRef, useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../Estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  const { controladorDeEnvio, orden } = useContext(AppContext);
  const form = useRef(null);

  return (
    <form className="FormularioOrden" ref={form}>
      <input className="orden-nombreCliente" type="text" placeholder="Nombre del cliente" name="nombreCliente" required />
      <select name="mesa" className="mesa">
        <option value="Mesa 1">Mesa 1</option>
        <option value="Mesa 2">Mesa 2</option>
        <option value="Mesa 3">Mesa 3</option>
        <option value="Mesa 4">Mesa 4</option>
      </select>
      <button type="button" onClick={(e) => { controladorDeEnvio(e, form)}}> mostrar </button>
      {/* <input className="orden-numeroMesa" type="text" placeholder="N° de mesa" /> */}
    </form>
  );
}
