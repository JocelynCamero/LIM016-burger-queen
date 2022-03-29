import { useState, useEffect } from 'react';
// import { guardarData } from '../Firebase/firebaseStore';
import Swal from 'sweetalert2';

// Estado inicial de la orden
const estadoInicial = {
  numeroOrden: '',
  nombreCli: 'Luciana',
  numeroMesa: '',
  nombreMesero: '',
  productosAgregados: [],
  totalOrden: 0,
};

const useEstadoInicial = () => {
  // Estado de la orden
  const [orden, setOrden] = useState(estadoInicial);

  // Funcion de agregar producto a la orden
  const agregarProducto = (payload) => {
    if (orden.productosAgregados.find((item) => item.id === payload.id)) {
      Swal.fire({
        icon: 'info',
        title: 'Producto ya agregado',
        text: 'Define la cantidad en la orden',
        iconColor: '#252836',
        confirmButtonColor: '#3FAA86',
      });
      // console.log('Este producto ya existe en la orden');
    } else {
      const nuevoPayload = { ...payload, cantidad: 1, subtotal: payload.precio };
      setOrden({ ...orden, productosAgregados: [...orden.productosAgregados, nuevoPayload] });
    }
  };

  // Funcion eliminar producto de la orden
  const eliminarProducto = (payload) => {
    setOrden({ ...orden, productosAgregados: orden.productosAgregados.filter((i) => i.nombre !== payload.nombre) });
  };

  // Funcion para aumentar cantidad de un producto en la orden
  const aumentarCantidad = (id) => {
    const productosAgregadosEdit = orden.productosAgregados.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1, subtotal: item.precio * (item.cantidad + 1) } : item));
    setOrden({ ...orden, productosAgregados: productosAgregadosEdit });
    // console.log(orden.productosAgregados);
  };

  // Funcion para disminuir cantidad de un producto en la orden
  const disminuirCantidad = (id) => {
    if (orden.productosAgregados.find((item) => item.id === id).cantidad === 1) {
      eliminarProducto(orden.productosAgregados.find((item) => item.id === id));
    } else {
      const productosAgregadosEdit = orden.productosAgregados.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1, subtotal: item.precio * (item.cantidad - 1) } : item));
      setOrden({ ...orden, productosAgregados: productosAgregadosEdit });
    }
  };

  // Funcion que calcula el total de la orden
  useEffect(() => {
    const reductor = (acumulador, valorActual) => acumulador + valorActual.subtotal;
    const suma = orden.productosAgregados.reduce(reductor, 0);
    setOrden({ ...orden, totalOrden: suma });
  }, [orden.productosAgregados]);

  // Funcion que obtiene el nombre del cliente
  const obtenerNombreCliente = (nombCliente) => {
    console.log(nombCliente);
    console.log('entra a la funcion');
    setOrden({ ...orden, nombreCli: 'nombCliente' });
  };

  // Funcion que obtiene el numero de la mesa
  const obtenerNumeroMesa = (nunMesa) => {
    setOrden({ ...orden, numeroMesa: nunMesa });
  };

  // Funcion que obtiene el numero de orden
  const obtenerNumeroOrden = (numOrden) => {
    setOrden({ ...orden, numeroOrden: numOrden });
  };

  // Funcion que obtiene el nombre del mesero
  const obtenerNombreMesero = (nomMesero) => {
    setOrden({ ...orden, nombreMesero: nomMesero });
  };

  // Funcion que limpia los campos de la orden
  // const limpiarOrden = () => {
  //   setOrden(estadoInicial);
  // };

  return {
    orden,
    setOrden,
    agregarProducto,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
    obtenerNombreCliente,
    obtenerNumeroMesa,
    obtenerNumeroOrden,
    obtenerNombreMesero,
    // limpiarOrden,
  };
};

export default useEstadoInicial;

// Funcion que guarda el nombre del cliente y el numero de mesa
// const controladorDeEnvio = (e) => {
//   e.preventDefault();

//   if (formData.get('nombreCliente') === '' || formData.get('mesa') === 'Seleccione la mesa') {
//     Swal.fire({
//       icon: 'error',
//       title: 'Datos incompletos',
//       text: 'Por favor complete los campos solicitados',
//       iconColor: '#FF7CA3',
//       confirmButtonColor: '#3FAA86',
//     });
//   } else {
//     setOrden({ ...orden, nombreCliente: formData.get('nombreCliente'), numeroMesa: formData.get('mesa') });
//     Swal.fire({
//       title: 'Se envio la orden al cocinero',
//       animation: true,
//       toast: true,
//       icon: 'success',
//       iconColor: '#3FAA86',
//       position: 'top-end',
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//     });
//   // console.log(orden.nombreCliente);
//   }
// };

// Funcion que genera el numero de orden
// const numeracionOrden = async () => {
//   const arrOrdenes = await obtenerOrdenes();
//   console.log(arrOrdenes);
//   const numeroOrden = arrOrdenes.length + 1;
//   const numOrden = `ORD-00000${numeroOrden}`;
//   console.log(numOrden);
//   return numOrden;
// };
