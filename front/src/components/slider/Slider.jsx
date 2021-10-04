import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef, useState } from "react";
import "./slider.scss";
import { slideItems } from "mockData";

export default function Slider() {
  var [slideIndex, setSlideIndex] = useState(0);
  const sliderContainer = useRef();
  const handleSliderClick = (direction) => {
    // console.log(slideIndex);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideItems.length - 1);
      sliderContainer.current.style.transform = `translateX( ${
        -80 * slideIndex
      }vw)`;
    } else if (direction === "right") {
      setSlideIndex(slideIndex < slideItems.length - 1 ? slideIndex + 1 : 0);
      sliderContainer.current.style.transform = `translateX( ${
        -80 * slideIndex
      }vw)`;
    }
  };

  return (
    <div className="slider">
      <div className="wrapper">
        <ArrowBackIos
          className="arrow left"
          onClick={() => {
            handleSliderClick("left");
          }}
        />
        <div className="slider__images" ref={sliderContainer}>
          {slideItems.map((item, key) => {
            return (
              <div className="slider__container" key={key}>
                <img src={item.img} alt="" />
                <div className="container__infos">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button>COMMANDER</button>
                </div>
              </div>
            );
          })}
        </div>
        <ArrowForwardIos
          className="arrow right"
          onClick={() => {
            handleSliderClick("right");
          }}
        />
      </div>
    </div>
  );
}
