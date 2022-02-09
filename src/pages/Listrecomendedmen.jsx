import React, { useContext } from "react";
import ListItemRedomendedwomen from "../container/ListItemRedomendedwomen";

import AuthContext from "../contex/AuthContext";

const Listrecomendedwomen = (props) => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      {auth ? <ListItemRedomendedwomen /> : props.history.push("/login")}
    </div>
  );
};

export default Listrecomendedwomen;