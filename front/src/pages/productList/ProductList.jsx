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
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
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
    const colorsFromProducts = products.map((item) => item.color).flat();
    const setOfColors = new Set(colorsFromProducts);
    setColors(Array.from(setOfColors));

    const sizeFromProducts = products.map((item) => item.size).flat();
    const setOfSize = new Set(sizeFromProducts);
    setSizes(Array.from(setOfSize));
  }, [products]);

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

  // useEffect(() => {
  //   if (sort === "new") {
  //   }
  // }, [sort, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "") return;

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
                {colors?.map((item, index) => (
                  <option key={index} value={item}>
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
              <select onChange={handleChange} name="size" id="">
                <option value="">Select size</option>
                {sizes?.map((item, index) => (
                  <option key={index} value={item}>
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
              <button
                className="reset__btn"
                type="reset"
                onClick={() => {
                  setFilters({});
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
