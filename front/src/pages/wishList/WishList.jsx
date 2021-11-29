import Card from "components/card/Card";
import { useLocation } from "react-router";
import "./wishList.scss";
export default function WishList() {
  const location = useLocation();
  const list = location;
  console.log("list", list);
  return <div className="wishlist">{/* <Card /> */}</div>;
}
