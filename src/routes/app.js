import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home';
import ListWomen from '../pages/ListWomen';
import ListMen from '../pages/ListMen';
import Layout from '../container/Layout';
import LayoutMen from '../container/LayoutMen';
//import Navbar from '../components/Navbar'


const App = () => (
    <BrowserRouter>
      <Switch> 
     
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/home" component={ Home }/> 

          <Route path='/men-top-list/:path?'>
            <LayoutMen>
              <Switch > 
                <Route path="/men-top-list" component={ ListMen } />
              </Switch> 
            </LayoutMen>
          </Route>

          <Route> 
            <Layout>
              <Switch > 
                <Route path="/women-top-list" component={ ListWomen } />
              </Switch> 
            </Layout>
          </Route>
      </Switch>  
    </BrowserRouter>
)

export default App;