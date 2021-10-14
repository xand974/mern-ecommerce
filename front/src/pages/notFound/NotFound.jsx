import { useLocation } from "react-router";
import "./notFound.scss";

export default function NotFound() {
  const location = useLocation();
  const PATH_NAME = location.pathname;
  return (
    <div className="not__found">
      <div className="not__found--title">Oups..</div>
      <div className="not__found--body">
        <p>
          The page you are currently looking for : <b> {PATH_NAME} </b> doesn't
          exist!
        </p>
      </div>
    </div>
  );
}
