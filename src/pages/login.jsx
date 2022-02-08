import React, { Fragment, useState, useContext } from "react";
import "./styles/login.css";
import axios from "axios";
import AuthContext from "../contex/AuthContext";
export const Login = (props) => {
  const { login } = useContext(AuthContext);
  console.log(useContext(AuthContext));
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviatDatos = async (event) => {
    event.preventDefault();

    const apiKeyToken =
      "2a28bce095a75eabced9c8467460af0fe40acb1359a279f6de465575dd721639";
    console.log(datos.email, datos.password);
    const user = await axios({
      //url: "http://localhost:3001/api/auth/sign-in/",

      url: "https://back-tienda-electronica.herokuapp.com/api/auth/sign-in/",

      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        apiKeyToken: apiKeyToken,
      },
      auth: {
        username: datos.email,
        password: datos.password,
      },
    }).then(({ data }) => {
      login(data);
      props.history.push({
        pathname: "/home",
        state: { detail: data },
      });
    });
  };
  return (
    <Fragment>
      <section className="login">
        <section className="login__container">
          <h2 className="titulologin">Inicia sesión</h2>
          <form onSubmit={enviatDatos}>
            <input
              name="email"
              className="inputE"
              type="text"
              placeholder="Correo"
              onChange={handleInputChange}
            />
            <input
              name="password"
              className="inputE"
              type="password"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
            <button className="buttonlog" type="submit">
              Iniciar sesión
            </button>
            <div className="form-check">
              <label htmlFor="first_checkbox">
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>{" "}
              <a href="/">Olvidé mi contraseña</a>
            </div>

            <h1 className="mensaje">¿Eres nuevo en EbookNet?</h1>
            <button className="buttonlog" type="submit">
              Crea su cuenta{" "}
            </button>
          </form>
        </section>
      </section>
    </Fragment>
  );
};

export default Login;
