import { Link } from "react-router-dom";
import {
  Favorite,
  FavoriteBorder,
  ShareOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addWishList } from "redux/wishListSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function Card({ isAnimated, item }) {
  const { userWishList } = useSelector((state) => state.wishList);
  var [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkWishList = () => {
      return userWishList.includes(item._id) && setIsFav(true);
    };
    checkWishList();
  }, [isFav, userWishList, item]);

  const handleClick = () => {
    setIsFav((isFav = !isFav));
    dispatch(addWishList(item._id));
  };
  return (
    <div className={`card ${isAnimated ? "active" : ""}`}>
      <Link to={`/product/${item._id}`}>
        <img
          src={item.img}
          alt=""
          style={{ borderRadius: !isAnimated && "10px" }}
        />
      </Link>
      <div className="option">
        <div className="container__icon" onClick={handleClick}>
          {isFav ? (
            <Favorite className="icon" />
          ) : (
            <FavoriteBorder className="icon" />
          )}
        </div>
        <div className="container__icon">
          <Link to={`/product/${item._id}`}>
            <ShoppingBagOutlined className="icon" />
          </Link>
        </div>
        <div className="container__icon">
          <ShareOutlined className="icon" />
        </div>
      </div>
    </div>
  );
}
