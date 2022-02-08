import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetRatingByClothe = (id) => {
  const [listItemWomem, setListItemWomem] = useState([]);
  const [nrating, setRating] = useState(0);
  const [isLoading, SetLoading] = useState(true);
  useEffect(async () => {
    const response = await axios(
      `https://back-tienda-electronica.herokuapp.com/api/rating/value-rating/${id}`
    );

    let acumladorRating = 0;
    for await (const item of response.data.data) {
      acumladorRating += item.RATING;
      console.log(acumladorRating);
    }
    console.log(response.data.data);
    const valueMediaRating = acumladorRating / response.data.data.length;

    setListItemWomem(valueMediaRating);
    setRating(response.data.data.length);
    console.log(valueMediaRating);
    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading, nrating };
};

export default useGetRatingByClothe;
