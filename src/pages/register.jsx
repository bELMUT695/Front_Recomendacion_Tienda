import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles/auth.css';


const register = () => {
  return (
    <Fragment>
      <form className="sign-up-form">

        <h2 className="title">Register</h2>
        
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>

        <input type="submit" className="btn1" value="Register" />

        <p className="social-text">O Regístrese con las plataformas sociales        </p>

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