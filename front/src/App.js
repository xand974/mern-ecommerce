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
import { Redirect } from "react-router";
import Bravo from "pages/bravo/Bravo";
import { useDispatch, useSelector } from "react-redux";
import WishList from "pages/wishList/WishList";
import Error from "pages/error/Error";
import jwt from "jwt-decode";
import { useEffect } from "react";
import { logOut } from "redux/apiCall";
export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      if (jwt(currentUser.accessToken).exp * 1000 < Date.now()) {
        logOut(dispatch);
        window.location.reload();
      }
    }
  }, [currentUser, dispatch]);

  return (
    <Router>
      <div className="App">
        <Route path="/login" exact>
          {currentUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register" exact>
          {currentUser ? <Redirect to="/" /> : <Register />}
        </Route>
        {currentUser ? (
          <>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/products" exact>
                <ProductList
                  categoryTitle="TOUS LES PRODUITS"
                  printCategory={false}
                />
              </Route>
              <Route path="/products/:category" exact>
                <ProductList printCategory={true} />
              </Route>
              <Route path="/product/:id" exact>
                <Product />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/bravo" exact>
                <Bravo />
              </Route>
              <Route path="/error" exact>
                <Error />
              </Route>
              <Route path="/wishlist" exact>
                <WishList />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </Router>
  );
}
