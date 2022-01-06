import React from 'react';
import  ItemWomen from '../components/ItemWomen'
import './style/ListitemWomen.scss'
const API='https://back-tienda-electronica.herokuapp.com/api/clothe/category1/female';
import ItemsWomen from '../hooks/useGetProductWomen';
import Category  from '../components/Category';
import Buscador from '../components/BuscadorWomenItem'
const ListItemWomen=()=>{

    const products=ItemsWomen(API)
    return (
      <div className="wrap">
        
        <div className="store-wrapper">
          <div className="category_list">
          <div className="filter-category">
                    <img src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-filter.svg" alt="icon-filter" style={{width: '25px'}}/>
                    <p>FILTRAR</p>
                </div>  
           <div className="menu-category">
           <Category/> 
          </div>       
        
          </div>
          <section className="main-container-women">
            <div className="Buscador-women">
            <Buscador/>
            </div> 
            <div className="ProductListWomen">
              {products.map((item) =>
                item.gender == "Female" ? (
                  <ItemWomen product={item} key={item.id} />
                ) : null
              )}
            </div>
          </section>
        </div>
      </div>
    );

    
			
			
				
			
}

export default ListItemWomen;