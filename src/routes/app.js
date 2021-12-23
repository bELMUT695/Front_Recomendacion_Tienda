import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home';
import menVendido from '../pages/menVendido';
import menTodo from '../pages/menTodo';
import menRecomendado from '../pages/menRecomendado';
//import Navbar from '../components/Navbar'


const App = () => (
    <BrowserRouter>
      <Switch > 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/home" component={ Home }/> 
          <Route path="/menVendido" component={ menVendido } />
          <Route path="/menTodo" component={ menTodo } />
          <Route path="/menRecomendado" component={ menRecomendado } />
      </Switch> 
    </BrowserRouter>
)

export default App;