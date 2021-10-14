import { useLocation } from "react-router";
import "./wishList.scss";
export default function WishList() {
  const location = useLocation();
  const list = location.items;
  console.log(list);
  return <div className="wishlist">wishList</div>;
}
