import React from "react";
import "./styles/Category-women.scss";
const Category = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Polos</a>
        </li>
        <li>
          <a href="/">Camisas</a>
        </li>
        <li>
          <a href="/">Shorts</a>
        </li>
        <li>
          <a href="/">Pantalones</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
      <div>
        <img
          className="img-nav-women-option"
          src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/store/posthaus/img-categorias_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Category;
