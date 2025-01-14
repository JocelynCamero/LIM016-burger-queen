import React, { useRef, useContext } from 'react';
import AppContext from '../contextos/AppContext';
import '../estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  const { obtenerNombreCliente, obtenerNumeroMesa } = useContext(AppContext);
  const nomClienteRef = useRef();
  const numMesaRef = useRef();

  // Funcion de obtener datos del formulario
  const funcionObtenerDatos = (e) => {
    e.preventDefault();
    obtenerNombreCliente(nomClienteRef.current.value);
    obtenerNumeroMesa(numMesaRef.current.value);
  };

  return (
    <form className="FormularioOrden">
      <input
        className="orden-nombreCliente"
        type="text"
        ref={nomClienteRef}
        placeholder="Nombre del cliente"
        onChange={(e) => funcionObtenerDatos(e)}
      />
      <select name="mesa" ref={numMesaRef} className="mesa" onChange={(e) => funcionObtenerDatos(e)}>
        <option value="Mesa 1">Seleccione la mesa</option>
        <option value="Mesa 1">Mesa 1</option>
        <option value="Mesa 2">Mesa 2</option>
        <option value="Mesa 3">Mesa 3</option>
        <option value="Mesa 4">Mesa 4</option>
      </select>
    </form>
  );
}
