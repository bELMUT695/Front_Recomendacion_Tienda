import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home';
import menVendido from '../pages/menVendido';
import menTodo from '../pages/menTodo';
import menRecomendado from '../pages/menRecomendado';
import ListWomen from '../pages/ListWomen';
import Layout from '../container/Layout';
//import Navbar from '../components/Navbar'


const App = () => (
    <BrowserRouter>
      <Switch > 
     
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/home" component={ Home }/> 
          <Layout>
          <Route path="/menVendido" component={ menVendido } />
          <Route path="/menTodo" component={ menTodo } />
          <Route path="/menRecomendado" component={ menRecomendado } />
          <Route exact path="/women-top-list" component={ ListWomen } />
          </Layout>
      </Switch> 
      
    </BrowserRouter>
)

export default App;