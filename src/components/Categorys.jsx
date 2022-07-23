import React from "react";
import "./styles/Category.scss";
import { Link } from "react-router-dom";
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
          <Link to="/men-top-list/category/2">Polos</Link>
        </li>
        <li>
          <Link to="/men-top-list/category/3">Camisas</Link>
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
    </div>
  );
};

export default Category;
