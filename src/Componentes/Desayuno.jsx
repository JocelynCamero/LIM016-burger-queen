import React from 'react';
import { Link } from 'react-router-dom';
import Productos from './Productos';

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
      <h1>Selecciona productos</h1>
      <Productos />
    </div>
  );
}
