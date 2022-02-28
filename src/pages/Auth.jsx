import React, { useState } from 'react';

import './styles/auth.css';
import Register from './register';
import Login from './login';

const Auth = (props) => {

  const [click, setClick] = useState(false);
  console.log(click)

  return (
    <div className={`containerr ${click ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login props={props} />
          <Register props={props} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿Eres nuevo en EbookNet?</h3>
            <p>
              Crea su cuenta{" "}! Sea parte de esta bonita familia !!
            </p>
            <button 
              className='btn1 transparent'
              id="sign-up-btn"
              onClick={() => setClick(!click)}
            >
              Register
            </button>
          </div>
          <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Uno de nosotros ?</h3>
            <p>
              Logueate y disfruta de los grandes beneficios que ofrecemos para los nuestros!!!
            </p>
            <button 
              className='btn1 transparent'
              id="sign-in-btn" 
              onClick={() => setClick(!click)}
            >
              Login
            </button>
          </div>
          <img src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;