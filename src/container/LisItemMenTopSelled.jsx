import React from "react";
import ItemMen from "../components/ItemMen";
import "./style/ListitemWomen.scss";

const API =
  "https://back-tienda-electronica.herokuapp.com/api/clothe/gender/Male";
import ItemsWomen from "../hooks/useGetProductWomen";
import Loader from "../components/loader/Loader";
import Category from "../components/Categorys";
import { Link } from "react-router-dom";
import Buscador from "../components/BuscadorWomenItem";

const LisItemMenTopSelled = ({ product }) => {
  const a =  product.map((aa) => {const abv= aa[0]; return abv;});
  console.log('product********************', product[0]);
  console.log('a********************', a);

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
          
            {product.map((item) => (
              
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

export default LisItemMenTopSelled;
