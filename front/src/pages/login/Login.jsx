import { LoginOutlined, LoopOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "redux/apiCall";
import "./login.scss";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, pending } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    login({ username, password }, dispatch);
  };
  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt=""
      />
      <div className="container">
        <h1>CONNEXION</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="john@gmail.com"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="abc123?."
            id="password"
          />
          <button onClick={handleClick}>
            {pending ? <LoopOutlined className="loop" /> : <LoginOutlined />}
          </button>
          {error && <span style={{ color: "red" }}>Something happened..</span>}
        </form>
        <Link to="/register">
          Vous n'avez pas de compte ?{" "}
          <span className="create__account__text">Créer un compte</span>
        </Link>
      </div>
    </div>
  );
}
