import { useState } from "react";
import "./addProduct.scss";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/apiCalls";

export default function AddProduct() {
  const [uploaded, setUploaded] = useState();
  const [userInput, setUserInput] = useState({});
  const [color, setColor] = useState([]);
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const [img, setImg] = useState("eza");

  const handleChange = (e) => {
    setUserInput((prev) => {
      const { value, name } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleClick = () => {
    addProduct(dispatch, { ...userInput, color, size, cat, img });
    history.push("/products");
  };
  const handleUpload = () => {};

  return (
    <div className="add">
      <h3 className="title">New Product</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="bigPicture">Image</label>
          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="img"
            name="img"
          />
        </div>
        <div className="data">
          <label htmlFor="name">Name</label>
          <input
            placeholder="T-Shirt HE3T Crimson"
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="data">
          <label htmlFor="description">Description</label>
          <input
            placeholder="T-Shirt crée par une marque française renommé"
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="data">
          <label htmlFor="quantity">Quantity</label>
          <input
            placeholder="588"
            onChange={handleChange}
            min={0}
            type="number"
            id="quantity"
            name="quantity"
          />
        </div>
        <div className="data">
          <label htmlFor="price">Price</label>
          <input
            onChange={handleChange}
            type="number"
            id="price"
            name="price"
            placeholder="35"
          />
        </div>

        <div className="data">
          <label htmlFor="categories">Catégories</label>
          <input
            placeholder="nike,adidas"
            name="categories"
            onChange={(e) => setCat(e.target.value.split(","))}
            id="categories"
          />
        </div>
        <div className="data">
          <label htmlFor="color">Color</label>
          <input
            placeholder="blue,red"
            name="color"
            onChange={(e) => setColor(e.target.value.split(","))}
            id="color"
          />
        </div>
        <div className="data">
          <label htmlFor="size">Size</label>
          <input
            placeholder="38,39"
            name="size"
            onChange={(e) => setSize(e.target.value.split(","))}
            id="size"
          />
        </div>
        <div className="data">
          <label>Is Stock</label>
          <select onChange={handleChange} name="isStock" id="isStock">
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="data">
          {uploaded === 5 ? (
            <button onClick={HandleClick}>Create</button>
          ) : (
            <button onClick={handleUpload}>Upload</button>
          )}
          <button onClick={HandleClick}>Create</button>
        </div>
      </form>
    </div>
  );
}
