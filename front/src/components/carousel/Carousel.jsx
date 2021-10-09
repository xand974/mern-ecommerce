import "./carousel.scss";
import Card from "components/card/Card";
import { cartData } from "mockData";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="left">
          <h3>- Shirt tendance-</h3>
          <li>commander</li>
        </div>
        <div className="right">
          {cartData.map((card, key) => {
            return <Card key={key} item={card} isAnimated={true} />;
          })}
        </div>
      </div>
    </div>
  );
}
