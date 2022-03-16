import React from 'react';

export default function SegBarraNav(props) {
  const { cat } = props;
  const cambiarSucategorias = (categoria) => {
    let subcategorias = [];
    if (categoria === 'Desayuno') subcategorias = ['Cafe', 'Sandwich', 'Jugo de frutas', 'Todos'];
    if (categoria === 'Almuerzo') subcategorias = ['Hamburguesas', 'Bebidas', 'Complementos', 'Todos'];
    return subcategorias;
  };
  return (
    <div>
      <p>
        {cambiarSucategorias(cat)[0]}
      </p>
      <p>
        {cambiarSucategorias(cat)[1]}
      </p>
      <p>
        {cambiarSucategorias(cat)[2]}
      </p>
      <p>
        {cambiarSucategorias(cat)[3]}
      </p>
    </div>
  );
}
