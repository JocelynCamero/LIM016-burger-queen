import React from 'react';
import {
  faCoffee, faUser, faBurger, faBell, faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import IconoNav from './IconoNav';

export default function BarraNav({ SetCurrentCate }) {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  const selectCat = (e) => {
    const currentCate = e.target.value;
    console.log('selecciono categoria');
    console.log(currentCate);
    return SetCurrentCate(currentCate);
  };
  return (
    <div>
      <IconoNav nombre={faUser} />
      <IconoNav
        nombre={faCoffee}
        value="Desayuno"
        onClick={handleClick}
      />
      <IconoNav nombre={faBurger} value="Almuerzo" onClick={handleClick} />
      <IconoNav nombre={faBell} value="Notificacion" onClick={handleClick} />
      <IconoNav nombre={faArrowRightFromBracket} value="Cerrar sesion" onClick={handleClick} />
    </div>
  );
}
