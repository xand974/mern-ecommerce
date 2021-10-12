import CartItem from "components/cartItem/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.scss";

export default function Cart() {
  const { products, total } = useSelector((state) => state.carts);

  return (
    <div className="cart">
      <h1>Mon Panier</h1>
      <div className="cart__links">
        <Link to="/">
          <span className="cart__links__text">Continuez Vos Achats</span>
        </Link>
        <div className="cart__links__wrapper">
          <span>Panier d'Achats</span>
          <span>Ma Liste De Souhait(2)</span>
        </div>
        <button className="payment__btn">Passer Au Paiement</button>
      </div>
      <div className="container">
        <div className="items">
          {products.map((data) => {
            return <CartItem key={data._id} item={data} />;
          })}
        </div>
        <div className="checkout">
          <h4>CHECKOUT SUMMARY</h4>
          <div className="checkout__container">
            <div className="checkout__container__content">
              <span className="checkout__container__content__bold">
                Subtotal:
              </span>
              <span className="checkout__container__content__light">
                ${total}
              </span>
            </div>
            <div className="checkout__container__content">
              <span className="checkout__container__content__bold">
                Estimated Shipping:
              </span>
              <span className="checkout__container__content__light">
                $ 3.90
              </span>
            </div>
            <div className="checkout__container__content">
              <span className="checkout__container__content__bold">
                Shipping Discount:
              </span>
              <span className="checkout__container__content__light">
                $ -2.90
              </span>
            </div>
            <div className="checkout__container__content">
              <span className="checkout__container__content__bold">TOTAL</span>
              <span className="checkout__container__content__light price__text">
                {total}$
              </span>
            </div>
            <button className="payment__btn second">Passer Au Paiement</button>
          </div>
        </div>
      </div>
    </div>
  );
}
