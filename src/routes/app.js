import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../pages/Auth";
import Login from "../pages/login";

import Home from "../pages/home";
import ListWomen from "../pages/ListWomen";
import ListMen from "../pages/ListMen";
import Layout from "../container/Layout";
import LayoutMen from "../container/LayoutMen";
import OrderItemWomen from "../pages/OrderItemWomen";
import OrderItemMen from "../pages/OrderItemMen.jsx";
import useInitialState from "../hooks/useInitialCart";
import CartContext from "../contex/CartContext";
import MyOrderClothes from "../pages/MyOrderClothes";
import useInitialAuth from "../hooks/useInitialAuth";
import AuthContext from "../contex/AuthContext";
import Listrecomendedwomen from "../pages/Listrecomendedwomen";
import Listrecomendedmen from "../pages/Listrecomendedmen";
//import Navbar from '../components/Navbar'

const App = () => {
  const initialState = useInitialState();
  const useinitialAuth = useInitialAuth();
  return (
    <CartContext.Provider value={initialState}>
      <AuthContext.Provider value={useinitialAuth}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />

            <Route path={["/men-top-list/:path?", "/recomendacion", "/todo"]}>
              <LayoutMen>
                <Switch>
                  <Route exact path="/men-top-list" component={ListMen} />
                  <Route path="/men-top-list/:id" component={OrderItemMen} />
                  <Route exact
                    path="/recomendacion"
                    component={Listrecomendedmen}
                  />
                </Switch>
              </LayoutMen>
            </Route>

            <Route path={["/women-top-list/:path?", "/recommended-clothe", "/cola-de-compras", "/all-clothes"]}>
              <Layout>
                <Switch>
                  <Route exact path="/women-top-list" component={ListWomen} />
                  <Route path="/women-top-list/:id" component={OrderItemWomen} />
                  <Route path="/cola-de-compras" component={MyOrderClothes} />
                  <Route
                    path="/recommended-clothe"
                    component={Listrecomendedwomen}
                  />
                </Switch>
              </Layout>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
