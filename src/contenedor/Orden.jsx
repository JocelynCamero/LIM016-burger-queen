import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../contexto/AppContext';
import { guardarData } from '../firebase/firebaseStore';
import CabeceraOrden from '../componente/CabeceraOrden';
import FormularioOrden from '../componente/FormularioOrden';
import DetalleOrden from '../componente/DetalleOrden';
import ProductoOrden from '../componente/ProductoOrden';
import '../estilo/Orden.scss';

export default function Orden() {
  const navigate = useNavigate();
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
          onClick={() => {
            console.log(orden);
            guardarData(orden);
            navigate('/VistaMesero/Desayuno');
          }}
        >
          Enviar a cocinero

        </button>
        <button type="button" onClick={() => console.log(orden)}>verificar orden</button>
      </div>
    </div>
  );
}
