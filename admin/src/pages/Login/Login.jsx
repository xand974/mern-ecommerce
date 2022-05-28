import { useState } from "react";
import "./login.scss";
import { login } from "redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Loop } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { pending, error } = useSelector((state) => state.auth);

  const HandleClick = async () => {
    await login({ username, password }, dispatch);
    history.push("/");
  };

  return (
    <div className="log">
      <div className="wrapper">
        <div className="text">
          <span>Login</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <div className="btn">
            <button onClick={HandleClick}>
              {pending ? <Loop className="loop" /> : "Se connecter"}
            </button>
          </div>
        </form>
        <span
          className="error"
          style={{
            border: error && "1px solid red",
            boxShadow: error && " 0 0 20px red",
          }}
        >
          {error && "identifiant ou mot de passe incorrect"}
        </span>
      </div>
    </div>
  );
}
