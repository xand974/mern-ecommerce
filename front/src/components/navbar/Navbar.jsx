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
          <li>Collections</li>
          <li>Tous les articles</li>
        </ul>
        <div className="navbar__account">
          <ShoppingBagOutlined className="icon bag" />
          <AccountCircleOutlined className="icon" />
        </div>
      </nav>
    </header>
  );
}
