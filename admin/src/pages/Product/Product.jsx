import { useHistory, useLocation } from "react-router";
import "./product.scss";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Product() {
  const location = useLocation();
  const product = location.product;
  const [userInput, setUserInput] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

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
    console.log(userInput, "product updated");
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
                product.img ||
                "https://i.pinimg.com/originals/1d/15/69/1d1569322ba074da6624218cab85129e.jpg"
              }
              alt=""
            />
            <span>{product.name}</span>
          </div>
          <div className="infos">
            <div className="item">
              <span className="infoItem">id: </span>{" "}
              <span className="infoData">{product._id}</span>
            </div>
            <div className="item">
              <span className="infoItem">Price: </span>{" "}
              <span className="infoData">{product.price}</span>
            </div>
            <div className="item">
              <span className="infoItem">Quantity: </span>{" "}
              <span className="infoData">{product.quantity}</span>
            </div>
            <div className="item">
              <span className="infoItem">in Stock: </span>{" "}
              <span className="infoData">
                {product.inStock ? "oui" : "non"}
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
                {product.description.length > 100
                  ? product.description.substring(0, 100) + "..."
                  : product.description}
              </span>
            </div>
          </div>
        </div>
        <div className="edit">
          <h3>Edit</h3>
          <div className="wrapper">
            <div className="left">
              <form>
                <label htmlFor="title">Name</label>
                <input
                  placeholder={product.name}
                  onChange={HandleChange}
                  type="text"
                  name="title"
                  id="title"
                />

                <label htmlFor="description">Description</label>
                <input
                  placeholder={product.description}
                  onChange={HandleChange}
                  name="year"
                  type="text"
                  id="description"
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                  placeholder={product.quantity}
                  onChange={HandleChange}
                  name="quantity"
                  type="number"
                  id="genre"
                />

                <label htmlFor="synopsis">Synopsis</label>
                <input
                  type="text"
                  id="synopsis"
                  onChange={HandleChange}
                  name="synopsis"
                />

                <label htmlFor="agelimit" onChange={HandleChange}>
                  Age Limit
                </label>
                <input
                  placeholder={product.ageLimit}
                  type="number"
                  id="synopsis"
                  name="ageLimit"
                  onChange={HandleChange}
                />
              </form>
            </div>
            <div className="right">
              <div className="img">
                <img
                  src={
                    product.img ||
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
