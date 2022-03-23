import { useState } from 'react';

// Estado inicial del carrito
const initialState = {
  cart: [],
};

const useInitialState = () => {
  // Estado del carrito
  const [state, setState] = useState(initialState);

  // Funcion de agregar al carrito
  const addToCart = (payload) => {
    if (state.cart.find((item) => item.id === payload.id)) {
      console.log('este producto ya existe en el carrito');
    } else {
      setState({ cart: [...state.cart, payload] });
    }
  };

  // Funcion eliminar producto del carrito
  const removeFromCart = (payload) => {
    setState({ cart: state.cart.filter((i) => i.nombre !== payload.nombre) });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
