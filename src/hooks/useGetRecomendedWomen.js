import React, { useState, useEffect } from "react";
import axios from "axios";
import useSingleWomen from "./useSingleWome";
const useGetRecomendedWomen = () => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  useEffect(async () => {
    const response = await axios("http://localhost:3001/api/rating");
    console.log(response.data.data);

    setListItemWomem(response.data.data, "FFF");
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading };
};

export default useGetRecomendedWomen;
