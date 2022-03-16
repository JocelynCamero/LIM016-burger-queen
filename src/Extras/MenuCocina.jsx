import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function viewMenuCocina() {
  return (
    <div className="menuCocina">
      <nav>
        <div>
          <FontAwesomeIcon icon={faCoffee} />
          <i />
          <i />
          <i />
        </div>
        <div>
          <Link to="/MenuMesero">Mesero</Link>
          <i />
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
