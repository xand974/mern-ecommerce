import "./carousel.scss";
import Card from "components/card/Card";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="left">
          <h3>- Shirt tendance-</h3>
          <li>commander</li>
        </div>
        <div className="right">
          <Card isAnimated={true} />
          <Card isAnimated={true} />
          <Card isAnimated={true} />
          <Card isAnimated={true} />
          <Card isAnimated={true} />
        </div>
      </div>
    </div>
  );
}
