import { useLocation } from "react-router";
import "./bravo.scss";

export default function Bravo() {
  const location = useLocation();
  console.log(location);
  return <div className="bravo">bravo</div>;
}
