import "./app.scss";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import Home from "pages/home/Home";
import ProductList from "pages/productList/ProductList";
import Product from "pages/product/Product";
import Cart from "pages/cart/Cart";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import NotFound from "pages/notFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/all" exact>
              <ProductList
                categoryTitle="TOUS LES PRODUITS"
                printCategory={true}
              />
            </Route>
            <Route path="/category" exact>
              <ProductList printCategory={true} />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </>
      </div>
    </Router>
  );
}
