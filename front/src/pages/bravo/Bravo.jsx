import { ArrowRightAlt } from "@mui/icons-material";
import { privateRequest } from "api";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { sendOrder } from "redux/apiCall";
import "./bravo.scss";

export default function Bravo() {
  const location = useLocation();
  const res = location.state.res;
  const products = location.state.products;
  var [detailClicked, setDetailClicked] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { total } = useSelector((state) => state.carts);

  useEffect(() => {
    const order = {
      userId: currentUser.user._id,
      products: products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      status: "confirmation",
      amount: res.amount / 100,
      address: res.billing_details.address,
    };

    res && products && sendOrder(order);
  }, [currentUser.user._id, res, products, total]);

  useEffect(() => {
    //fetch all orders of user
  }, []);

  return (
    <div className="bravo" onClick={() => setDetailClicked(false)}>
      <div className="order__resume--container">
        <h1 className="order__resume--title">My Order</h1>
        <div className="order__wrapper">
          <div className="order__card" onClick={() => setDetailClicked(true)}>
            <div className="order__card--img">
              <img src={products[0]?.img} alt="" />
            </div>
            <div className="order__card--infos">
              <span className="order__card--infos--title">
                {products[0]?.name}{" "}
                {products.length > 1 ? `et ${products.length - 1} autres` : ""}
              </span>
              <span className="order__card--infos--status">
                status : {res.status}
              </span>
              <span className="order__card--infos--price">
                {res.amount / 100}$
              </span>
            </div>
            <div className="order__card--more">
              <button onClick={() => setDetailClicked(true)}>
                <ArrowRightAlt className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`order__detail--container ${
          detailClicked ? "active" : "hidden"
        }`}
      >
        ezaez
      </div>
    </div>
  );
}
