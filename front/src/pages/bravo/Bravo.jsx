import { useLocation } from "react-router";
import "./bravo.scss";

export default function Bravo() {
  const location = useLocation();
  const res = location.state.res;
  console.log(res);
  return <div className="bravo">bravo</div>;
}
