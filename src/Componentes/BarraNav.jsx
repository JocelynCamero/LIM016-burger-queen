import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faBurger, faBell, faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/BarraNavPrincipal.scss';

export default function BarraNav() {
  return (
    <div className="BarraNav">
      <Link className="ContenedorIcono" to="/VistaMesero/Desayuno"><FontAwesomeIcon icon={faCoffee} size="2x" color="White" /></Link>
      <Link className="ContenedorIcono" to="/VistaMesero/Almuerzo"><FontAwesomeIcon icon={faBurger} size="2x" color="White" /></Link>
      <Link className="ContenedorIcono" to="/VistaMesero/Notificaciones"><FontAwesomeIcon icon={faBell} size="2x" color="White" /></Link>
      <Link className="ContenedorIcono" to="/"><FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" color="White" /></Link>
    </div>
  );
}
