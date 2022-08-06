import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles/auth.css";

const register = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("La contraseña y la contraseña de confirmación no coinciden");
    } else {
      const user = await axios({
        method: "POST",
        //url: "https://back-tienda-electronica.herokuapp.com/api/auth/sign-up/",
        url: "https://back-tienda-electronica.herokuapp.com/api/auth/sign-up/",
        headers: { "Content-Type": "application/json" },
        data: {
          first_name,
          last_name,
          gender,
          email,
          password,
        },
      }).then((res) => {
        props.history.push("/home");
      });
    }
  };

  return (
    <Fragment>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="first_name"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="last_name"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <input type="submit" className="btn1" value="Register" />

        <p className="social-text">
          O Regístrese con las plataformas sociales{" "}
        </p>

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
      </form>
    </Fragment>
  );
};

export default register;
