import { useLocation } from "react-router";
import "./wishList.scss";
export default function WishList() {
  const location = useLocation();
  const list = location.items;
  return <div className="wishlist">wishList</div>;
}
