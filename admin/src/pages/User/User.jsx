import {
  CalendarTodayOutlined,
  CloudUploadOutlined,
  EmailOutlined,
  LocationCityOutlined,
  PermIdentityOutlined,
  PhoneOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { updateUser } from "redux/apiCalls";
import "./user.scss";

export default function User() {
  const location = useLocation();
  const user = location.user;
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreate = () => {
    updateUser(dispatch, user?._id, userInput);
    history.push("/users");
  };

  return (
    <div className="user">
      <div className="title">
        <h3>Edit User</h3>
        <Link to="/new/user">
          <span>Create</span>
        </Link>
      </div>
      <div className="wrapper">
        <div className="profile">
          <div className="picture">
            <img
              src={
                user?.img ||
                "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              alt=""
            />
            <div className="infos">
              <span>{user?.fullName}</span>
              <span>{user?.job}</span>
            </div>
          </div>
          <div className="account">
            <p>Account Details</p>

            <span>
              <PermIdentityOutlined className="icon" /> {user?.username}
            </span>
            <span>
              <CalendarTodayOutlined className="icon" /> {user?.birth}
            </span>
          </div>
          <div className="account">
            <p>Contact Details</p>
            <span>
              {" "}
              <PhoneOutlined className="icon" /> {user?.phone}{" "}
            </span>
            <span>
              <EmailOutlined className="icon" /> {user?.email}
            </span>
            <span>
              <LocationCityOutlined className="icon" /> {user?.city}
            </span>
          </div>
        </div>
        <div className="edit">
          <h3>Edit</h3>
          <div className="wrapper">
            <div className="left">
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  onChange={handleChange}
                  placeholder={user?.username}
                  type="text"
                  id="username"
                />

                <label htmlFor="fullname">Full Name</label>
                <input
                  name="fullName"
                  onChange={handleChange}
                  placeholder={user?.fullName}
                  type="text"
                  id="fullname"
                />

                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  onChange={handleChange}
                  placeholder={user?.email}
                  type="text"
                  id="email"
                />

                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  placeholder={user?.phone}
                  type="text"
                  id="phone"
                />

                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  onChange={handleChange}
                  placeholder={user?.address}
                  type="text"
                  id="address"
                />
                <label htmlFor="isAdmin">isAdmin</label>
                <select
                  name="isAdmin"
                  onChange={handleChange}
                  htmlFor="isAdmin"
                >
                  <option value="">Selectionner</option>
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </select>
              </form>
            </div>
            <div className="right">
              <div className="img">
                <img
                  src={
                    user?.img ||
                    "https://www.verywellmind.com/thmb/IeZeA3IaM9a6P8df_hIdUpu4hw0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg"
                  }
                  alt=""
                />
                <button>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input className="form__file" type="file" id="file" />
                    <label htmlFor="file">
                      <CloudUploadOutlined />
                    </label>
                  </form>
                </button>
              </div>
              <button onClick={handleCreate} className="btn__update">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
