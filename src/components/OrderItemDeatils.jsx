import React from 'react';
import './styles/OrderDetailsWomen.scss'
const OrderItem=({ product })=>{
    return(
       <div className='container-order-details'>
           <div className='content-order-item'>
             <div className='content-iamgen-order'>
              <img src={product[0].image[0].URL} alt="" />     
            </div>  
             <div className='order-clothe-details'>
                {
                    product[0].description
                }
                 
             </div>


           </div>
      
       </div>
    );
}

export default OrderItem;
