import { publicRequest } from "api";
import CartItem from "components/cartItem/CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./cart.scss";
import { useHistory } from "react-router";
import { resetCart } from "redux/cartSlice";
import { sendCart } from "redux/apiCall";
import { filterCartProducts } from "helpers/filterProducts";

export default function Cart() {
  const { products, total, quantity } = useSelector((state) => state.carts);
  const { currentUser } = useSelector((state) => state.user);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const cartProducts = filterCartProducts(products);
  const { userWishList } = useSelector((state) => state.wishList);

  useEffect(() => {
    const cart = {
      userId: currentUser.user._id,
      products: products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      totalQuantity: quantity,
    };
    const sendToken = async () => {
      try {
        const res = await publicRequest.post("/stripe/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        sendCart(cart, dispatch);
        dispatch(resetCart());
        history.push("/bravo", { res: res.data, products: products });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && total >= 1 && sendToken();
  }, [
    stripeToken,
    total,
    history,
    dispatch,
    currentUser,
    quantity,
    cartProducts,
    products,
  ]);

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
          <Link to={{ pathname: "/wishlist", items: userWishList }}>
            <span>Ma Liste De Souhait({userWishList.length})</span>
          </Link>
        </div>
        <button className="payment__btn">Passer Au Paiement</button>
      </div>
      <div className="container">
        <div className="items">
          {products.map((data, key) => {
            return <CartItem key={key} item={data} />;
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
