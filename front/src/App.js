import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import ProductList from "pages/productList/ProductList";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "pages/product/Product";
import Cart from "pages/cart/Cart";
import Login from "pages/login/Login";
import Register from "pages/register/Register";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <>
            <Navbar />
            <Route path="/" exact>
              <Home />
              <ProductList categoryTitle="TOUS LES PRODUITS" />
            </Route>
            <Route path="/all" exact>
              <ProductList
                categoryTitle="TOUS LES PRODUITS"
                printCategory={true}
              />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </>
        </Switch>
      </div>
    </Router>
  );
}
