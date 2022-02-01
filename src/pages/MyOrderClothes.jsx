import React, { useContext } from "react";
import CartContext from "../contex/CartContext";
import NotFoundProduct from "../components/NotFoundProduct";
import ListMyOrder from "../container/ListMyOrder";
const MyOrderClothes = () => {
  const { stateCart } = useContext(CartContext);
  return (
    <div className="Container-my-order">
      {" "}
      {stateCart.initialCart.length > 0 ? <ListMyOrder /> : <NotFoundProduct />}
    </div>
  );
};

export default MyOrderClothes;
