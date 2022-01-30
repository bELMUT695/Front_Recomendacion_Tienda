import React from "react";
import "./styles/NotFoundProduct.scss";
const NotFoundProduct = () => {
  return (
    <div>
      <div className="Cart-empty">
        <svg viewBox="0 0 225 225">
          <g fill="none" fill-rule="evenodd" transform="translate(0 -17)">
            <ellipse cx="114" cy="211" fill="#393939" rx="56" ry="2"></ellipse>
            <path
              d="M112.5 242c62.132 0 112.5-50.368 112.5-112.5S174.632 17 112.5 17 0 67.368 0 129.5 50.368 242 112.5 242z"
              fill="#124983"
              opacity="0.053"
            ></path>
            <path
              d="M166 82l-17 19M69 108.5L48.5 94"
              opacity="0.08"
              stroke="#124983"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path d="M189 71l-19 17" fill="#124983" opacity="0.08"></path>
            <g stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M118 95V81M93 97L81 84"
                opacity="0.08"
                stroke="#124983"
                stroke-width="2"
              ></path>
              <path
                d="M17.5 157H32M25 150v14"
                opacity="0.03"
                stroke="#a7a9ac"
                stroke-width="4"
              ></path>
              <path
                d="M66.78 71.076l-4.95-4.95 4.95 4.95-5.303 5.304zm0 0l4.95-4.95-4.95 4.95 4.95 4.95zM146.5 68.5v-7 7H139zm0 0h7-7v7z"
                opacity="0.27"
                stroke="#124983"
                stroke-width="4"
              ></path>
            </g>
            <circle
              cx="186"
              cy="63"
              opacity="0.27"
              r="6"
              stroke="#124983"
              stroke-width="4"
            ></circle>
            <circle
              cx="34"
              cy="86"
              fill="#124983"
              opacity="0.27"
              r="2"
            ></circle>
            <text
              fill="#124983"
              font-family=".SFNSDisplay, .SF NS Display"
              font-size="72"
              opacity="0.27"
            >
              <tspan x="94" y="70">
                ?
              </tspan>
            </text>
            <path
              d="M154.013 121.595c-.36-5.254-4.155-9.095-8.673-9.095 0 0-24.788 3.393-33.34 3.393S79.866 112.5 79.866 112.5c-4.518 0-8.313 4.043-8.674 9.095 0 0 1.201 15.303 0 29.923s-6.144 44.865-6.144 44.865c-.543 5.861 3.614 11.117 8.673 11.117h77.401c5.241 0 9.216-5.054 8.855-11.117 0 0-2.058-9.027-2.977-20.55-1.07-13.406-2.987-54.238-2.987-54.238z"
              fill="#fff"
              stroke="#124983"
              stroke-width="4"
            ></path>
            <circle cx="93.75" cy="126.583" fill="#f3f3f3" r="6.25"></circle>
            <circle cx="132.917" cy="126.583" fill="#f3f3f3" r="6.25"></circle>
            <path
              d="M93 128c0 23.196 8.954 42 20 42s20-18.804 20-42"
              stroke="#124983"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            ></path>
          </g>
        </svg>
      </div>
      <h3 className="Empty-title">Esta Vacia</h3>
      <p className="Empty-paraffo">
        Todavía no ha agregado artículos a su bolsa de compras.
      </p>
      <div className="Position-botton">
        <button className="Not-found-product">Ir a comprar</button>
      </div>
    </div>
  );
};

export default NotFoundProduct;
