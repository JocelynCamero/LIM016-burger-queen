import React from 'react';
import { useParams } from 'react-router-dom';

export default function Productos() {
  const { nombre } = useParams();
  return (
    <div>
      <h1>Productos</h1>
      {nombre}
    </div>
  );
}
