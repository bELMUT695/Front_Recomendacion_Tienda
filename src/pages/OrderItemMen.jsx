import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { render, Text } from "ink";
import Spinner from "ink-spinner";
import useSingleWomen from "../hooks/useSingleWome";
import Spinner from "../components/Spinner";
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
      <Text>
        <Text color="green">
          <Spinner type="dots" />
        </Text>
        {" Loading"}
      </Text>
    );
  }

  console.log(itemWomem[0].description, "GGG");
  return (
    <div>
      {auth ? (
        <ProductDetails product={itemWomem} />
      ) : (
        props.history.push("/login")
      )}
    </div>
  );
};

export default OrderItem;
