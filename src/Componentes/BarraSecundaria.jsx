import React from 'react';
import '../Estilos/BarraSecundaria.scss';

export default function BarraSecundaria({ cat, setSubcategoria }) {
  // Funcion para obtener las subcategorias
  const cambiarSubcategoria = (categoria) => {
    let subcategorias = [];
    if (categoria === 'Desayuno') subcategorias = ['Cafe', 'Sandwich', 'Jugos'];
    if (categoria === 'Almuerzo') subcategorias = ['Hamburguesa', 'Bebidas', 'Acompañamientos'];
    if (categoria === 'Notificaciones') subcategorias = ['Por entregar', 'Entregados'];
    return subcategorias;
  };

  // Funcion para pobtener la categoria seleccionada
  const obtenerCategoria = (e) => {
    const categoriaActual = e.target.value;
    console.log(categoriaActual);
    return setSubcategoria(categoriaActual);
  };

  return (
    <div className="BarraSecundaria">
      <ul className="listaSubcategorias">
        {cambiarSubcategoria(cat).map((i) => <button className="subCategoria" type="button" key={i} value={i} onClick={(e) => obtenerCategoria(e)}>{i}</button>)}
      </ul>
    </div>
  );
}
