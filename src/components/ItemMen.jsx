import React, { useState, useEffect } from "react";
import { Rating } from "@material-ui/lab";
import "./styles/ItemMen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ItemMen = ({ product }) => {

  const options = {
    value: 3,
    readOnly: true,
    precision: 0.5,
  };


  return (
    <div className="ProductItem">
      {
        product.image.map((number) =>
          <img className="Image"
            src={number.URL}
            alt="{logo}"
          />
        )
      }
      <div className="product-info">
        <div>
          <p>${product.unitPrice}</p>
          <p>{product.name}</p>
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

export default ItemMen;