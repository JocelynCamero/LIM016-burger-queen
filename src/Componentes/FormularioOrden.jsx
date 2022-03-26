import React, { useRef, useContext } from 'react';
import AppContext from '../Context/AppContext';
import '../Estilos/FormularioOrden.scss';

export default function FormularioOrden() {
  const { obtenerNombreCliente, obtenerNumeroMesa } = useContext(AppContext);
  const form = useRef();

  // Funcion de obtener datos del formulario
  const funcionObtenerDatos = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    console.log(formData.get('nombreCliente'));
    obtenerNombreCliente(formData.get('nombreCliente'));
    obtenerNumeroMesa(formData.get('mesa'));
  };

  return (
    <form className="FormularioOrden" ref={form}>
      <input className="orden-nombreCliente" type="text" placeholder="Nombre del cliente" name="nombreCliente" onChange={(e) => funcionObtenerDatos(e)} />
      <select name="mesa" className="mesa" onChange={(e) => funcionObtenerDatos(e)}>
        <option value="Mesa 1">Seleccione la mesa</option>
        <option value="Mesa 1">Mesa 1</option>
        <option value="Mesa 2">Mesa 2</option>
        <option value="Mesa 3">Mesa 3</option>
        <option value="Mesa 4">Mesa 4</option>
      </select>
    </form>
  );
}
