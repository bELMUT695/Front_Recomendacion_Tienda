import React, { useContext } from "react";
import ItemMyOrder from "../components/ItemMyOrder";
import CartContext from "../contex/CartContext";
import "./style/LisItemMyOrder.scss";
import Flete from "../components/Flete";
const ListMyOrder = () => {
  const { stateCart } = useContext(CartContext);

  return (
    <div>
      <div className="container-flete">
        <div>
          <Flete />
        </div>
        <section className="Contaimer-MyOrder-List">
          <div className="My-order-list">
            {stateCart.initialCart.map((item) => (
              <ItemMyOrder product={item} key={item.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListMyOrder;
