import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import CabeceraOrden from '../Componentes/CabeceraOrden';
import FormularioOrden from '../Componentes/FormularioOrden';
import DetalleOrden from '../Componentes/DetalleOrden';
import ProductoOrden from '../Componentes/ProductoOrden';
import '../Estilos/Orden.scss';

export default function Orden() {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.precioProducto;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Orden">
      <CabeceraOrden />
      <FormularioOrden />
      <DetalleOrden />
      <div className="ProductosOrdenados">
        {state.cart.map((product) => (
          <ProductoOrden product={product} key={`orderItem-${product.nombreProducto}`} />
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
        <button className="btnTotal" type="button">Enviar a cocinero</button>
      </div>
    </div>
  );
}
