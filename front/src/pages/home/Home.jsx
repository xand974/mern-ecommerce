import Carousel from "components/carousel/Carousel";
import Category from "components/category/Category";
import Billboard from "components/billboard/Billboard";
import "./home.scss";
import Slider from "components/slider/Slider";

export default function Home() {
  return (
    <div className="home">
      <Billboard />
      <Carousel />
      <Category />
      <Slider />
    </div>
  );
}
