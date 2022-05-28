import { publicRequest } from "api";
import CartItem from "components/cartItem/CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./cart.scss";
import { useHistory } from "react-router";
import { resetCart } from "redux/cartSlice";
import { sendCart, sendOrder } from "redux/apiCall";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function Cart() {
  const { products, total, quantity } = useSelector((state) => state.carts);
  const { currentUser } = useSelector((state) => state.user);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userWishList } = useSelector((state) => state.wishList);
  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    const sendToken = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        sendCart(
          {
            userId: currentUser.user._id,
            products: products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
            })),
            totalQuantity: quantity,
          },
          dispatch
        );
        const order = {
          userId: currentUser.user._id,
          products: products.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
          })),
          status: "confirmation",
          amount: res.data.amount / 100,
          address: res.data.billing_details.address,
        };

        res && products && sendOrder(order);
        dispatch(resetCart());
        setLoading(false);
        history.push("/bravo", { res: res.data, products: products });
      } catch (err) {
        setLoading(false);
        history.push("/error");
        throw err;
      }
    };
    stripeToken && total >= 1 && sendToken();
  }, [stripeToken, total, history, dispatch, currentUser, quantity, products]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div className="cart">
      <ClipLoader loading={loading} css={override} />
      <h1>Mon Panier</h1>
      <div className="cart__links">
        <Link to="/">
          <span className="cart__links__text">Continuez Vos Achats</span>
        </Link>
        <div className="cart__links__wrapper">
          <Link to={{ pathname: "/wishlist", items: userWishList }}>
            <span>Ma Liste De Souhait({userWishList.length})</span>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="items">
          {products.map((data, key) => {
            return <CartItem key={key} item={data} id={data._id} />;
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

            <button
              className={`payment__btn second ${
                quantity < 1 ? "disabled" : ""
              }`}
            >
              <StripeCheckout
                name="Malet Shop"
                image="https://raw.githubusercontent.com/xand974/mern-ecommerce/master/front/src/img/LOGO_HEET_SANSFOND.png"
                billingAddress
                shippingAddress
                description="Une histoire en trois temps"
                amount={total * 100}
                stripeKey={process.env.REACT_APP_STRIPE_SECRET}
                token={onToken}
              >
                Passer Au Paiement
              </StripeCheckout>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
