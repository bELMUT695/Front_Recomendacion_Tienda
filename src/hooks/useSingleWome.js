import React, { useState, useEffect } from "react";
import axios from "axios";
const API = "https://back-tienda-electronica.herokuapp.com/api/clothe/";

export const useSingleWomen = (id) => {
  const [itemWomem, setItemWomen] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await axios(
      //`https://back-tienda-electronica.herokuapp.com/api/clothe/${id}`
      `http://localhost:3001/api/clothe/${id}`
    );

    setItemWomen(response.data.data);
    console.log(response.data.data);
    setIsLoading(false);
  }, []);

  return { isLoading, itemWomem };
};

export const useFilterforCategory = (id) => {

  console.log("holi dentro", id);
  const [resultfilter, setResulfilter] = useState({});
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);

  useEffect(async () => {
    const response = await axios(
      `http://localhost:3001/api/clothe/topselling/category/${id}`
    );

    setResulfilter(response.data.data);
    console.log(response.data.data);
    console.log("Holer", resultfilter);
    setIsLoadingCategory(false);
  }, []);

  return { isLoadingCategory, resultfilter };
};

export const useAllClothesWomen = () => {
  const [allClothesWomen, setAllClothesWomen] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await axios(`http://localhost:3001/api/clothe`);

    setAllClothesWomen(response.data.data);
    console.log(response.data.data);
    console.log(isLoading);
    setIsLoading(false);
  }, []);

  return { isLoading, allClothesWomen };
};
