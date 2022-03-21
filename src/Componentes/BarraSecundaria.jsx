import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/BarraSecundaria.scss';

export default function BarraSecundaria({ cat }) {
  const cambiarSubcategoriasDesayuno = (categoria) => {
    let subcategorias = [];
    if (categoria === 'Desayuno') subcategorias = ['Cafe', 'Sandwich', 'Jugo de frutas', 'Todos'];
    if (categoria === 'Almuerzo') subcategorias = ['Hamburguesas', 'Bebidas', 'Complementos', 'Todos'];
    if (categoria === 'Notificaciones') subcategorias = ['Desayunos', 'Almuerzos'];
    return subcategorias;
  };
  return (
    <div className="BarraSecundaria">
      <ul className="listaSubcategorias">
        {cambiarSubcategoriasDesayuno(cat).map((item) => <li key={item}><Link to={`/VistaMesero/Almuerzo/${item}`}>{item}</Link></li>)}
      </ul>
    </div>
  );
}
