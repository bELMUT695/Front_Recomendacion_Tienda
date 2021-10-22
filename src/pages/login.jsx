import React from 'react';
import { Link } from 'react-router-dom';
import env from "react-dotenv";
import  './styles/login.css'
import axios from 'axios';
import {Helmet} from "react-helmet";

class Login extends React.Component{

    state = {
        apiKeyToken:undefined,
        form:{
              email:'',
              password:''
            
            }
    }

    handleChange = e => {
        this.setState({
    
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
              },  
          
        });
      };
    
    handleSubmit = async(event) => {
        event.preventDefault()
        
        this.state.apiKeyToken='2a28bce095a75eabced9c8467460af0fe40acb1359a279f6de465575dd721639';
        console.log(this.state.apiKeyToken)
         axios({
            //url:'http://localhost:3001/api/auth/sign-in/',
            
            url:'https://back-tienda-electronica.herokuapp.com/api/auth/sign-in/',
         
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data:{
                apiKeyToken:this.state.apiKeyToken
            },
            auth: {
                username:this.state.form.email,
                password:this.state.form.password
              },
                      
        },) .then(({data }) => {
                  this.props.history.push('/home')
         
          })
         
        
        
    }
    /*
    componentDidMount () {
      const script = document.createElement("script");
      script.src = "./scripts1.js";
      script.src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js';
      script.src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
      script.async = true;
      document.body.appendChild(script);
  }
    */

render(){

    return(
        <>
        <section className="login">
          <section  className="login__container" >
            <h2>Inicia sesión</h2>
               <form   onSubmit={this.handleSubmit}>
                    <input
                      name="email"
                      className="inputE"
                      type="text"
                      placeholder="Correo"
                      value={this.state.form.email}
                      onChange={this.handleChange}
                    />
            <input
              name="password"
              className="inputE"
              type="password"
              placeholder="Contraseña"
              value={this.state.form.password}
              onChange={this.handleChange}
            />
            <button className="button" type="submit">Iniciar sesión</button>
            <div className="form-check">
              <label htmlFor="first_checkbox">
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              {" "}
              <a href="/">Olvidé mi contraseña</a>
           
            </div>
            
            <h1 className="mensaje" >¿Eres nuevo en EbookNet?</h1> 
            <button className="button" type="submit">Crea su cuenta de EbookNet</button>

           
            

          </form>
        
           
        </section>
      </section>
    
       
      </>
    );
}


}






export default Login;