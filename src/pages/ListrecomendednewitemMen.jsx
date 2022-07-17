import React, { useContext } from "react";
import ListItemMen from "../container/ListNewItemMen";
import AuthContext from "../contex/AuthContext";

const ListRecomendedNewItemMen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosMen">
      {auth ? <ListItemMen /> : props.history.push("/login")}
    </div>
  );
};

export default ListRecomendedNewItemMen;
