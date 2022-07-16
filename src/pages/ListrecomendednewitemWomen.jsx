import React, { useContext } from "react";
import ListItemWomen from "../container/ListNewItemWomen";
import AuthContext from "../contex/AuthContext";

const ListRecomendedNewItemWomen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosWomen">
      {auth ? <ListItemWomen /> : props.history.push("/login")}
    </div>
  );
};

export default ListRecomendedNewItemWomen;
