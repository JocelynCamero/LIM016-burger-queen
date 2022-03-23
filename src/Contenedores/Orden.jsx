import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AppContext from '../Context/AppContext';
import CabeceraOrden from '../Componentes/CabeceraOrden';
import FormularioOrden from '../Componentes/FormularioOrden';
import DetalleOrden from '../Componentes/DetalleOrden';
import ProductoOrden from '../Componentes/ProductoOrden';
import '../Estilos/Orden.scss';

export default function Orden() {
  const toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.precioProducto;
    const sum = state.productosAgregados.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Orden">
      <CabeceraOrden />
      <FormularioOrden />
      <DetalleOrden />
      <div className="ProductosOrdenados">
        {state.productosAgregados.map((product) => (
          <ProductoOrden product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
      <div className="TotalOrden">
        <div className="lineaSeparadora" />
        <div className="contenedorMontoTotal">
          <p>Total</p>
          <p className="totalSoles">
            S/
            {sumTotal()}
          </p>
        </div>
        <button
          className="btnTotal"
          type="button"
          onClick={() => toastMixin.fire({
            animation: true,
            title: 'Se envio a cocinero',
          })}
        >
          Enviar a cocinero

        </button>
      </div>
    </div>
  );
}
