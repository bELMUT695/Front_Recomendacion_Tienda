import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

//import Navbar from '../components/Navbar'

const App = () => {
  const { auth } = useContext(AuthContext);
  const initialState = useInitialState();
  const useinitialAuth = useInitialAuth();
  return (
    <CartContext.Provider value={initialState}>
      <AuthContext.Provider value={useinitialAuth}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />

            <Route path="/men-top-list/:path?">
              <LayoutMen>
                <Switch>
                  <Route
                    exact
                    path="/men-top-list"
                    component={auth ? ListMen : Login}
                  />
                  <Route
                    path="/men-top-list/:id"
                    component={auth ? OrderItemMen : Login}
                  />
                </Switch>
              </LayoutMen>
            </Route>

            <Layout>
              <Switch>
                <Route
                  exact
                  path="/women-top-list"
                  component={auth ? ListWomen : Login}
                />
                <Route
                  path="/women-top-list/:id"
                  component={auth ? OrderItemWomen : Login}
                />
                <Route
                  path="/cola-de-compras"
                  component={auth ? MyOrderClothes : Login}
                />
              </Switch>
            </Layout>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
