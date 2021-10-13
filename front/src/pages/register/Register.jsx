import "./register.scss";
import { CreateOutlined } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { register } from "redux/apiCall";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    register({ username, password }, dispatch, history);
  };
  return (
    <div className="register">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt=""
      />
      <div className="container">
        <h1>S'ENREGISTRER</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">USERNAME</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="john000"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="abc123?."
            id="password"
          />
          <button onClick={handleClick}>
            <CreateOutlined />
          </button>
          {error && <span style={{ color: "red" }}>Something happened</span>}
        </form>
        <Link to="/login">
          <span className="create__account__text">Se connecter</span>
        </Link>
      </div>
    </div>
  );
}
