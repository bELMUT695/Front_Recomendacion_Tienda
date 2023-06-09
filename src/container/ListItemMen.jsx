import React from "react";
import ItemMen from "../components/ItemMen";
import "./style/ListItemMen.scss";
import Loader from "../components/loader/Loader";
import ItemsMen from "../hooks/useGetProductMen";
import Category from "../components/Categorys";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";

const API =
  "http://localhost:3001/api/clothe/topselling/categorys";

const ListItemMen = () => {
  const { products, isLoading } = ItemsMen(API);
  console.log(products);
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

        <section className="main-container-men">
          <div className="Buscador-men">
            <Buscador />
          </div>
          <div className="ProductListMen">
            {products.map((product) =>
              product[0].gender == "Male" ? (
                <Link
                  to={`/select-product/${product[0]._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ItemMen product={product[0]} key={product[0].id} />
                </Link>
              ) : null
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListItemMen;
