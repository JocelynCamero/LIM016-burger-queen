import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../contextos/AppContext';
import { guardarData } from '../firebase/firebaseStore';
import CabeceraOrden from '../componentes/CabeceraOrden';
import FormularioOrden from '../componentes/FormularioOrden';
import DetalleOrden from '../componentes/DetalleOrden';
import ProductoOrden from '../componentes/ProductoOrden';
import '../estilos/Orden.scss';

export default function Orden() {
  const navigate = useNavigate();
  const { orden, limpiarOrden } = useContext(AppContext);

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
            limpiarOrden();
            navigate('/VistaMesero/Desayuno');
          }}
        >
          Enviar a cocinero

        </button>
      </div>
    </div>
  );
}
