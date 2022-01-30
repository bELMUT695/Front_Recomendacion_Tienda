import React, { useState, useContext } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "./assets/logos/logo.jpg";
import menu from "./assets/icons/icon_menu.svg";
import shoppingCart from "./assets/icons/icon_shopping_cart.svg";
import UserContext from "../contex/CartContext";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const { stateCart } = useContext(UserContext);
  const handleClick = () => setClick(!click);

  return (
    <nav
      header
      sticky-top
      className={
        click ? "nav-women1  header sticky-top " : "nav-women header sticky-top"
      }
    >
      <div onClick={handleClick}>
        <img src={menu} alt="menu" className="menu" />
      </div>

      <img src={logo} alt="logo" className="logo-nav" />

      <div className={click ? "navbar-left active" : "navbar-left"}>
        <ul>
          <li>
            <a href="/women-top-list">best selling clothes</a>
          </li>
          <li>
            <a href="/all-clothes">AllClothes</a>
          </li>
          <li>
            <a href="/recommended-clothe">Recommended Clothes</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">@example.com</li>
          <li className="navbar-shopping-cart">
            <Link to="/login">Iniciar session</Link>
          </li>
          <Link to="/cola-de-compras">
            <li className="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              {stateCart.initialCart.length > 0 ? (
                <div>{stateCart.initialCart.length}</div>
              ) : null}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
