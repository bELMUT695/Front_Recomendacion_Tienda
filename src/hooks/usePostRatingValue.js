import { useState, useEffect } from "react";
import axios from "axios";
import { serverURL } from "../utils/routing";
const usePostValueItem = async (id, objectInsert) => {
  const response = await axios.post(
    `${serverURL}/api/rating/insert-rating/${id}`,
    objectInsert
  );
  console.log(response);
  return response;
};

export default usePostValueItem;
