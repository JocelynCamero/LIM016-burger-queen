import React from 'react';
import { Link } from 'react-router-dom';
import PedidosPendientes from './PedidosPendientes';

export default function Notificaciones() {
  const categorias = [
    'Desayunos',
    'Almuerzos',
  ];
  return (
    <div>
      <h1>Pedidos pendientes de entrega</h1>
      <ul>
        { categorias.map((item) => <li key={item}><Link to={`/Notificaciones/${item}`}>{item}</Link></li>)}
      </ul>
      <PedidosPendientes />
    </div>
  );
}
