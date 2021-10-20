import { useHistory, useLocation } from "react-router";
import "./product.scss";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const product = location.product;
  const [userInput, setUserInput] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const HandleChange = (e) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleClick = () => {
    updateProduct(dispatch, product?._id, {
      ...userInput,
      color,
      categories: cat,
      size,
    });
    history.push("/products");
  };
  return (
    <div className="product">
      <div className="container">
        <h3 className="title">Product</h3>
        <Link to="/new/product">
          <li>Create</li>
        </Link>
      </div>
      <div className="wrapper">
        <div className="description">
          <div className="img">
            <img
              src={
                product?.img ||
                "https://i.pinimg.com/originals/1d/15/69/1d1569322ba074da6624218cab85129e.jpg"
              }
              alt=""
            />
            <span>{product?.name}</span>
          </div>
          <div className="infos">
            <div className="item">
              <span className="infoItem">id: </span>{" "}
              <span className="infoData">{product?._id}</span>
            </div>
            <div className="item">
              <span className="infoItem">Price: </span>{" "}
              <span className="infoData">{product?.price}</span>
            </div>
            <div className="item">
              <span className="infoItem">Quantity: </span>{" "}
              <span className="infoData">{product?.quantity}</span>
            </div>
            <div className="item">
              <span className="infoItem">in Stock: </span>{" "}
              <span className="infoData">
                {product?.inStock ? "oui" : "non"}
              </span>
            </div>
            <div className="item">
              <span className="infoItem">Categories: </span>{" "}
              <span className="infoData">
                {product?.categories.map((cat) => {
                  return cat;
                })}
              </span>
            </div>
            <div className="item">
              <span className="infoItem">Size: </span>{" "}
              <span className="infoData">
                {product?.size.map((s) => {
                  return s;
                })}
              </span>
            </div>
            <div className="item">
              <span className="infoItem">Colors: </span>{" "}
              <span className="infoData">
                {product?.color.map((c) => {
                  return c;
                })}
              </span>
            </div>

            <div className="item">
              <span className="infoItem">Description: </span>{" "}
              <span className="infoData trailer">
                {product?.description.length > 100
                  ? product?.description.substring(0, 100) + "..."
                  : product?.description}
              </span>
            </div>
          </div>
        </div>
        <div className="edit">
          <h3>Edit</h3>
          <div className="wrapper__product">
            <div className="left">
              <form>
                <label htmlFor="name">Name</label>
                <input
                  placeholder={product?.name}
                  onChange={HandleChange}
                  type="text"
                  name="name"
                  id="name"
                />

                <label htmlFor="description">Description</label>
                <input
                  placeholder={product?.description}
                  onChange={HandleChange}
                  name="description"
                  type="text"
                  id="description"
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                  placeholder={product?.quantity}
                  onChange={HandleChange}
                  name="quantity"
                  type="number"
                  id="quantity"
                  min={0}
                />

                <label htmlFor="categories">Categories</label>
                <input
                  type="text"
                  id="categories"
                  onChange={(e) => setCat(e.target.value.split(","))}
                  name="synopsis"
                />
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  id="color"
                  onChange={(e) => setColor(e.target.value.split(","))}
                  name="color"
                />
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  id="size"
                  onChange={(e) => setSize(e.target.value.split(","))}
                  name="size"
                />

                <label htmlFor="price" onChange={HandleChange}>
                  Price
                </label>
                <input
                  placeholder={product?.price}
                  type="number"
                  id="price"
                  min={0}
                  name="price"
                  onChange={HandleChange}
                />
                <label htmlFor="inStock" onChange={HandleChange}>
                  in Stock
                </label>
                <select onChange={HandleChange} name="inStock" id="inStock">
                  <option value=""></option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </form>
            </div>
            <div className="right">
              <div className="img">
                <img
                  src={
                    product?.img ||
                    "https://i.pinimg.com/originals/1d/15/69/1d1569322ba074da6624218cab85129e.jpg"
                  }
                  alt=""
                />
                <label htmlFor="thumbnail" className="thumbnail">
                  <CloudUploadOutlined className="icon" />
                </label>
                <input type="file" id="thumbnail" />
              </div>
              <button onClick={HandleClick} className="btn__update">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
