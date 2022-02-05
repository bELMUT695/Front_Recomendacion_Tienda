import React, { useContext } from "react";
import ListItemWomen from "../container/ListItemWome";
import AuthContext from "../contex/AuthContext";

const ListWomen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosWomen">
      {auth ? <ListItemWomen /> : props.history.push("/login")}
    </div>
  );
};

export default ListWomen;
