import React from 'react'
import { Link } from 'react-router-dom';
import './styles/home.css'
import Navbar from '../components/NavbarHome'
import header1 from './images/header-1.png';
import Footer from '../components/Footer'
class Home extends React.Component{

 render(){
  
  
    return(
      <>
        
          <Navbar/>
            <main >
                <section id="hero">
                    <div className="hero container--md">
                         <div className="hero__content">
                              <h3 className="Titulo1Home">TOP COLLECTION</h3>
                                  <h1 className="Titulo1Home">New Design 2021</h1>
                                        <p>
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
                                           eaque atque officia, architecto fugit?
                                          </p>
                                          <a href="/#" className="btn btn--filled">SHOP NOW &rarr;</a>
                                        </div >
                                            <img
                                              className="hero__img"
                                              src={header1}
                                              alt="hero"
                                                />
                                      </div>
                                    </section>                                     
                         </main >
                         <div className="titulo2Home">
                         Nuevos looks todos los días 
                         </div>
                         <div className="titulo3Home">
                         Tu día, tu estilo
                         </div>
                          <div className="overlay">
                              <div className="container">          
                                    <div className="row">
                                   
                                      <div className="col-md-6">
                                         <Link className="nav-link" to="/women-top-list">
                                            <div className="card">
                                              <img src="https://images.ctfassets.net/8397t4ds1z4f/fkh0inIdTG638XTza7LMz/d344f21244f906309098c10dd5b70a3b/tryp_female.jpg?h=1000&w=800&q=50&fm=jpg"  alt="" />
                                           
                                              <h5 class="card-title">Clothe Women</h5>
                        
                                            
                                            </div>         
                                          </Link>
                                      </div> 
                                      
                                        <div className="col-md-6">
                                           <Link className="nav-link" to="/menVendido ">
                                            <div className="card">
                                              <img src="https://images.ctfassets.net/8397t4ds1z4f/3lVMQ2dht9TISIixwuPA0M/b25f061a70dabdf9aece97aa11fa76c6/tryp_male.jpg?h=1000&w=800&q=50&fm=jpg"  alt="" />
                                          
                                              <h5 class="card-title">Clothe Men</h5>
                                            </div>
                                            
                                           </Link>                       
                                        </div>
                                    </div>
                                  </div>                
                        </div>
                   
                           
        
             
           <Footer />
        </>
    )
 }  
}

export default Home;