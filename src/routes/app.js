import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home';
import HomeMen from '../pages/homeMen';
//import Navbar from '../components/Navbar'


const App = () => (
    <BrowserRouter>
      <Switch > 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/home" component={ Home }/> 
          <Route path="/homemen" component={ HomeMen } />
      </Switch> 
    </BrowserRouter>
)

export default App;