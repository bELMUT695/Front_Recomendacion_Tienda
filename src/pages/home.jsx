import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import Navbar from "../components/NavbarHome";
import header1 from "./images/header-1.png";
import Footer from "../components/Footer";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const breakPointsOptions = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
const Home = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <Navbar />

      <Carousel
        breakPoints={breakPointsOptions}
        pagination={false}
        showArrows={false}
        className="HeaderCarrusel"
      >
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497558/Cuerpo_Entero_Women/Home/01_64_febzef.jpg" />
          Mujeres
        </div>
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497631/Cuerpo_Entero_Women/Home/06_64_gnvjqh.jpg" />
          niñas
        </div>
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497730/Cuerpo_Entero_Women/Home/05_64_whnbc7.jpg" />
          niños
        </div>
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497856/Cuerpo_Entero_Women/Home/03_64_ex84yk.jpg" />
          Hombres
        </div>
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643498431/Cuerpo_Entero_Women/Home/11_64_oqiza4.jpg" />
          ofertas
        </div>
      </Carousel>
      <div className="App">
        <Carousel
          breakPoints={breakPoints}
          autoPlaySpeed={3000}
          enableAutoPlay={true}
          onNextEnd={(currentItem, { pageIndex }) => {}}
        >
          <img
            className="itemCarrusel"
            src="https://ph-cdn3.ecosweb.com.br/Web/posthaus/banner_JS/0_0_100207089_1_1600.jpg"
          />

          <img
            className="itemCarrusel"
            src="https://ph-cdn3.ecosweb.com.br/Web/posthaus/banner_JS/0_0_100207089_2_1600.jpg"
          />

          <img
            className="itemCarrusel"
            src="https://ph-cdn3.ecosweb.com.br/Web/posthaus/banner_JS/0_0_100207089_1_1600.jpg"
          />
        </Carousel>
      </div>

      <div className="titulo2Home">Nuevos looks todos los días</div>

      <div className="titulo3Home">Tu día, tu estilo</div>

      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link className="nav-link" to="/women-top-list">
                <div className="card">
                  <img
                    src="https://images.ctfassets.net/8397t4ds1z4f/fkh0inIdTG638XTza7LMz/d344f21244f906309098c10dd5b70a3b/tryp_female.jpg?h=1000&w=800&q=50&fm=jpg"
                    alt=""
                  />

                  <h5 class="card-title">Clothe Women</h5>
                </div>
              </Link>
            </div>

            <div className="col-md-6">
              <Link className="nav-link" to="/men-top-list ">
                <div className="card">
                  <img
                    src="https://images.ctfassets.net/8397t4ds1z4f/3lVMQ2dht9TISIixwuPA0M/b25f061a70dabdf9aece97aa11fa76c6/tryp_male.jpg?h=1000&w=800&q=50&fm=jpg"
                    alt=""
                  />

                  <h5 class="card-title">Clothe Men</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
