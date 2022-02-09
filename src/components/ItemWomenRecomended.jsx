import React from "react";
import { Rating } from "@material-ui/lab";
import "./styles/ItemWomen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemWomenRecomended = ({ product }) => {
  console.log(product);
  const options = {
    value: 3.5,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="ProductItem">
      {product[0].image.map((number) => (
        <img src={number.URL} alt="{lgo}" />
      ))}

      <div className="product-info">
        <div>
          <p>${product[0].unitPrice}</p>
          <p>{product[0].name}</p>
        </div>

        <figure style={{ fontSize: "1.5em", color: "green" }}>
          <FontAwesomeIcon icon={faCartPlus} className="img1" />
        </figure>
      </div>
      <div className="rating">
        <Rating {...options} />
      </div>
    </div>
  );
};

export default ItemWomenRecomended;
