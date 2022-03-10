import React from 'react';
import '../Styles/BarraNavPrincipal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee, faUser, faBurger, faBell, faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export default function BarraNavPrincipal() {
  return (
    <nav className="BarraNavegacion">
      <div className="IconosSuperior">
        <div className="PrimerContIcono">
          <div>
            <FontAwesomeIcon icon={faUser} size="2x" color="#EA7C69" />
          </div>
        </div>
        <div className="PrimerContIcono">
          <div>
            <FontAwesomeIcon icon={faCoffee} size="2x" color="#EA7C69" />
          </div>
        </div>
        <div className="PrimerContIcono">
          <div>
            <FontAwesomeIcon icon={faBurger} size="2x" color="#EA7C69" />
          </div>
        </div>
        <div className="PrimerContIcono">
          <div>
            <FontAwesomeIcon icon={faBell} size="2x" color="#EA7C69" />
          </div>
        </div>
      </div>
      <div className="IconosInferior">
        <div className="PrimerContIcono">
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" color="#EA7C69" />
          </div>
        </div>
      </div>
    </nav>
  );
}
