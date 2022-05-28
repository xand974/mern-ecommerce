import Card from "components/card/Card";
import { useState } from "react";
import { useLocation } from "react-router";
import "./productList.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "redux/apiCall";

export default function ProductList({ printCategory, categoryTitle }) {
  const location = useLocation();
  const CATEGORY_NAME = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const { products } = useSelector((state) => state.products);

  const [sort, setSort] = useState("new");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    fetchProducts(CATEGORY_NAME, dispatch);
  }, [CATEGORY_NAME, dispatch]);

  useEffect(() => {
    CATEGORY_NAME &&
      setFilteredProducts(() => {
        return products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        });
      });
  }, [products, filters, CATEGORY_NAME]);

  useEffect(() => {
    if (sort === "new") {
    }
  }, [sort, products]);

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
          <form method="post" onSubmit={(e) => e.preventDefault()}>
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
              <option value="">Select Sort</option>
              <option value="new">Newest</option>
              <option value="croissant">Prix croissant</option>
              <option value="decroissant">Prix décroissant</option>
            </select>
          </form>
        )}
      </div>
      <div className="cards">
        {CATEGORY_NAME
          ? filteredProducts.map((filteredProduct) => (
              <Card key={filteredProduct._id} item={filteredProduct} />
            ))
          : products.map((product) => (
              <Card key={product._id} item={product} />
            ))}
      </div>
    </div>
  );
}
