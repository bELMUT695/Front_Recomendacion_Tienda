import React, { useState, useEffect } from "react";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import "./styles/ItemMen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ItemMen = () => {

  const options = {
    value: 3,
    readOnly: true,
    precision: 0.5,
  };

  /*const [clothes, setClothes] = useState([]);

  useEffect(() => {

    const consultaAPI = async () => {
      const respuesta = await axios({
        method: 'GET',
        url:'https://back-tienda-electronica.herokuapp.com/api/clothe/',      
        headers: {'Content-Type': 'application/json'},                
      });
 
      setClothes(respuesta);
    };

    consultaAPI();
  }, []);

  console.log(clothes);*/

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

export default ItemMen;
