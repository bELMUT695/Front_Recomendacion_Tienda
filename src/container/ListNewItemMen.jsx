import React, { useContext } from "react";
import ItemMen from "../components/ItemMen";
import "./style/ListitemWomen.scss";
import useGetNewItemMen from "../hooks/useGetNewItemMen";
import Loader from "../components/loader/Loader";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";
import AuthContext from "../contex/AuthContext";

const ListItemWomen = () => {
  const { auth } = useContext(AuthContext);
  const { listItemMen, isLoading } = useGetNewItemMen(auth.user.id);

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
          <div className="menu-category">
            <Category />
          </div>
        </div>

        <section className="main-container-women">
          <div className="Buscador-women">
            <Buscador />
          </div>
          <div className="ProductListWomen">
            {listItemMen.map((item) =>
              item[0].gender == "Male" ? (
                <Link
                  to={`/select-product/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ItemMen product={item[0]} key={item[0].id} />
                </Link>
              ) : null
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListItemWomen;
