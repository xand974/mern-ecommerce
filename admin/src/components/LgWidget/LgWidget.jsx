import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "redux/apiCalls";
import "./lgWidget.scss";
import * as timeago from "timeago.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { adminRequest } from "api";

export default function LgWidget() {
  const Button = ({ type, text, id }) => {
    return (
      <Link to={`/order/${id}`}>
        <button className={"btn " + type}>{text}</button>{" "}
      </Link>
    );
  };
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
      const arrayUsersPromise = await Promise.all(orders.map(order => {
        return adminRequest.get(`/users/one/${order.userId}`)
      }))
      setUsers(arrayUsersPromise.map(u => u.data))
      }catch(err){
        console.log(err)
      }
    }
    fetchUsers()
  }, [orders])

  useEffect(() => {
    fetchOrders(dispatch);
  }, [dispatch]);

  
  return (
    <div className="lgWidget">
      <h3 className="transaction__text">Lastest transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Customers</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, key) => {
            return (
              <tr key={key}>
                <td className="tableProfile">
                  <img
                    src="https://www.charlesguene.fr/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                    alt=""
                  />
                  <span>{order.userId}</span>
                </td>
                <td>
                  <span className="date">
                    {timeago.format(order.createdAt)}
                  </span>
                </td>
                <td>
                  <span className="amount">${order.amount}</span>
                </td>
                <td>
                  <Button
                    id={order._id}
                    type={order.status}
                    text={order.status}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
