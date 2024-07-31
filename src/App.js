import "./App.css";
//import { Routes } from "react-router-dom";
import { useContext } from "react";
import { loadStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/layout/Home";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./components/Context/shopping/shoppingContext";
import { useEffect } from "react";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  'pk_test_51PBvOfKbibGJxKjenJQKWV8lxranRS80LBPbKwLZDXvE65wK34hcYmWVtaxJSDnkttzAOpVFDpab3SEBiX57SSCI002wXKvPL6'
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/payment">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
