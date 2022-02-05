import React from "react";
import ListItemMen from "../container/ListItemMen";
import AuthContext from "../contex/AuthContext";
const ListMen = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="listArticulosWomen">
      {auth ? <ListItemMen /> : props.history.push("/login")}
    </div>
  );
};

export default ListMen;
