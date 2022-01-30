import { useState } from "react";

const initialState = {
  initialCart: [],
};

const useInitialState = () => {
  const [stateCart, setStateCart] = useState(initialState);

  const addToCart = (payload) => {
    setStateCart({
      ...stateCart,

      initialCart: [...stateCart.initialCart, payload],
    });
  };

  return {
    stateCart,
    addToCart,
  };
};

export default useInitialState;
