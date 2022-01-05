import React from 'react';
import  ItemWomen from '../components/ItemWomen'
import './style/ListitemWomen.scss'
const API='http://localhost:3001/api/clothe/category1/Female';
import ItemsWomen from '../hooks/useGetProductWomen';
const ListItemWomen=()=>{

    const products=ItemsWomen(API)
    return(
    <section className="main-container">
        <div className="ProductList">
        {products.map(item => (
        <ItemWomen product={item} key={item.id}/>
        ))}
     </div>
	</section>

    );

    
			
			
				
			
}

export default ListItemWomen;