import React, { useState, useEffect } from "react";
import axios from "axios";
const API = "http://localhost:3001/api/clothe/user/clothe";
const useGetRecomendedMen = (id) => {
  const [listItemMen, setListItemMen] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  useEffect(async () => {
    const response = await axios(
      `http://localhost:3001/api/clothe/user/clothe/${id}`
    );
    console.log(response.data.data);

    setListItemMen(response.data.data);
    SetLoading(false);
  }, []);

  return { listItemMen, isLoading };
};

export default useGetRecomendedMen;
