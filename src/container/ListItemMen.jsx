import React from 'react';
import  ItemMen from '../components/ItemMen';
import './style/ListItemMen.scss';

const ListItemMen=()=>{
  return(
    <section className="main-container">
      <div className="ProductList">
        <ItemMen/>
      </div>
	  </section>
  );
}

export default ListItemMen;