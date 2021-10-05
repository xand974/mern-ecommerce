import "./colorFilterButton.scss";

const ColorFilterButton = ({ color }) => {
  return <div className="color" style={{ backgroundColor: color }}></div>;
};

export default ColorFilterButton;
