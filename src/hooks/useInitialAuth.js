import React, { useState } from "react";
import axios from "axios";
import { loadFromLocalStorage } from "./useLocalStorage";
import { useHistory } from "react-router-dom";
import { serverURL } from "../utils/routing";
const useInitialAuth = () => {
  const [auth, setAuth] = useState(null);
  const [usercoldstart, setUserColdStart] = useState(null);
  const history = useHistory();

  const login = async (props) => {
    const payload = loadFromLocalStorage();

    if (payload) {
      const response = await axios(
        //`https://back-tienda-electronica.herokuapp.com/api/rating/${id}`
        `${serverURL}/api/rating/consultrating/${payload.user.id}`
      );
      setUserColdStart(response.data.message);
      console.log(response.data.message);
      console.log(payload, "loadd");
      setAuth(payload);
      return payload;
    } else {
      setAuth(null);
    }
    return false;
  };

  return {
    auth,
    login,
    setAuth,
    usercoldstart,
    setUserColdStart,
  };
};

export default useInitialAuth;
