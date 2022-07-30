import React from "react";
import { Rating } from "@material-ui/lab";
import "./styles/ItemWomen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import useGetRatingByClothe from "../hooks/useGetRatingByClothe";

const ItemWomen = ({ product }) => {
  const { listItemWomem, isLoading, nrating } = useGetRatingByClothe(
    product._id
  );

  const options = {
    value: listItemWomem,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="ProductItem">
      {product.image.map((number) => (
        <img src={number.URL} alt="{lgo}" />
      ))}

      <div className="product-info">
        <div>
          <p>${product.unitPrice}</p>
          <p>{product.name}</p>
          <p>{product.numSales} Vendidos</p>
        </div>

        <figure style={{ fontSize: "1.5em", color: "green" }}>
          <FontAwesomeIcon icon={faCartPlus} className="img1" />
        </figure>
      </div>
      <div className="rating">
        <div>
          <Rating {...options} />
        </div>
        <h1 className="zise-nrating"> {nrating} calificados</h1>
      </div>
    </div>
  );
};

export default ItemWomen;
