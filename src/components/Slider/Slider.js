import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "../../data/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider({ slides }) {
  const data = SliderData;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {data.map((item, index) => {
        return (
          <div
            className={index === current ? "slide_active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={item.image} alt="slider_img" className="slider_img" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
