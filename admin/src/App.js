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
import Add from "pages/AddUser/Add";
import ProductsList from "pages/ProductsList/ProductsList";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).auth
  )?.currentUser?.user.isAdmin;
  return (
    <div className="app">
      <Router>
        <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {admin ? <Redirect to="/" /> : <Register />}
        </Route>
        {admin ? (
          <>
            <Topbar />
            <Switch>
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
                <Route path="/add" exact>
                  <Add />
                </Route>
                <Route path="/products" exact>
                  <ProductsList />
                </Route>
              </div>
            </Switch>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Router>
    </div>
  );
}

export default App;
