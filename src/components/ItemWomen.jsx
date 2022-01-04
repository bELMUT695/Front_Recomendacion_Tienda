import React from "react";
import { Rating } from "@material-ui/lab";
import "./styles/ItemWomen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ItemWomen = () => {
    const options = {
        value: 3,
        readOnly: true,
        precision: 0.5,
      };
  return (
    <div className="ProductItem">
      <img
        src="https://res.cloudinary.com/sa-marcos/image/upload/v1639111832/Medio_Cuerpo_Women/Blusas/blusa-manga-morcego-vinho_345708_1000_1_m11uaq.jpg"
        alt="{lgo}"
      />
      <div className="product-info">
        <div>
          <p>$140</p>
          <p>Blusa flofral de cintura negra con volantes</p>
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

export default ItemWomen;
