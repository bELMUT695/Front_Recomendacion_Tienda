import React, { useState, useEffect } from "react";
import axios from "axios";

import { serverURL } from "../utils/routing";
const useGetRecomendedWomen = (id) => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  useEffect(async () => {
    const response = await axios(`${serverURL}/api/clothe/user/clothe/${id}`);
    console.log(response.data.data);

    setListItemWomem(response.data.data);
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading };
};

export default useGetRecomendedWomen;
