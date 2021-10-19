import Sidebar from "components/Sidebar/Sidebar";
import Topbar from "components/Topbar/Topbar";
import Home from "pages/Home/Home";
import "./app.scss";
import UserList from "pages/UserList/UserList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import User from "pages/User/User";
import AddUser from "pages/AddUser/AddUser";
import ProductsList from "pages/ProductsList/ProductsList";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import AddProduct from "pages/AddProduct/AddProduct";
import Product from "pages/Product/Product";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).auth
  )?.currentUser?.user.isAdmin;
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {admin ? <Redirect to="/" /> : <Register />}
          </Route>
          {admin ? (
            <>
              <Topbar />
              <div className="wrapper">
                <Sidebar />
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/users" exact>
                  <UserList />
                </Route>
                <Route path="/user/:id" exact>
                  <User />
                </Route>
                <Route path="/new/user" exact>
                  <AddUser />
                </Route>
                <Route path="/products" exact>
                  <ProductsList />
                </Route>
                <Route path="/new/product" exact>
                  <AddProduct />
                </Route>
                <Route path="/product/:id" exact>
                  <Product />
                </Route>
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
