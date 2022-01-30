import React, { useContext } from "react";
import CartContext from "../contex/CartContext";
import NotFoundProduct from "../components/NotFoundProduct";

const MyOrderClothes = () => {
  const { stateCart } = useContext(CartContext);
  return (
    <div className="Container-my-order">
      {" "}
      {stateCart.initialCart.length > 0 ? (
        <div>{stateCart.initialCart.length}</div>
      ) : (
        <NotFoundProduct />
      )}
    </div>
  );
};

export default MyOrderClothes;
