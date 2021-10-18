import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "redux/apiCalls";
import "./lgWidget.scss";

export default function LgWidget() {
  const Button = ({ type, text }) => {
    return <button className={"btn " + type}>{text}</button>;
  };
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  console.log(orders);

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
          <tr>
            <td className="tableProfile">
              <img
                src="https://www.charlesguene.fr/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                alt=""
              />
              <span>Malet Alexandre</span>
            </td>
            <td>
              <span className="date">23 May 2021</span>
            </td>
            <td>
              <span className="amount">$220</span>
            </td>
            <td>
              <Button type="approuved" text="approuved" />
            </td>
          </tr>
          <tr>
            <td className="tableProfile">
              <img
                src="https://www.charlesguene.fr/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                alt=""
              />
              <span>Malet Alexandre</span>
            </td>
            <td>
              <span className="date">23 May 2021</span>
            </td>
            <td>
              <span className="amount">$220</span>
            </td>
            <td>
              <Button type="pending" text="pending" />
            </td>
          </tr>
          <tr>
            <td className="tableProfile">
              <img
                src="https://www.charlesguene.fr/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                alt=""
              />
              <span>Malet Alexandre</span>
            </td>
            <td>
              <span className="date">23 May 2021</span>
            </td>
            <td>
              <span className="amount">$220</span>
            </td>
            <td>
              <Button type="rejected" text="rejected" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
