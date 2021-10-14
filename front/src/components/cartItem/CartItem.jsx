import ColorFilterButton from "components/filterButton/ColorFilterButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "redux/cartSlice";
import "./cartItem.scss";

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.carts);

  console.log(products.filter((product) => product._id !== item._id));

  const handleClick = (e) => {
    if (e.target.value === "plus") {
      setQuantity((prev) => (prev += 1));
    } else {
      setQuantity(quantity <= 0 ? 0 : (prev) => (prev -= 1));
      if (quantity === 0) {
        dispatch(removeItem({ _id: item._id, quantity, price: item.price }));
      }
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
          <ColorFilterButton color={item.color} />
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
