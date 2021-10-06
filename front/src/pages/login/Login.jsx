import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./login.scss";
export default function Login() {
  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt=""
      />
      <div className="container">
        <h1>CONNEXION</h1>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" placeholder="john@gmail.com" />
          <label htmlFor="password">PASSWORD</label>
          <input type="text" placeholder="abc123?." id="password" />
          <button>
            <LoginOutlined />
          </button>
        </form>
        <Link to="/register">
          Vous n'avez pas de compte ?{" "}
          <span className="create__account__text">Créer un compte</span>
        </Link>
      </div>
    </div>
  );
}
