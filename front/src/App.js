import Carousel from "components/carousel/Carousel";
import Category from "components/category/Category";
import Navbar from "components/navbar/Navbar";
import Home from "pages/home/Home";
import "./app.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Carousel />
      <Category />
    </div>
  );
}
