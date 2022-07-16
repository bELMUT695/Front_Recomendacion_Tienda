import React from "react";

const componenterer = ({ product }) => {
  return (
    <>
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
    </>
  );
};

export default componenterer;
