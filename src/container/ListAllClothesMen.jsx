import React from "react";
import ItemMen from "../components/ItemMen";
import "./style/ListitemWomen.scss";
import { useAllClothesWomen } from "../hooks/useSingleWome";
import Loader from "../components/loader/Loader";
import Category from "../components/Categorys";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";

const ListItemMen = () => {
  const { isLoading, allClothesWomen } = useAllClothesWomen();
  console.log(allClothesWomen);
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
            {allClothesWomen.map((item) =>
              item.gender == "Male" ? (
                <Link
                  to={`/select-product/${item._id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ItemMen product={item} key={item.id} />
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
