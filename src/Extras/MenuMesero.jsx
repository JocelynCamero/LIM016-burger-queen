import React from 'react';
import { Link } from 'react-router-dom';

export default function viewMenu() {
  return (
    <div className="MenuMesero">
      <section>
        <div className="Cabecera">
          <div>
            <h2>Orden N°:</h2>
            <h3>Fecha: </h3>
          </div>
          <input placeholder="Buscar alimento o bebida" />
        </div>
        <nav className="NavegacionOpcionesAlimento">
          <ul>
            <li><Link to="/Cafe">Cafe</Link></li>
            <li><Link to="/Sandwich">Sandwich</Link></li>
            <li><Link to="/JugoFrutas">Jugo de frutas</Link></li>
            <li><Link to="/TodosDesayuno">Todos</Link></li>
          </ul>
        </nav>
      </section>
      <div className="ResumenOrden">
        <div className="CabeceraOrden">
          <div className="DetalleOrden">
            <h3 className="NumeroOrden">Orden N°</h3>
            <h3 className="HoraOrden">Fecha</h3>
          </div>
          <div className="DetalleMesero">
            <input className="NombreCliente" placeholder="Ingrese nombre del cliente" />
            <input className="NumeroMesa" placeholder="Ingrese numero de mesa" />
          </div>
        </div>
      </div>
    </div>
  );
}
