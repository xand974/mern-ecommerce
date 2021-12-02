import ColorFilterButton from "components/filterButton/ColorFilterButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  calculateTotalMinus,
  calculateTotalPlus,
} from "redux/cartSlice";
import "./cartItem.scss";

export default function CartItem({ item, id }) {
  const { quantity: q } = useSelector((state) => state.carts);
  const [quantity, setQuantity] = useState(q);
  const dispatch = useDispatch();
  console.log(quantity);

  const handleClick = (e) => {
    if (e.target.value === "plus") {
      setQuantity((prev) => (prev += 1));
      dispatch(calculateTotalPlus({ price: item.price }));
    } else {
      setQuantity((prev) => {
        return prev <= 0 ? 0 : (prev -= 1);
      });
      dispatch(calculateTotalMinus({ price: item.price }));
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.img} alt="" />
      </div>
      <div className="cart__item__infos">
        <div className="info">
          <span className="info__title">Product:</span>
          <span>{item.name}</span>
        </div>
        <div className="info">
          <span className="info__title">ID:</span>
          <span>{item._id}</span>
        </div>
        <div className="info">
          {item.color === null ? (
            "no color"
          ) : (
            <ColorFilterButton color={item.color} />
          )}
        </div>
        <div className="info">
          <span className="info__title">Size:</span>
          <span>{item.size}</span>
        </div>
      </div>
      <div className="cart__item__price">
        <div className="quantity">
          <button
            className="btn__quantity moins"
            onClick={handleClick}
            value="moins"
          >
            -
          </button>
          <span className="quantity__text">{quantity}</span>
          <button
            className="btn__quantity plus"
            onClick={handleClick}
            value="plus"
          >
            +
          </button>
        </div>
        <p className="price__text">$ {item.price}</p>
      </div>
    </div>
  );
}
