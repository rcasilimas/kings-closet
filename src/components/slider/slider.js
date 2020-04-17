import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './sliderContent';
import Slide from './slide';
import Arrow from './arrow';
import Dots from './dots';
import slider1 from '../../assets/img/slider1.jpg'
import slider2 from '../../assets/img/slider2.jpg'
import slider3 from '../../assets/img/slider3.jpg'
import slider4 from '../../assets/img/slider4.jpg'
import './slider.scss';

const getWidth = () => window.innerWidth

const Slider = (props) => {
  console.log(getWidth());
    const slides = [
      slider1,
      slider2,
      slider3,
      slider4
    ]
    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        activeIndex: 0,
        translate: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
    })
    const { translate, transition, activeIndex, _slides } = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(() => {
      autoPlayRef.current = nextSlide
      transitionRef.current = smoothTransition
      resizeRef.current = handleResize
    })

    useEffect(() => {
      const play = () => {
        autoPlayRef.current()
      }

      const smooth = e => {
        if (e.target.className.includes('sliderContent')) {
          transitionRef.current()
        }
      }

      const resize = () => {
        resizeRef.current()
      }

      const interval = setInterval(play, props.autoPlay * 1000)
      const transitionEnd = window.addEventListener('transitionend', smooth)
      const onResize = window.addEventListener('resize', resize)
      return () => {
        clearInterval(interval)
        window.removeEventListener('transitionend', transitionEnd)
        window.removeEventListener('resize', onResize)
      }
    }, [])

    useEffect(() => {
      if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const handleResize = () => {
      setState({ ...state, translate: getWidth(), transition: 0 })
    }
    
  
    const smoothTransition = () => {
        let _slides = []
    
        // We're at the last slide.
        if (activeIndex === slides.length - 1)
          _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeIndex - 1, activeIndex + 2)
    
        setState({
          ...state,
          _slides,
          transition: 0,
          translate: getWidth()
        })
    }

    

      const nextSlide = () => {
/*         if (activeIndex === slides.length - 1) { */
          return setState({
            ...state,
            translate: translate + getWidth(),
            activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
          })
       // }
    
   /*      setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * getWidth()
        }) */
      }
    
      const prevSlide = () => {
       /*  if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (slides.length - 1) * getWidth(),
            activeIndex: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
          })
        } */
    
        setState({
          ...state,
          activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
          translate: 0
        })
      }

    return (
        <div className='slider'>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
        >
        {_slides.map((_slide, i) => (
            <Slide width={getWidth()} key={_slide + i} content={_slide} />
          ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
            <Dots slides={slides} activeIndex={activeIndex} />
        </div>
        
    )
}

export default Slider;