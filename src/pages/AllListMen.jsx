import React, { useContext } from "react";
import ListItemMen from "../container/ListAllClothesMen";
import AuthContext from "../contex/AuthContext";

const AllListMen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosWomen">
      {auth ? <ListItemMen /> : props.history.push("/login")}
    </div>
  );
};

export default AllListMen;
