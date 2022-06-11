import { useState } from 'react'
// import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
import React from 'react'
import img1 from '/static/slider/img1.jpg'

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({ index: 1, inProgress: false })

  function nextSlide() {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

      setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
      }, 400)

    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

      setSlideAnim({ index: 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false })
      }, 400)

    }
  }

  function prevSlide() {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {

      setSlideAnim({ index: slideAnim.index - 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false })
      }, 400)

    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {

      setSlideAnim({ index: dataSlider.length, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length, inProgress: false })
      }, 400)

    }
  }

  const moveDot = (index: number) => setSlideAnim({ index: index, inProgress: false })

  return (
    <div className='container-slider'>
      {
        dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
            >
              <h3 style={{ textAlign: 'center' }}>{obj.title}</h3>
              <img src={img1} alt="" title={obj.title} />
            </div>
          )
        })
      }
      {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => {
          return <div
            className={slideAnim.index === index + 1 ? 'dot active' : 'dot'}
            onClick={() => moveDot(index + 1)}
          >
          </div>
        })}
      </div>
    </div>
  )
}
