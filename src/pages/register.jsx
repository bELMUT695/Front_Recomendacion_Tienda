import React from 'react';
import { Link } from 'react-router-dom';

import './styles/register.css';

const register = () => {
  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="category-1-refactor.png" alt="images" width="80%" />
          </div>
          <div className="col-2 account-page-col">
            <form >
              <h2>Register</h2>
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter Name" 
                  required 
                  
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter Email" 
                  required 
                  
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Enter Password" 
                  required
                  
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Enter Confirm Password" 
                  required
                  
                />
                <br/><br/>

                <Link to="/login">¿Ya tienes una cuenta?</Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                <br/><br/>
                <button className="btn" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;