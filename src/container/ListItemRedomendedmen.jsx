import React, { useContext } from "react";
import useGetRecomendedMen from "../hooks/useGetRecomendedMen";
import ItemMen from "../components/ItemMen";
import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";
import AuthContext from "../contex/AuthContext";

const ListItemRedomendedmen = () => {
  const { auth } = useContext(AuthContext);

  console.log(auth.user.id, "FFFFFFFFFFSDFW");

  const { listItemWomem, isLoading } = useGetRecomendedMen(auth.user.id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="wrap">
      <div className="store-wrapper">
        <div className="category_list">
          <div className="filter-category">
            <img
              src="https://ph-cdn3.ecosweb.com.br/imagens01/pwa/assets/icons/ic-filter.svg"
              alt="icon-filter"
              style={{ width: "25px" }}
            />
            <p>FILTRAR</p>
          </div>
          <div className="menu-category"></div>
        </div>

        <section className="main-container-women">
          <div className="Buscador-women">
            <Buscador />
          </div>
          <div className="ProductListWomen">
            {listItemWomem.map((item) => (
              <Link
                to={`/select-product/${item[0]._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ItemMen product={item[0]} key={item[0].id} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListItemRedomendedmen;
