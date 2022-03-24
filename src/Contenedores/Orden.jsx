import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AppContext from '../Context/AppContext';
import CabeceraOrden from '../Componentes/CabeceraOrden';
import FormularioOrden from '../Componentes/FormularioOrden';
import DetalleOrden from '../Componentes/DetalleOrden';
import ProductoOrden from '../Componentes/ProductoOrden';
import '../Estilos/Orden.scss';

export default function Orden() {
  const { orden } = useContext(AppContext);

  return (
    <div className="Orden">
      <CabeceraOrden />
      <FormularioOrden />
      <DetalleOrden />
      <div className="ProductosOrdenados">
        {orden.productosAgregados.map((product) => (
          <ProductoOrden product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
      <div className="TotalOrden">
        <div className="lineaSeparadora" />
        <div className="contenedorMontoTotal">
          <p>Total</p>
          <p className="totalSoles">
            S/.
            {' '}
            {orden.totalOrden}
          </p>
        </div>
        <button
          className="btnTotal"
          type="button"
          onClick={() => Swal.fire({
            title: 'Se envio la orden al cocinero',
            animation: true,
            toast: true,
            icon: 'success',
            iconColor: '#3FAA86',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })}
        >
          Enviar a cocinero

        </button>
      </div>
    </div>
  );
}
