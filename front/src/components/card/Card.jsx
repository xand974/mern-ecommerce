import { Link } from "react-router-dom";
import {
  FavoriteBorder,
  ShareOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./card.scss";

export default function Card({ isAnimated, item }) {
  return (
    <div className={`card ${isAnimated && "active"}`}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.img}
          alt=""
          style={{ borderRadius: !isAnimated && "10px" }}
        />
      </Link>
      <div className="option">
        <FavoriteBorder className="icon" />
        <ShoppingBagOutlined className="icon" />
        <ShareOutlined className="icon" />
      </div>
    </div>
  );
}
