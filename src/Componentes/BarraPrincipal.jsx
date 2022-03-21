import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faBurger, faBell, faArrowRightFromBracket, faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/BarraPrincipal.scss';

export default function BarraPrincipal({ vista }) {
  const cambiarCategoria = () => {
    let categoria = [];
    if (vista === 'VistaMesero') categoria = [[faCoffee, '/VistaMesero/Desayuno'], [faBurger, '/VistaMesero/Almuerzo'], [faBell, '/VistaMesero/Notificaciones'], [faArrowRightFromBracket, '/']];
    if (vista === 'VistaCocina') categoria = [[faClipboardList, 'Pendientes'], [faArrowRightFromBracket, '/']];
    return categoria;
  };
  return (
    <div className="BarraPrincipal">
      {cambiarCategoria().map((icono) => <Link key={icono[1]} className="ContenedorIcono" to={icono[1]}><FontAwesomeIcon icon={icono[0]} size="2x" color="White" /></Link>)}
    </div>
  );
}
