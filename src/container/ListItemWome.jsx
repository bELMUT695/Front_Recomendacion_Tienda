import React from "react";
import ItemWomen from "../components/ItemWomen";
import "./style/ListitemWomen.scss";
const API =
  "https://back-tienda-electronica.herokuapp.com/api/clothe/gender/Female";
import ItemsWomen from "../hooks/useGetProductWomen";
import Loader from "../components/loader/Loader";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";
import { useState } from "react";
const ListItemWomen = () => {
  const [isLoading, SetLoading] = useState(true);
  const products = ItemsWomen(API);
  if (products) {
    SetLoading(false);
  }
  if (isLoading) {
    <Loader />;
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
            {products.map((item) =>
              item.gender == "Female" ? (
                <Link
                  to={`/women-top-list/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ItemWomen product={item} key={item.id} />
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
