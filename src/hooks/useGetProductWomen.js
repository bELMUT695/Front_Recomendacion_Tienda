import { useState, useEffect } from "react";
import axios from "axios";

const useGetProductWomen = (API) => {
  const [isLoading, SetLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data.data);
    console.log(response.data.data);
    SetLoading(false);
  }, []);

  return { products, isLoading };
};

export default useGetProductWomen;
