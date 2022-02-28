import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import './styles/auth.css';


const register = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const user = {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert('La contraseña y la contraseña de confirmación no coinciden');
    } else{
      user = await axios({
        method: "POST",
        url: "https://back-tienda-electronica.herokuapp.com/api/auth/sign-up/",
        headers: { "Content-Type": "application/json" },
        data: {
          name, email, password
        },
      });
    }
  }

  useEffect(() => {
    if (user) {
      props.history.push('/home');
    }
  }, [props.history, user]);


  return (
    <Fragment>
      <form className="sign-up-form" onSubmit={handleSubmit}>

        <h2 className="title">Register</h2>
        
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            name="name"
            placeholder="Username" 
            onChange={(e) => setName(e.target.value)}
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