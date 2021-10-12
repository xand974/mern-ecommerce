import "./product.scss";
import ColorFilterButton from "components/filterButton/ColorFilterButton";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "api";
import { addProduct } from "redux/cartSlice";
import { useDispatch } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const PRODUCT_ID = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    if (e.target.value === "plus") {
      setQuantity((prev) => (prev += 1));
    } else {
      setQuantity(quantity <= 1 ? 1 : (prev) => (prev -= 1));
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await publicRequest.get(`/products/one/${PRODUCT_ID}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [PRODUCT_ID]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, size, color }));
  };

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
                <ColorFilterButton
                  color={col}
                  key={key}
                  onClick={(e) => {
                    setColor(e.target.style["background-color"]);
                  }}
                />
              ))}
            </div>
            <form>
              <label htmlFor="size">Size</label>
              <select
                name="size"
                id="size"
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Select size</option>
                {product.size?.map((size, key) => (
                  <option value={size} key={key}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="cart__container">
            <div className="quantity">
              <button value="moins" onClick={handleQuantity} className="moins">
                -
              </button>
              <span className="quantity__text">{quantity}</span>
              <button value="plus" onClick={handleQuantity} className="plus">
                +
              </button>
            </div>
            <div className="alert__quantity">
              {product.quantity - quantity} encore en stock !
            </div>
            <button onClick={handleClick}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
