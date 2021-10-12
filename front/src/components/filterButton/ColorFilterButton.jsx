import "./colorFilterButton.scss";

const ColorFilterButton = ({ color, onClick }) => {
  return (
    <div
      className="color"
      onClick={onClick}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorFilterButton;
