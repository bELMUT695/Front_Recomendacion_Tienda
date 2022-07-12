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
    }

    const valueMediaRating = acumladorRating / response.data.data.length;
    const nratingclotes = response.data.data.length;
    setListItemWomem(valueMediaRating);
    setRating(nratingclotes);

    SetLoading(false);
  }, []);

  return { listItemWomem, isLoading, nrating };
};

export default useGetRatingByClothe;
