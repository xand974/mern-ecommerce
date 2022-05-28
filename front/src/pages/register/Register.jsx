import "./register.scss";
import { CreateOutlined, LoopOutlined } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { register } from "redux/apiCall";
import { useDispatch } from "react-redux";

export default function Register() {
  const [credential, setCredential] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = async () => {
    try {
      setLoading(true);
      await register({ ...credential }, dispatch);
      history.push("/login");
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <label htmlFor="username">USERNAME</label>
          <input
            required
            onChange={onChange}
            type="text"
            id="username"
            placeholder="john000"
            name="username"
          />
          <label htmlFor="email">EMAIL</label>
          <input
            required
            onChange={onChange}
            type="text"
            id="email"
            placeholder="john@gmail.com"
            name="email"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            required
            onChange={onChange}
            type="password"
            placeholder="abc123?."
            id="password"
            name="password"
          />
          <button onClick={handleClick}>
            {loading ? <LoopOutlined className="loop" /> : <CreateOutlined />}
          </button>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Something happened
            </span>
          )}
        </form>
        <Link to="/login">
          <span className="create__account__text">Se connecter</span>
        </Link>
      </div>
    </div>
  );
}
