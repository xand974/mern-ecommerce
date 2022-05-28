import Card from "components/card/Card";
import { useLocation } from "react-router";
import "./wishList.scss";
export default function WishList() {
  const location = useLocation();
  const list = location;
  return <div className="wishlist">{/* <Card /> */}</div>;
}
