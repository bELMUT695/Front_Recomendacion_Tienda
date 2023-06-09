import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import Navbar from "../components/NavbarHome";

import Category from "../components/Category-women";
import CategoryMen from "../components/Category-men";
import Footer from "../components/Footer";
import Carousel from "react-elastic-carousel";
import AuthContext from "../contex/AuthContext";
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
  const [state, setState] = useState(0);
  const [click, setClick] = useState(false);
  const [clickMen, setClickMen] = useState(false);
  const { auth } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  useEffect(() => {
    login();
  }, []);
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
          <div
            className="opciones"
            onMouseEnter={() => setClick(true)}
            onMouseLeave={() => setClick(false)}
          >
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
        <div
          className="opciones"
          onMouseEnter={() => setClickMen(true)}
          onMouseLeave={() => setClickMen(false)}
        >
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643497856/Cuerpo_Entero_Women/Home/03_64_ex84yk.jpg" />
          Hombres
        </div>
        <div className="opciones">
          <img src="https://res.cloudinary.com/sa-marcos/image/upload/v1643498431/Cuerpo_Entero_Women/Home/11_64_oqiza4.jpg" />
          ofertas
        </div>
      </Carousel>

      <div
        className="nav-options-women"
        onMouseEnter={() => setClick(true)}
        onMouseLeave={() => setClick(false)}
      >
        {click ? <Category /> : []}
      </div>

      <div
        className="nav-options-men"
        onMouseEnter={() => setClickMen(true)}
        onMouseLeave={() => setClickMen(false)}
      >
        {clickMen ? <CategoryMen /> : []}
      </div>

      <div className="App">
        <Carousel
          breakPoints={breakPoints}
          autoPlaySpeed={3000}
          enableAutoPlay={true}
          onNextEnd={(currentItem, pageIndex) => {
            setState(pageIndex);
            console.log(state);
          }}
          enableSwipe={false}
          itemPadding={[0, 2]}
          enableTilt={true}
          initialActiveIndex={state}
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
              <Link
                className="nav-det"
                to={auth ? "/women-top-list" : "/login"}
              >
                <div className="card-det">
                  <img className="img-pers-cat"
                    src="https://res.cloudinary.com/sa-marcos/image/upload/v1643506846/Cuerpo_Entero_Women/Home/triple_01_xl_na2p4n.jpg"
                    alt=""
                  />

                  <div className="continer-category-type">
                    <span className="card-title">MUJER</span>
                    <div className="details-card">
                      <div className="circle"></div>
                      <span className="title-ofert-add">
                        17 ofertas disponibles ahora mismo
                      </span>
                    </div>

                    <div className="details-card">
                      <div className="cruz-card">
                        <svg height="12px" width="12px" viewBox="0 0 12 12">
                          <path
                            d="M1 6H11"
                            stroke="#AAABB1"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M6 1L6 11"
                            stroke="#AAABB1"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </div>

                      <span className="title-ofert-add">
                        {" "}
                        4 nuevas ofertas empiezan mañana
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6">
              <Link className="nav-det" to={auth ? "/men-top-list" : "/login"}>
                <div className="card-det">
                  <img className="img-pers-cat"
                    src="https://images.ctfassets.net/8397t4ds1z4f/3lVMQ2dht9TISIixwuPA0M/b25f061a70dabdf9aece97aa11fa76c6/tryp_male.jpg?h=1000&w=800&q=50&fm=jpg"
                    alt=""
                  />

                  <div className="continer-category-type">
                    <span className="card-title">HOMBRE</span>
                    <div className="details-card">
                      <div className="circle"></div>
                      <span className="title-ofert-add">
                        15 ofertas disponibles ahora mismo
                      </span>
                    </div>
                    <div className="details-card">
                      <div className="cruz-card">
                        <svg height="12px" width="12px" viewBox="0 0 12 12">
                          <path
                            d="M1 6H11"
                            stroke="#AAABB1"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M6 1L6 11"
                            stroke="#AAABB1"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </div>
                      <span className="title-ofert-add">
                        4 nuevas ofertas empiezan mañana
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container-credicard">
        <h3 class="title-credi-card">Formas de pago</h3>
        <div class="credi-cart-container">
          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-mastercard.png"
              alt="MasterCard"
              class="sc-kafWEX jIDZms"
            />
          </div>

          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-visa.png"
              alt="Visa"
              class="sc-kafWEX jIDZms"
            />
          </div>

          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-amex.png"
              alt="American Express"
              class="sc-kafWEX jIDZms"
            />
          </div>

          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-caixa.png"
              alt="CaixaTem"
              class="sc-kafWEX jIDZms"
            />
          </div>

          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-discover.png"
              alt="Discover"
              class="sc-kafWEX jIDZms"
            />
          </div>
          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/store/posthaus/google-play-badge.svg"
              alt="Link para Google Play Store"
              class="sc-jtRfpW hbIeFo"
            />
          </div>
          <div class="credi-cart">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/store/posthaus/app-store-badge.svg"
              alt="Link para App Store"
              class="sc-jtRfpW hbIeFo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
