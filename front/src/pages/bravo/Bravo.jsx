import { ArrowRightAlt } from "@mui/icons-material";
import { useLocation } from "react-router";
import "./bravo.scss";

export default function Bravo() {
  const location = useLocation();
  const res = location.state.res;
  const products = location.state.products;

  console.log("res", res, products);

  return (
    <div className="bravo">
      <div className="order__resume--container">
        <h1 className="order__resume--title">My Order</h1>
        <div className="order__wrapper">
          <div className="order__card">
            <div className="order__card--img">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="order__card--infos">
              <span className="order__card--infos--title">
                NIKE LOW DUNK NOIR ET ORANGE + 3 AUTRES
              </span>
              <span className="order__card--infos--status">
                status : pending
              </span>
            </div>
            <div className="order__card--more">
              <button>
                <ArrowRightAlt className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="order__detail--container">ezaez</div>
    </div>
  );
}
