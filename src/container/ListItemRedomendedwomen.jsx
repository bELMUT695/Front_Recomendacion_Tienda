import React from "react";
import useGetRecomendedWomen from "../hooks/useGetRecomendedWomen";
import ItemWomen from "../components/ItemWomen";
import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";
const ListItemRedomendedwomen = () => {
  const { listItemWomem, isLoading } = useGetRecomendedWomen();

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
                to={`/women-top-list/${item[0]._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ItemWomen product={item[0]} key={item[0].id} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListItemRedomendedwomen;
