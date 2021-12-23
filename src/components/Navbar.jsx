import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
class Navbar extends React.Component{

    render(){

        return(
        <>
         <section className="header sticky-top">
          <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
             <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container">
                  <a className="navbar-brand" href="#">
                  <img src="./assets/img/platzi-logo.png" />
                   Conf Hawai
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                      <li className="nav-item">
                      <a className="nav-link" href="/menVendido">Prendas mas vendidas</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/menTodo">Prendas</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="/menRecomendado">Prendas Recomendadas</a>
                      </li>
                       
  
                      <Link className="btn btn-success" to="login">Iniciar Sesion</Link>
                                       
                  </ul>
                </div>
               </div>
             </nav>
            </div>
          </nav>
          </section>
          </>
        )
     }  
    
    }

export default Navbar;

