import "./register.scss";
import { CreateOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt=""
      />
      <div className="container">
        <h1>S'ENREGISTRER</h1>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" placeholder="john@gmail.com" />
          <label htmlFor="password">PASSWORD</label>
          <input type="text" placeholder="abc123?." id="password" />
          <button>
            <CreateOutlined />
          </button>
        </form>
        <Link to="/login">
          <span className="create__account__text">Se connecter</span>
        </Link>
      </div>
    </div>
  );
}
