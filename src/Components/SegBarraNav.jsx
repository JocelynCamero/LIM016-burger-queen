import React from 'react';
import LinkNav from './LinkNav';

export default function SegBarraNav() {
  return (
    <div>
      <LinkNav subcategoria="Cafe" />
      <LinkNav subcategoria="Sandwich" />
      <LinkNav subcategoria="Jugo de frutas" />
      <LinkNav subcategoria="Todos" />
    </div>
  );
}
