import "./product.scss";
import ColorFilterButton from "components/filterButton/ColorFilterButton";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "api";
import { addProduct } from "redux/cartSlice";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const PRODUCT_ID = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const handleQuantity = (e) => {
    if (e.target.value === "plus") {
      setQuantity((prev) => (prev += 1));
      return;
    }
    setQuantity((prev) => {
      if (quantity <= 1) return 1;
      return prev - 1;
    });
  };

  const isDefined = () => color !== undefined && size !== undefined;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(`/products/one/${PRODUCT_ID}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };
    fetchProduct();
  }, [PRODUCT_ID]);

  const addToCart = () => {
    const isPropDefined = isDefined();
    if (!isPropDefined) return;
    dispatch(addProduct({ ...product, quantity, size, color }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="product">
      <ClipLoader loading={loading} css={override} />
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
                  selected={color}
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
                required={true}
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
            <button
              onClick={() => addToCart()}
              disabled={!isDefined()}
              className={isDefined() ? "" : "disabled"}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
