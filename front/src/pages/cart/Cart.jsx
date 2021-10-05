import CartItem from "components/cartItem/CartItem";
import { cartData } from "mockData";
import "./cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <h1>Mon Panier</h1>
      <div className="cart__links">
        <span className="cart__links__text">Continuez Vos Achats</span>

        <div className="cart__links__wrapper">
          <span>Panier d'Achats</span>
          <span>Ma Liste De Souhait(2)</span>
        </div>
        <button className="payment__btn">Passer Au Paiment</button>
      </div>
      <div className="container">
        <div className="items">
          {cartData.map((data) => {
            return <CartItem key={data.id} item={data} />;
          })}
        </div>
        <div className="checkout">checkout</div>
      </div>
    </div>
  );
}
