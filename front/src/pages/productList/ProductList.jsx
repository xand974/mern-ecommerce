import Card from "components/card/Card";
import "./productList.scss";

export default function ProductList({ printCategory, categoryTitle }) {
  return (
    <div className="product__list">
      <div className="title">
        {printCategory && (
          <form>
            <div className="left">
              <select name="color" id="">
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="magenta">Magenta</option>
                <option value="gold">Gold</option>
                <option value="crimson">Crimson</option>
              </select>
              <select name="size" id="">
                <option>Select size</option>
                <option value="s">S</option>
                <option value="xs">XS</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>
          </form>
        )}
        <h1>{categoryTitle}</h1>
        {printCategory && (
          <form action="">
            <select name="sort" id="">
              <option value="new">Newest</option>
              <option value="croissant">Prix croissant</option>
              <option value="decroissant">Prix décroissant</option>
            </select>
          </form>
        )}
      </div>
      <div className="cards">
        <Card isAnimated={false} />
        <Card isAnimated={false} />
        <Card isAnimated={false} />
        <Card isAnimated={false} />
        <Card isAnimated={false} />
        <Card isAnimated={false} />
        <Card isAnimated={false} />
      </div>
    </div>
  );
}
