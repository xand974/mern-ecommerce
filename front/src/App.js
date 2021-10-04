import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import ProductList from "pages/productList/ProductList";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "pages/product/Product";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}
