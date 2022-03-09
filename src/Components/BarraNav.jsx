import React from 'react';
import {
  faCoffee, faUser, faBurger, faBell, faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import IconoNav from './IconoNav';

export default function BarraNav() {
  return (
    <div>
      <IconoNav nombre={faCoffee} />
      <IconoNav nombre={faUser} />
      <IconoNav nombre={faBurger} />
      <IconoNav nombre={faBell} />
      <IconoNav nombre={faArrowRightFromBracket} />
    </div>
  );
}
