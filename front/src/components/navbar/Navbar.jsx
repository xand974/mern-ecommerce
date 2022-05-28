import {
  AccountCircleOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "redux/apiCall";
import "./navbar.scss";
import { useHistory } from "react-router";

export default function Navbar() {
  const { active, quantity } = useSelector((state) => state.carts);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    logOut(dispatch);
    history.push("/login");
  };

  useEffect(() => {}, []);
  return (
    <header className="navbar">
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>MALET</h1>
        </Link>
        <span>Bonjour {currentUser?.user.username}!</span>
        <ul>
          <form>
            <input placeholder="search" type="text" />
            <SearchOutlined className="search" />
          </form>
          <Link to="/category">
            <li>Collections</li>
          </Link>
          <Link to="/products">
            <li>Tous les articles</li>
          </Link>
        </ul>
        <div className="navbar__account">
          <Link to="/order">
            <ShoppingCartOutlined className="icon" />
          </Link>
          <Link to="/cart">
            <div className="navbar__account--shopping">
              <ShoppingBagOutlined className="icon bag" />
              <span
                className={`navbar__acount--shopping-count ${
                  active && quantity !== 0 && "active"
                }`}
              >
                {quantity}
              </span>
            </div>
          </Link>
          <Link to="/user">
            <AccountCircleOutlined className="icon" />
          </Link>
          <button onClick={() => logout()} className="btn-logout">
            <LogoutOutlined className="icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}
