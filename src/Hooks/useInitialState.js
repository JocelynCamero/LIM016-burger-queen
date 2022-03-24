import { useState } from 'react';
import Swal from 'sweetalert2';

// Estado inicial de la orden
const estadoInicial = {
  productosAgregados: [],
};

const useEstadoInicial = () => {
  // Estado de la orden
  const [orden, setOrden] = useState(estadoInicial);

  // Funcion de agregar producto a la orden
  const agregarProducto = (payload) => {
    if (orden.productosAgregados.find((item) => item.id === payload.id)) {
      Swal.fire(
        'Producto ya agregado',
        'Define la cantidad en la orden',
        'info',
      );
      // console.log('Este producto ya existe en la orden');
    } else {
      const nuevoPayload = { ...payload, cantidad: 1, subtotal: payload.precio };
      setOrden({ productosAgregados: [...orden.productosAgregados, nuevoPayload] });
    }
  };

  // Funcion eliminar producto de la orden
  const eliminarProducto = (payload) => {
    setOrden({ productosAgregados: orden.productosAgregados.filter((i) => i.nombre !== payload.nombre) });
  };

  // Funcion para aumentar cantidad de un producto en la orden
  const aumentarCantidad = (id) => {
    const productosAgregadosEdit = orden.productosAgregados.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1, subtotal: item.precio * (item.cantidad + 1) } : item));
    setOrden({ productosAgregados: productosAgregadosEdit });
    // console.log(orden.productosAgregados);
  };

  // Funcion para disminuir cantidad de un producto en la orden
  const disminuirCantidad = (id) => {
    if (orden.productosAgregados.find((item) => item.id === id).cantidad === 1) {
      eliminarProducto(orden.productosAgregados.find((item) => item.id === id));
    } else {
      const productosAgregadosEdit = orden.productosAgregados.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1, subtotal: item.precio * (item.cantidad - 1) } : item));
      setOrden({ productosAgregados: productosAgregadosEdit });
    }
  };

  return {
    orden,
    agregarProducto,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
  };
};

export default useEstadoInicial;
