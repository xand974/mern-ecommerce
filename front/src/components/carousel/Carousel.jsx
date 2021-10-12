import "./carousel.scss";
import Card from "components/card/Card";
import { cartData } from "mockData";
import { useSelector } from "react-redux";

export default function Carousel() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="left">
          <h3>- Shirt tendance-</h3>
          <li>commander</li>
        </div>
        <div className="right">
          {products.map((product, key) => {
            return <Card key={key} item={product} isAnimated={true} />;
          })}
        </div>
      </div>
    </div>
  );
}
