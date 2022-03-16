import React from 'react';
import { Link } from 'react-router-dom';
import Productos from './Productos';

export default function Almuerzo() {
  const subcategoriasAlmuerzo = [
    'Hamburguesas',
    'Bebidas',
    'Complementos',
    'Todos',
  ];
  return (
    <div>
      <h1>Selecciona productos</h1>
      <ul>
        { subcategoriasAlmuerzo.map((item) => <li key={item}><Link to={`/VistaMesero/Almuerzo/${item}`}>{item}</Link></li>)}
      </ul>
      <Productos />
    </div>
  );
}
