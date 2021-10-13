import { publicRequest } from "api";
import CartItem from "components/cartItem/CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./cart.scss";
import { useHistory } from "react-router";
import { resetCart } from "redux/cartSlice";

export default function Cart() {
  const { products, total } = useSelector((state) => state.carts);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const sendToken = async () => {
      try {
        const res = await publicRequest.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        dispatch(resetCart());
        history.push("/bravo", { res: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && total >= 1 && sendToken();
  }, [stripeToken, total, history, dispatch]);

  const onToken = (token) => {
    setStripeToken(token);
  };

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
            <StripeCheckout
              name="Malet Shop"
              image="https://raw.githubusercontent.com/xand974/mern-ecommerce/master/front/src/img/LOGO_HEET_SANSFOND.png"
              billingAddress
              shippingAddress
              description
              amount={total * 100}
              stripeKey={process.env.REACT_APP_STRIPE_SECRET}
              token={onToken}
            >
              <button className="payment__btn second">
                Passer Au Paiement
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
}
