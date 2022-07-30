import React, { useState } from "react";
import axios from "axios";
const useInitialAuth = () => {
  const [auth, setAuth] = useState(null);
  const [usercoldstart, setUserColdStart] = useState(null);

  const login = async (payload) => {
    const response = await axios(
      //`https://back-tienda-electronica.herokuapp.com/api/rating/${id}`
      `http://localhost:3001/api/rating/consultrating/${payload.user.id}`
    );
    console.log(payload.user.id);
    console.log(response.data.message);
    setAuth(payload);
    setUserColdStart(response.data.message);
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
