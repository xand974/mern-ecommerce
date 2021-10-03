import {
  AccountCircleOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <h1>MALET</h1>
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
