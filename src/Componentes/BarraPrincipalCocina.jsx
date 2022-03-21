import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/BarraPrincipal.scss';

export default function BarraPrincipalCocina() {
  return (
    <div className="BarraPrincipalCocina">
      <Link className="ContenedorIcono" to="/VistaCocina/"><FontAwesomeIcon icon={faClipboardList} size="2x" color="White" /></Link>
      <Link className="ContenedorIcono" to="/"><FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" color="White" /></Link>
    </div>
  );
}
