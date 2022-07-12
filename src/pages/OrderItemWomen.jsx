import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSingleWomen } from "../hooks/useSingleWome";
import Loader from "../components/loader/Loader";
import ProductDetails from "../components/OrderItemDeatils";
import AuthContext from "../contex/AuthContext";
const OrderItem = (props) => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const { isLoading, itemWomem } = useSingleWomen(id);
  console.log(isLoading, "fdfkgldkf");
  if (isLoading || !itemWomem) {
    console.log("HHHHHHHHHH");
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <ProductDetails product={itemWomem} />
    </div>
  );
};

export default OrderItem;
