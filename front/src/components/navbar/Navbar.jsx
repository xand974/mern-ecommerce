import {
  AccountCircleOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const { active, quantity } = useSelector((state) => state.carts);
  console.log(active, quantity);

  useEffect(() => {}, []);
  return (
    <header className="navbar">
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>MALET</h1>
        </Link>
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
          <Link to="/cart">
            <div className="navbar__account--shopping">
              <ShoppingBagOutlined className="icon bag" />
              <span
                className={`navbar__acount--shopping-count ${
                  active && "active"
                }`}
              >
                {quantity}
              </span>
            </div>
          </Link>
          <Link to="/user">
            <AccountCircleOutlined className="icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
