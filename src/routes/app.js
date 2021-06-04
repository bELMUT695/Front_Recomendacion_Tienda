import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'


const App = () => (
    <BrowserRouter>
        
        <Switch >
            
        <Route exact path="/Login" component={Login}/> 
        <Route exact path="/Home" component={ Home }/> 
         
        </Switch>
        
        
    </BrowserRouter>

)

export default App;