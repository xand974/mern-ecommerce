import {
  CalendarTodayOutlined,
  CloudUploadOutlined,
  EmailOutlined,
  LocationCityOutlined,
  PermIdentityOutlined,
  PhoneOutlined,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.scss";

export default function User() {
  const location = useLocation();
  const user = location.user;
  console.log(user);

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
              <form>
                <label htmlFor="username">Username</label>
                <input placeholder={user?.username} type="text" id="username" />

                <label htmlFor="fullname">Full Name</label>
                <input placeholder={user?.fullName} type="text" id="fullname" />

                <label htmlFor="email">Email</label>
                <input placeholder={user?.email} type="text" id="email" />

                <label htmlFor="phone">Phone</label>
                <input placeholder={user?.phone} type="text" id="phone" />

                <label htmlFor="address">Address</label>
                <input placeholder={user?.address} type="text" id="adresse" />
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
              <button className="btn__update">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
