import React, { useContext } from "react";
import ListItemRedomendedmen from "../container/ListItemRedomendedmen";

import AuthContext from "../contex/AuthContext";

const Listrecomendedmen = (props) => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      {auth ? <ListItemRedomendedmen /> : props.history.push("/login")}
    </div>
  );
};

export default Listrecomendedmen;