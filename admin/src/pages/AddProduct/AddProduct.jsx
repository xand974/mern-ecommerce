import { useState } from "react";
import "./addProduct.scss";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

export default function AddProduct() {
  const [uploaded, setUploaded] = useState();

  const HandleChange = () => {};
  const HandleClick = () => {};
  const handleUpload = () => {};

  return (
    <div className="add">
      <h3 className="title">New Movie</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="bigPicture">Image</label>
          <input type="file" id="img" name="bigPicture" />
        </div>
        <div className="data">
          <label htmlFor="quantity">Quantity</label>
          <input min={0} type="number" id="quantity" name="quantity" />
        </div>
        <div className="data">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" />
        </div>

        <div className="data">
          <label htmlFor="categories">Catégories</label>
          <select
            multiple
            name="categories"
            onChange={HandleChange}
            id="categories"
          >
            <option>Jean</option>
            <option>Man</option>
            <option>Woman</option>
            <option>Shoes</option>
            <option>Regular</option>
            <option>Slim</option>
            <option>Low</option>
            <option>Nike</option>
          </select>
        </div>
        <div className="data">
          <label htmlFor="size">Size</label>
          <select multiple name="size" onChange={HandleChange} id="size">
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="data">
          <label>Is Stock</label>
          <select onChange={HandleChange} name="isStock" id="isStock">
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
        </div>
      </form>
    </div>
  );
}
