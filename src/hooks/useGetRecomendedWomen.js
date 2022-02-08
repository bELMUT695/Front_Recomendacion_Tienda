import React, { useState, useEffect } from "react";
import axios from "axios";
const useGetRecomendedWomen = (id) => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  useEffect(async () => {
    const response = await axios(
      `https://back-tienda-electronica.herokuapp.com/api/rating/${id}`
    );
    console.log(response.data.data);

    setListItemWomem(response.data.data);
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading };
};

export default useGetRecomendedWomen;
