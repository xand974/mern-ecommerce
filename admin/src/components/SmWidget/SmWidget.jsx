import { Check, Close, Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/apiCalls";
import "./smWidget.scss";

export default function SmWidget() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    fetchUsers(dispatch, true);
  }, [dispatch]);

  return (
    <div className="smWidget">
      <h3 className="members__text">New Join Members</h3>
      <div className="wrapper">
        {users?.map((user, key) => {
          return (
            <div className="display__user" key={key}>
              <img
                src={
                  user?.img ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGiMXujrwq5L7xmQIr22E5r87Q57B5e5BCnZZ93e4Ad5fToDjuLElDAI1YDhiTtpxZt4&usqp=CAU"
                }
                alt=""
              />
              <div className="infos">
                <span className="name">{user.username}</span>
                <span className="job">
                  admin : {user.isAdmin ? <Check /> : <Close />}
                </span>
              </div>
              <Link to={{ pathname: "/user/:id", user: user }}>
                <li className="infos__link">
                  <Visibility /> display
                </li>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
