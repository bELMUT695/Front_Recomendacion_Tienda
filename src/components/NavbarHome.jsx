import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';
import './styles/NavbarHome.css'
class NavbarHome extends React.Component{

    render(){

        return(
        <>
         <section className="header sticky-top">
        <div className="containernavbar" >
          <div className="navbar">
                <div class="logo">
                    <a href="index.html">
                        <img src={Logo} alt=""  className="logo"/>
                    </a>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <Link className="nav-link" to="/login">
                        Iniciar session
                      </Link>
                    </ul>
                </nav>
                <a href="cart.html">

                    <img src="images/cart.png" alt="" width="30px" height="30px" />
                </a>
                <img src="images/menu.png" alt="" class="menu-icon" onclick="menutoggle()"/>
            </div>
            </div>
            </section>
          </>
        )
     }  
    
    }

export default NavbarHome;

