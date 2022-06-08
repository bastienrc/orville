import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

interface BtnSliderProps {
  moveSlide?: () => void;
  direction?: string;
}

const BtnSlider: React.FC<BtnSliderProps> = ({ moveSlide, direction }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="Icone de flèche" />
    </button>
  )
}

export default BtnSlider
