import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { guardarData } from '../Firebase/firebaseStore';
import CabeceraOrden from '../Componentes/CabeceraOrden';
import FormularioOrden from '../Componentes/FormularioOrden';
import DetalleOrden from '../Componentes/DetalleOrden';
import ProductoOrden from '../Componentes/ProductoOrden';
import '../Estilos/Orden.scss';

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
