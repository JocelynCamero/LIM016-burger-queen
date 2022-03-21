import React from 'react';
import { Link } from 'react-router-dom';
import Productos from './Productos';
import '../Estilos/Desayuno.scss';

export default function Desayuno() {
  const subcategoriasDesayuno = [
    'Cafe',
    'Sandwich',
    'Jugos de fruta',
    'Todos',
  ];
  return (
    <div className="Desayuno">
      <ul>
        { subcategoriasDesayuno.map((item) => <li key={item}><Link to={`/VistaMesero/Desayuno/${item}`}>{item}</Link></li>)}
      </ul>
      <div className="SeleccionaProductos">
        <h1>Selecciona productos</h1>
      </div>
      <Productos />
    </div>
  );
}

