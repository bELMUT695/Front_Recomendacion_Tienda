import React, { useContext } from "react";
import "./styles/OrderDetailsWomen.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import UserContext from "../contex/CartContext";

const OrderItem = ({ product }) => {
  const { addToCart } = useContext(UserContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  const options = {
    edit: true,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 15 : 30,
    value: 3,
    isHalf: false,
  };

  return (
    <div className="container-order-details">
      <div className="content-order-item">
        <div className="content-iamgen-order">
          <img src={product[0].image[0].URL} alt="" />
        </div>

        <div className="order-clothe-details">
          <div className="titleDetails">
            <div>{product[0].name}</div>
            <label className="unitPrice">${product[0].unitPrice}</label>
          </div>
          <div className="titleDescritption">
            <h1 className="product-description">Descripción</h1>
            <div>{product[0].description}</div>
          </div>
          <button
            class="button-55"
            role="button"
            onClick={() => handleClick(product)}
          >
            Agregar al carrito
          </button>
          <div className="share-favorite">
            <div className="share-and-favorite">
              <FontAwesomeIcon icon={faHeart} className="img3" />
              Favorito
            </div>
            <div className="share-and-favorite">
              <FontAwesomeIcon icon={faShareAlt} className="img3" />
              compartir
            </div>
          </div>
          <br />
          <br />
          <br />
          <ReactStars {...options} />{" "}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
