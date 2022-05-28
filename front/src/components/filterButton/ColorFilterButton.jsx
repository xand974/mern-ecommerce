import "./colorFilterButton.scss";

const ColorFilterButton = ({ color, onClick, selected }) => {
  const setSelected = () => {
    return color === selected;
  };
  return (
    <div
      className={`color ${setSelected() ? "active" : ""} `}
      onClick={onClick}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorFilterButton;
