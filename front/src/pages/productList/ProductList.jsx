import Card from "components/card/Card";
import { cartData } from "mockData";
import { useState } from "react";
import { useLocation } from "react-router";
import "./productList.scss";
import api from "api";

export default function ProductList({ printCategory, categoryTitle }) {
  const location = useLocation();
  const CATEGORY_NAME = location.pathname.split("/")[2];
  console.log(CATEGORY_NAME);
  const [filters, setFilters] = useState({ color: "", size: "" });

  const [sort, setSort] = useState("new");
  const [products, setProducts] = useState(cartData);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="product__list">
      <div className="title">
        {printCategory && (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="left">
              <select onChange={handleChange} name="color" id="">
                <option value="">Select Color</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="yellow">Gold</option>
                <option value="gray">Gray</option>
              </select>
              <select onChange={handleChange} name="size" id="">
                <option value="">Select size</option>
                <option value="s">S</option>
                <option value="xs">XS</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="38">38</option>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="45">45</option>
              </select>
              <button
                className="reset__btn"
                onClick={() => {
                  setFilters({ color: "", size: "" });
                }}
              >
                Reset Filter
              </button>
            </div>
          </form>
        )}
        <h1>{categoryTitle}</h1>
        {printCategory && (
          <form action="">
            <select onChange={handleSortChange} name="sort" id="">
              <option value="new">Newest</option>
              <option value="croissant">Prix croissant</option>
              <option value="decroissant">Prix décroissant</option>
            </select>
          </form>
        )}
      </div>
      <div className="cards">
        {products
          .filter((c) => {
            if (filters.color === "" && filters.size === "") {
              return c;
            } else {
              return c.color === filters.color && c.size === filters.size;
            }
          })
          .map((item, key) => {
            return <Card item={item} isAnimated={false} key={key} />;
          })}
      </div>
    </div>
  );
}
