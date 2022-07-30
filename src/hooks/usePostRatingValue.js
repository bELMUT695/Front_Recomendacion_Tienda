import { useState, useEffect } from "react";
import axios from "axios";

const usePostValueItem = async (id, objectInsert) => {
  const response = await axios.post(
    `http://localhost:3001/api/rating/insert-rating/${id}`,
    objectInsert
  );
  console.log(response);
  return response;
};

export default usePostValueItem;
