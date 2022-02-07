import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import Navbar from "../components/NavbarHome";
import Loader from "../components/loader/Loader";
import Category from "../components/Category-women";
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
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <Loader />
    </>
  );
};

export default Home;
