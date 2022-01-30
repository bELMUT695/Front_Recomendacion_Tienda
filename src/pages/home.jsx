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
        <Link
          className="nav-link"
          to="/women-top-list"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="opciones">
            <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497558/Cuerpo_Entero_Women/Home/01_64_febzef.jpg" />
            Mujeres
          </div>
        </Link>
        <Link
          className="nav-link"
          to="/ninas-top-list"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="opciones">
            <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497631/Cuerpo_Entero_Women/Home/06_64_gnvjqh.jpg" />
            niñas
          </div>
        </Link>
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
          enableSwipe={false}
          itemPadding={[0, 2]}
          enableTilt={true}
        >
          <img
            className="itemCarrusel"
            src="https://res.cloudinary.com/sa-marcos/image/upload/v1643503999/Cuerpo_Entero_Women/Home/Teaser2-xl_sqnmhd.jpg"
          />

          <img
            className="itemCarrusel"
            src="https://res.cloudinary.com/sa-marcos/image/upload/v1643504169/Cuerpo_Entero_Women/Home/Teaser3-xl_akhuky.jpg"
          />

          <img
            className="itemCarrusel"
            src="https://res.cloudinary.com/sa-marcos/image/upload/v1643504221/Cuerpo_Entero_Women/Home/Teaser1-xl_d2rxwo.jpg"
          />
          <img
            className="itemCarrusel"
            src="https://res.cloudinary.com/sa-marcos/image/upload/v1643504263/Cuerpo_Entero_Women/Home/01_Mainteaser_Extrasale_01_DE-xl_rxatzb.jpg"
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
                    src="https://res.cloudinary.com/sa-marcos/image/upload/v1643506846/Cuerpo_Entero_Women/Home/triple_01_xl_na2p4n.jpg"
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
