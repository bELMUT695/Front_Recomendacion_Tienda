import React, { useContext } from "react";
import "./styles/NavHome.scss";
import { Link } from "react-router-dom";
import logo from "./assets/logos/logo.jpg";
import menu from "./assets/icons/icon_menu.svg";

import AuthContext from "../contex/AuthContext";
const NavbarHome = () => {
  const { auth } = useContext(AuthContext);
  const { login } = useContext(AuthContext);

  const logout = async () => {
    localStorage.removeItem("stateSerializer");
    const res = await login();
  };
  return (
    <nav className="header sticky-top">
      <div>
        <img src={menu} alt="menu" className="menu" />
      </div>

      <img src={logo} alt="logo" className="logo-nav" />

      <div className="navbar-left"></div>

      <div className="navbar-right">
        <ul>
          {auth ? (
            <div className="conatiner">
              <li>
                <h4 className="title-user-login">Hola,</h4>
                <h5 className="title-user-login"> {auth.user.first_name}</h5>
              </li>
            </div>
          ) : (
            []
          )}

          {auth ? (
            <div className="constainer-options-account">
              <li className="navbar-shopping-cart">
                <Link to="/account">
                  {/* <FontAwesomeIcon icon={faUser} className="faUser" /> */}
                  <svg viewBox="0 0 32 32" width="32px" height="32px">
                    <path
                      d="M15.988 15.257c2.968 0 5.382-2.917 5.382-6.502C21.37 5.367 19.157 3 15.988 3c-3.168 0-5.38 2.367-5.38 5.755 0 3.586 2.413 6.502 5.38 6.502zm0-11.209c2.592 0 4.334 1.892 4.334 4.707 0 3.007-1.944 5.454-4.334 5.454-2.389 0-4.332-2.447-4.332-5.454 0-2.815 1.74-4.707 4.332-4.707zm9.982 20.313c-.013-.829-.02-1.14-.03-1.237-.446-4.093-3.932-6.349-9.815-6.349L16 16.78l-.045-.001c-.034-.001-.069-.003-.105-.003-5.883 0-9.368 2.256-9.814 6.35-.01.09-.016.36-.028 1.126L6 24.745l.003.033c0 .02.002.04.005.059.002.016.007.032.01.048l.016.05c.005.016.013.031.02.046.007.016.015.031.024.046l.03.042c.01.013.019.026.03.038.013.015.029.028.044.041.008.008.014.016.023.023l.016.011.003.003c2.745 2.1 6.029 3.165 9.762 3.165h.002c3.642 0 7.017-1.095 9.763-3.164l.005-.004.013-.01c.009-.006.015-.014.023-.021a.397.397 0 0 0 .046-.043l.03-.037a.42.42 0 0 0 .03-.043c.01-.014.016-.03.024-.044.007-.016.015-.031.021-.047.006-.016.01-.033.014-.05a.447.447 0 0 0 .012-.048c.003-.019.004-.038.005-.057 0-.012.003-.024.003-.037l-.007-.384zm-9.982 2.94h-.001c-3.412 0-6.415-.946-8.934-2.808l.003-.225c.006-.377.015-.946.022-1.03.488-4.475 5.04-5.414 8.772-5.414l.15.003.125-.003c3.733 0 8.285.939 8.773 5.407.008.096.018.754.024 1.147l.002.112c-2.527 1.84-5.61 2.811-8.936 2.811z"
                      stroke="#124983"
                      stroke-width="0.6"
                      fill="#124983"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </Link>
              </li>
              <ul className="options-account">
                <div className="user-name-account">
                  <h3 className="user1-name-account">
                    Hola,{auth ? auth.user.first_name : []}
                  </h3>
                </div>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  <li className="title-options-account">
                    {" "}
                    <a>Cuenta</a>
                  </li>
                </Link>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  {" "}
                  <li>
                    <a>Perfil</a>
                  </li>
                </Link>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  <li>
                    <a>Pedidos</a>
                  </li>
                </Link>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  <li>
                    <a>favoritos</a>
                  </li>
                </Link>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  onClick={logout}
                >
                  <li>
                    <a>Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <li className="navbar-shopping-cart">
              <Link to="/login">
                {/* <FontAwesomeIcon icon={faUser} className="faUser" /> */}
                <svg viewBox="0 0 32 32" width="32px" height="32px">
                  <path
                    d="M15.988 15.257c2.968 0 5.382-2.917 5.382-6.502C21.37 5.367 19.157 3 15.988 3c-3.168 0-5.38 2.367-5.38 5.755 0 3.586 2.413 6.502 5.38 6.502zm0-11.209c2.592 0 4.334 1.892 4.334 4.707 0 3.007-1.944 5.454-4.334 5.454-2.389 0-4.332-2.447-4.332-5.454 0-2.815 1.74-4.707 4.332-4.707zm9.982 20.313c-.013-.829-.02-1.14-.03-1.237-.446-4.093-3.932-6.349-9.815-6.349L16 16.78l-.045-.001c-.034-.001-.069-.003-.105-.003-5.883 0-9.368 2.256-9.814 6.35-.01.09-.016.36-.028 1.126L6 24.745l.003.033c0 .02.002.04.005.059.002.016.007.032.01.048l.016.05c.005.016.013.031.02.046.007.016.015.031.024.046l.03.042c.01.013.019.026.03.038.013.015.029.028.044.041.008.008.014.016.023.023l.016.011.003.003c2.745 2.1 6.029 3.165 9.762 3.165h.002c3.642 0 7.017-1.095 9.763-3.164l.005-.004.013-.01c.009-.006.015-.014.023-.021a.397.397 0 0 0 .046-.043l.03-.037a.42.42 0 0 0 .03-.043c.01-.014.016-.03.024-.044.007-.016.015-.031.021-.047.006-.016.01-.033.014-.05a.447.447 0 0 0 .012-.048c.003-.019.004-.038.005-.057 0-.012.003-.024.003-.037l-.007-.384zm-9.982 2.94h-.001c-3.412 0-6.415-.946-8.934-2.808l.003-.225c.006-.377.015-.946.022-1.03.488-4.475 5.04-5.414 8.772-5.414l.15.003.125-.003c3.733 0 8.285.939 8.773 5.407.008.096.018.754.024 1.147l.002.112c-2.527 1.84-5.61 2.811-8.936 2.811z"
                    stroke="#124983"
                    stroke-width="0.6"
                    fill="#124983"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </Link>
            </li>
          )}
          <li className="navbar-email">
            <svg viewBox="0 0 20 20" width="32px" height="32px">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h20v20H0z"></path>
                <path
                  d="M15.311 6.581c-.027-.483-.454-.877-.952-.877H13.1C12.633 3.518 11.442 2 10.011 2 8.58 2 7.39 3.518 6.921 5.704H5.64a.966.966 0 0 0-.952.875l-.688 10.095a.945.945 0 0 0 .953 1.006h10.092a.943.943 0 0 0 .69-.296.966.966 0 0 0 .263-.713zm-5.3-4.228c1.226 0 2.28 1.386 2.725 3.351h-5.45C7.73 3.74 8.785 2.353 10.01 2.353zm5.468 14.787a.593.593 0 0 1-.433.188H4.954a.595.595 0 0 1-.6-.633L5.04 6.61a.612.612 0 0 1 .601-.553h1.21c-.07.41-.115.842-.134 1.288a.686.686 0 1 0 .854.665.686.686 0 0 0-.5-.658c.019-.45.068-.883.143-1.295h5.594c.075.412.124.846.144 1.295a.686.686 0 0 0 .187 1.346.688.688 0 0 0 .166-1.353 9.973 9.973 0 0 0-.135-1.288h1.188c.315 0 .584.244.6.546l.688 10.089a.6.6 0 0 1-.167.448z"
                  fill="#124983"
                  fill-rule="nonzero"
                  stroke="#124983"
                ></path>
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;
