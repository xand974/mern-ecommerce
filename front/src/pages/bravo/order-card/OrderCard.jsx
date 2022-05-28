import "./order-card.scss";
import { ArrowRightAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { privateRequest } from "api";
export default function OrderCard({ setDetailClicked, order }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const arrayProducts = await Promise.all(
          order.products?.map((item) => {
            return privateRequest.get(`products/one/${item.productId}`);
          })
        );
        setProducts(arrayProducts.map((item) => item.data));
      } catch (error) {
        throw error;
      }
    };
    getProducts();
  }, [order]);

  return (
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
          status : {order.status}
        </span>
        <span className="order__card--infos--price">{order.amount}$</span>
      </div>
      <div className="order__card--more">
        <button onClick={() => setDetailClicked(true)}>
          <ArrowRightAlt className="icon" />
        </button>
      </div>
    </div>
  );
}
