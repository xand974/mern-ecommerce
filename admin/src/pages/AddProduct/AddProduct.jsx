import { useState } from "react";
import "./addProduct.scss";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/apiCalls";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "firebase.config";

export default function AddProduct() {
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userInput, setUserInput] = useState({});
  const [color, setColor] = useState([]);
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const [img, setImg] = useState();

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
    addProduct(dispatch, { ...userInput, color, size, categories: cat });
    history.push("/products");
  };
  const handleUpload = () => {
    upload([{ file: img, label: "img" }]);
  };
  console.log(cat);
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = Date.now() + "_" + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUserInput((prev) => {
              return {
                ...prev,
                [item.label]: url,
              };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

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
          {uploaded === 1 ? (
            <button onClick={HandleClick}>Create</button>
          ) : (
            <button onClick={handleUpload}>Upload {progress}%</button>
          )}
        </div>
      </form>
    </div>
  );
}
