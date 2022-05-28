import { privateRequest } from "api";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./bravo.scss";
import OrderCard from "./order-card/OrderCard";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function Bravo() {
  const [orders, setOrders] = useState([]);
  var [detailClicked, setDetailClicked] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const res = await privateRequest.post(`orders/all-from-user`, {
          userId: currentUser.user._id,
        });
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    getOrders();
  }, [currentUser.user?._id]);

  return (
    <div className="bravo" onClick={() => setDetailClicked(false)}>
      <ClipLoader loading={loading} css={override} />
      <div className="order__resume--container">
        <h1 className="order__resume--title">My Orders</h1>
        <div className="order__wrapper">
          {orders.map((order, index) => (
            <OrderCard
              order={order}
              key={index}
              setDetailClicked={setDetailClicked}
            />
          ))}
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
