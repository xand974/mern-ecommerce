import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createUser } from "redux/apiCalls";
import "./add.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "firebase.config";

export default function Add() {
  const [userInput, setUserInput] = useState({});
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setUserInput((prev) => {
      const { value, name } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpload = () => {
    upload([{ file: img, label: "img" }]);
  };
  const upload = (items) => {
    items.forEach((item) => {
      const fileName = Date.now() + "_" + item.file.name;
      const storageRef = ref(storage, `/items/users/${fileName}`);
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

  const handleCreate = () => {
    createUser(dispatch, userInput);
    history.push("/users");
  };
  return (
    <div className="add">
      <h3 className="title">New User</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="anabeck"
            type="text"
            id="username"
          />
        </div>
        <div className="data">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={handleChange}
            placeholder="abcd123!"
            type="password"
            id="password"
          />
        </div>
        <div className="data">
          <label htmlFor="fullname">Full Name</label>
          <input
            name="fullName"
            onChange={handleChange}
            placeholder="anna back"
            type="text"
            id="fullname"
          />
        </div>
        <div className="data">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="annaback@gmail.com"
            type="text"
            id="email"
          />
        </div>
        <div className="data">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="06 98 75 32 45"
            type="text"
            id="phone"
          />
        </div>
        <div className="data">
          <label htmlFor="city">City</label>
          <input
            name="city"
            onChange={handleChange}
            placeholder="New York US"
            type="text"
            id="city"
          />
        </div>
        <div className="data">
          <label htmlFor="birth">Birth</label>
          <input
            name="birth"
            onChange={handleChange}
            placeholder="10-06-1998"
            type="date"
            id="birth"
          />
        </div>
        <div className="data">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            onChange={handleChange}
            placeholder="New York | USA"
            type="text"
            id="adresse"
          />
        </div>
        <div className="data">
          <label htmlFor="gender">Gender</label>
          <div className="radioItem">
            <input
              name="genre"
              onChange={handleChange}
              type="radio"
              id="male"
              value="homme"
            />
            <label htmlFor="male">Homme</label>

            <input
              onChange={handleChange}
              type="radio"
              name="genre"
              id="female"
              value="femme"
            />
            <label htmlFor="female">Femme</label>

            <input
              onChange={handleChange}
              type="radio"
              name="genre"
              id="other"
              value="other"
            />

            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="data">
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            name="img"
          />
        </div>
        <div className="data">
          <label htmlFor="isAdmin">isAdmin</label>
          <select onChange={handleChange} name="isAdmin" id="isAdmin">
            <option value="">Selectionnez une valeur</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="data">
          <label htmlFor="job">Job</label>

          <input
            placeholder="software engineer"
            onChange={handleChange}
            type="text"
            name="job"
            id="job"
          />
        </div>
        {uploaded === 1 ? (
          <div className="data">
            <button onClick={handleCreate}>Create</button>
          </div>
        ) : (
          <div className="data">
            <button onClick={handleUpload}>Edit Photo {progress}%</button>
          </div>
        )}
      </form>
    </div>
  );
}
