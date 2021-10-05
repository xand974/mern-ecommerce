import {
  FavoriteBorder,
  ShareOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./card.scss";

export default function Card({ isAnimated }) {
  return (
    <div className={`card ${isAnimated && "active"}`}>
      <img
        src="https://images.unsplash.com/photo-1598082943498-daf3e5014ae4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        alt=""
        style={{ borderRadius: !isAnimated && "10px" }}
      />
      <div className="option">
        <FavoriteBorder className="icon" />
        <ShoppingBagOutlined className="icon" />
        <ShareOutlined className="icon" />
      </div>
    </div>
  );
}
