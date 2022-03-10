import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faClipboard } from '@fortawesome/free-solid-svg-icons';

export default function viewMenuCocina() {
  return (
    <div className="MenuCocina">
      <nav className="BarraNavegacionCocina">
        <div className="IconoChef">
          <FontAwesomeIcon icon={faHardHat} />
        </div>
        <div>
          <FontAwesomeIcon icon={faClipboard} />
        </div>
      </nav>
      <div />
      <section>
        <div>
          <h2>Comanda N°:</h2>
          <h3>Fecha: </h3>
        </div>
      </section>
    </div>
  );
}
