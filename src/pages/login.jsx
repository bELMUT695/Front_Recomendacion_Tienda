import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { saveToLocalStorage } from "../hooks/useLocalStorage";
import "./styles/auth.css";
import AuthContext from "../contex/AuthContext";
import { useEffect } from "react";

const Login = (props) => {
  const { login } = useContext(AuthContext);
  console.log(useContext(AuthContext));

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  useEffect(async () => {
    const authUser = await login();
    if (authUser) {
      props.history.push({
        pathname: "/home",
      });
    }
  }, []);
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
      //  url: "http://localhost:3001/api/auth/sign-in/",

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
      console.log(data);

      saveToLocalStorage(data);
      login();
      props.history.push({
        pathname: "/home",
      });
    });
  };

  return (
    <Fragment>
      <form className="sign-in-form" onSubmit={enviatDatos}>
        <h2 className="title">Inicia sesión</h2>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            name="email"
            className="inputE"
            type="text"
            placeholder="Correo"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            name="password"
            className="inputE"
            type="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
          />
        </div>

        <input type="submit" value="Iniciar sesión" className="btn1 solid" />

        <p className="social-text">O Iniciar sesión con plataformas sociales</p>
        <div className="social-media">
          <a href="/" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <a className="password-recuperation" href="#">
          Olvidé mi contraseña
        </a>
      </form>
    </Fragment>
  );
};

export default Login;
