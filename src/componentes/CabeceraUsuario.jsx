import React, { useContext, useEffect } from 'react';
import AppContext from '../contextos/AppContext';
import Hora from './Hora';
import '../estilos/CabeceraUsuario.scss';

export default function CabeceraUsuario() {
  const { usuario, setUsuario } = useContext(AppContext);
  useEffect(() => {
    const usuarioLogueado = localStorage.getItem('usuario');
    if (usuarioLogueado) {
      setUsuario(usuarioLogueado);
    }
  }, []);
  console.log(usuario);
  return (
    <div className="CabeceraUsuario">
      <div className="contenedorUsuarioFecha">
        <h1 className="nombreUsuario">
          {usuario}
        </h1>
        <Hora />
      </div>
      {/* <input className="BarraBusqueda" placeholder="Buscar alimento o bebida" /> */}
    </div>
  );
}
