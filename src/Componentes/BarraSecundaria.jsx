/* eslint-disable max-len */
import React from 'react';
import '../Estilos/BarraSecundaria.scss';

export default function BarraSecundaria({ cat, SetCurrentMenu }) {
  const cambiarSubcategoriasDesayuno = (categoria) => {
    let subcategorias = [];
    if (categoria === 'Desayuno') subcategorias = ['Cafe', 'Sandwich', 'Jugos'];
    if (categoria === 'Almuerzo') subcategorias = ['Hamburguesa', 'Bebidas', 'Acompañamientos'];
    if (categoria === 'Notificaciones') subcategorias = ['Desayunos', 'Almuerzos'];
    return subcategorias;
  };

  const HandleMenu = (e) => {
    const currentMenu = e.target.value;
    console.log(currentMenu);

    return SetCurrentMenu(currentMenu);
  };
  // const obtenerNombreSubcategoria = (nombreSucat) => console.log(nombreSucat);
  return (
    <div className="BarraSecundaria">
      <ul className="listaSubcategorias">
        {cambiarSubcategoriasDesayuno(cat).map((i) => <button className="subCategoria" type="button" key={i} value={i} onClick={(e) => HandleMenu(e)}>{i}</button>)}
      </ul>
    </div>
  );
}
