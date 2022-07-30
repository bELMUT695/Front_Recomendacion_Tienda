import React, { useContext } from "react";
import ListItemWomen from "../container/ListAllClothesWomen";
import AuthContext from "../contex/AuthContext";

const AllListWomen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosWomen">
      {auth ? <ListItemWomen /> : props.history.push("/login")}
    </div>
  );
};

export default AllListWomen;
