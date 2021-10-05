import "./shape.scss";

export default function Shape({ backgroundColor }) {
  return (
    <div className="shape" style={{ backgroundColor: backgroundColor }}></div>
  );
}
