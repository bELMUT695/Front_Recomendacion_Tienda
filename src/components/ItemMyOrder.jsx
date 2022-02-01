import React from "react";

const ItemMyOrder = ({ product }) => {
  console.log(product);
  return <div>{product[0].name}</div>;
};

export default ItemMyOrder;
