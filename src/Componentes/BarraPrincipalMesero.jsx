import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faBurger, faBell, faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/BarraPrincipal.scss';

export default function BarraPrincipalMesero() {
  return (
    <div className="BarraPrincipalMesero">
      <Link className="ContenedorIcono" to="/VistaMesero/Desayuno"><FontAwesomeIcon icon={faCoffee} size="2x" color="#FF7CA3" /></Link>
      <Link className="ContenedorIcono" to="/VistaMesero/Almuerzo"><FontAwesomeIcon icon={faBurger} size="2x" color="#FF7CA3" /></Link>
      <Link className="ContenedorIcono" to="/VistaMesero/Notificaciones"><FontAwesomeIcon icon={faBell} size="2x" color="#FF7CA3" /></Link>
      <Link className="ContenedorIcono" to="/"><FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" color="#FF7CA3" /></Link>
    </div>
  );
}
