import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./slider.scss";

export default function Slider() {
  return (
    <div className="slider">
      <div className="wrapper">
        <ArrowBackIos className="arrow left" />
        <div className="slider__images">
          <div className="slider__container">
            <img
              src="https://images.unsplash.com/photo-1599255068390-206e0d068539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"
              alt=""
            />
          </div>

          <div className="slider__container">
            <img
              src="https://images.unsplash.com/photo-1523647341782-d761bce0004c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>

          <div className="slider__container">
            <img
              src="https://images.unsplash.com/photo-1505308088817-f1e3cb2a2f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>

          <div className="slider__container">
            <img
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
        </div>
        <ArrowForwardIos className="arrow right" />
      </div>
    </div>
  );
}
