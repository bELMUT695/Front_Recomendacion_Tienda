import React, { useContext } from "react";
import Loader from "../components/loader/Loader";
import LisItemMenTopSelled from "../container/LisItemMenTopSelled";
import AuthContext from "../contex/AuthContext";
import { useParams } from "react-router-dom";
import { useFilterforCategory } from "../hooks/useSingleWome";
const ListCategoryMen = (props) => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);
  const { isLoadingCategory, resultfilter } = useFilterforCategory(id);
  console.log("holi", resultfilter);
  console.log("holi", id);
  if (isLoadingCategory || !resultfilter) {
    console.log("HHHHHHHHHH");
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div className="listArticulosWomen">
      {auth ? (
        <LisItemMenTopSelled product={resultfilter} />
      ) : (
        props.history.push("/login")
      )}
    </div>
  );
};

export default ListCategoryMen;
