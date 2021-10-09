import {
  AccountCircleOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
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
            <ShoppingBagOutlined className="icon bag" />
          </Link>
          <Link to="/user">
            <AccountCircleOutlined className="icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
