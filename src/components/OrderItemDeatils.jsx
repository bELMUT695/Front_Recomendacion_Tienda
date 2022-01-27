import React from 'react';
import './styles/OrderDetailsWomen.scss'

import ReactStars from "react-rating-stars-component";

const OrderItem=({ product })=>{

  const options = {
    edit: true,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 15 : 30,
    value: 3,
    isHalf: false,
  };


  return(
    <div className='container-order-details'>
      <div className='content-order-item'>

        <div className='content-iamgen-order'>
          <img src={product[0].image[0].URL} alt="" />   
          
        </div>  

        <div className='order-clothe-details'>
          <span><b>{product[0].name}</b></span> <br /><br /><br />
          
          {
            product[0].description
          } <br /><br /><br />

          <span>${product[0].unitPrice}</span> <br /><br /><br />

          <button class="button-55" role="button">Agregar al carrito</button><br /><br /><br />
          
          
          <ReactStars {...options} />{" "}
        </div>

      </div> 
    </div>
  );
}

export default OrderItem;
