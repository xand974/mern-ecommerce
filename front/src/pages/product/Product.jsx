import "./product.scss";
import ColorFilterButton from "components/filterButton/ColorFilterButton";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "api";

export default function Product() {
  const location = useLocation();
  const PRODUCT_ID = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await publicRequest.get(`/products/one/${PRODUCT_ID}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [PRODUCT_ID]);

  return (
    <div className="product">
      <div className="left">
        <img src={product.img} alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>{product.name}</h3>
          <p className="description">{product.description}</p>
          <p className="prix">${product.price}</p>
          <div className="options__container">
            <div className="colors">
              <span>Color</span>
              {product.color?.map((col, key) => (
                <ColorFilterButton color={col} key={key} />
              ))}
            </div>
            <form>
              <label htmlFor="size">Size</label>
              <select name="size" id="size">
                <option>Select size</option>
                {product.size?.map((size) => (
                  <option value={size}>{size.toUpperCase()}</option>
                ))}
              </select>
            </form>
          </div>
          <div className="cart__container">
            <div className="quantity">
              <button className="moins">-</button>
              <span className="quantity__text">1</span>
              <button className="plus">+</button>
            </div>
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
