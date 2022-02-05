import React, { useState } from "react";

const useInitialAuth = () => {
  const [auth, setAuth] = useState(null);

  const login = (payload) => {
    setAuth(payload);
  };

  return {
    auth,
    login,
    setAuth,
  };
};

export default useInitialAuth;
