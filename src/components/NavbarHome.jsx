import React from 'react';

import { Link } from 'react-router-dom';
import logo from './assets/logos/logo.jpg'
import menu from './assets/icons/icon_menu.svg'

class NavbarHome extends React.Component{

    render(){

        return (
          <nav className="header sticky-top">
             <div  >
            <img src={menu} alt="menu" className="menu" />
            </div>
          
            <img src={logo} alt="logo" className="logo-nav" />
            

            <div className="navbar-left">
           

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
              </ul>
            </div>
           
          </nav>
        );
     }  
    
    }

export default NavbarHome;

