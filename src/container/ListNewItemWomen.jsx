import React, { useContext } from "react";
import ItemWomen from "../components/ItemWomen";
import "./style/ListitemWomen.scss";
import useGetNewItemWomen from "../hooks/useGetNewItemWomen";
import Loader from "../components/loader/Loader";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";
import AuthContext from "../contex/AuthContext";

const ListItemWomen = () => {
  const { auth } = useContext(AuthContext);
  const { listItemWomem, isLoading } = useGetNewItemWomen(auth.user.id);

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
            {listItemWomem.map((item) =>
              item[0].gender == "Female" ? (
                <Link
                  to={`/select-product/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ItemWomen product={item[0]} key={item[0].id} />
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
