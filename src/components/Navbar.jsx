import React from 'react';
import './styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from './assets/logos/logo.jpg'
import menu from './assets/icons/icon_menu.svg'
import './styles/NavbarHome.css';
import shoppingCart from './assets/icons/icon_shopping_cart.svg';
class Navbar extends React.Component{

    render(){

        return(
          <nav className="header sticky-top">
            <img src={menu} alt="menu" className="menu" />

            <div className="navbar-left">
               
              <img src={logo} alt="logo" className="logo-nav" />

              <ul>
                <li>
                  <a >best selling clothes</a>
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
                <li className="navbar-email" >
                 @example.com
                </li>
                <li
                  className="navbar-shopping-cart"
                 
                >
                  <Link  to="/login">
                        Iniciar session
                  </Link>
               
                </li>
                <li
                  className="navbar-shopping-cart"
                 
                >
                  <img src={shoppingCart} alt="shopping cart" />
               
                </li>
              </ul>
            </div>
           
          </nav>
        );
     }  
    
    }

export default Navbar;

