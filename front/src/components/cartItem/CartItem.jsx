import ColorFilterButton from "components/filterButton/ColorFilterButton";
import "./cartItem.scss";

export default function CartItem({ item }) {
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
          <button className="btn__quantity moins">-</button>
          <span className="quantity__text">{item.quantity}</span>
          <button className="btn__quantity plus">+</button>
        </div>
        <p className="price__text">$ {item.price}</p>
      </div>
    </div>
  );
}
