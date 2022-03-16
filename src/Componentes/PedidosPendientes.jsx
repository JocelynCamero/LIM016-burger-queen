import React from 'react';
import { useParams } from 'react-router-dom';

export default function PedidosPendientes() {
  const { categorias } = useParams();
  return (
    <div>
      <h1>Algo esta sucediendo aqui</h1>
      {categorias}
    </div>
  );
}
