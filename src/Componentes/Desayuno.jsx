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
    <div>
      <h1>Selecciona productos</h1>
      <ul>
        { subcategoriasDesayuno.map((item) => <li key={item}><Link to={`/Desayuno/${item}`}>{item}</Link></li>)}
      </ul>
      <Productos />
    </div>
  );
}
