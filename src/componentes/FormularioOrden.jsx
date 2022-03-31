import React, { useRef, useContext } from 'react';
import AppContext from '../contextos/AppContext';
import '../estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  const { orden, obtenerNombreCliente, obtenerNumeroMesa } = useContext(AppContext);
  const nomClienteRef = useRef();
  const numMesaRef = useRef();

  return (
    <form className="FormularioOrden">
      <input
        className="orden-nombreCliente"
        type="text"
        value={orden.nombreCli}
        ref={nomClienteRef}
        placeholder="Nombre del cliente"
        onChange={() => obtenerNombreCliente(nomClienteRef.current.value)}
      />
      <select name="mesa" ref={numMesaRef} value={orden.numeroMesa} className="mesa" onChange={() => obtenerNumeroMesa(numMesaRef.current.value)}>
        <option value="0">Seleccione la mesa</option>
        <option value="1">Mesa 1</option>
        <option value="2">Mesa 2</option>
        <option value="3">Mesa 3</option>
        <option value="4">Mesa 4</option>
      </select>
    </form>
  );
}
