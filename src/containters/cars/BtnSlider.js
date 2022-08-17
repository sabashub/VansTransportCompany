import React from "react";
import "./Slider.css";
import leftArrow from '../cars/Icons/left-arrow.svg';
import rightArrow from '../cars/Icons/right-arrow.svg';

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}