import React, { useState, useEffect, useRef } from 'react';
import gq from '../../assets/gq.svg';
import vogue from '../../assets/vogue.svg';
import fashion from '../../assets/fashion.svg';
import buzzfeed from '../../assets/buzzfeed.svg';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';
import stars from '../../assets/stars.png'

import'./testimonialSlider.scss';
import SliderContent from './sliderContent';

const TestimonialSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            review: `"The best fit I've ever had shopping online - highly recommend!"`,
            id: 1,
            logo: vogue
        },
        {
            review: `"Comfortable, high quality clothes that don't cost a fortune."`,
            id: 2,
            logo: buzzfeed
        },
        {
            review: `"The most fashionable brand in 2020."`,
            id: 3,
            logo: gq
        },
        {
            review: `"...perfectly done and modestly priced. A winner for any season."`,
            id: 4,
            logo: fashion
        },
    ]

    /* const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = rightHandler
      })
  
      useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
  
        const interval = setInterval(play, props.autoPlay * 1000)
        return () => clearInterval(interval)
      }, []) */

    const leftHandler = () => {
        if (activeIndex == 0) {
            setActiveIndex(3)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }
    const rightHandler = () => {
        if (activeIndex == 3) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }

    return (
        <div className='testimonial-slider-container'>
            <h2>WHAT PEOPLE ARE SAYING</h2>
            <div className='slider-testimonials'>
                <div style={{ cursor: 'pointer' }} onClick={leftHandler}>
                    <img className='leftarrow' src={leftArrow} />
                </div>
                <SliderContent>
                    <h1>{testimonials[activeIndex].review}</h1>
                    <img className='logo' src={testimonials[activeIndex].logo} />
                </SliderContent>
                <div style={{ cursor: 'pointer' }} onClick={rightHandler}>
                    <img className='rightarrow' src={rightArrow} />
                </div>
            </div>
            <div>
                <h2>OVER 5000+ 5 STAR REVIEWS FROM OUR CUSTOMERS!</h2>
                <img src={stars} className='stars' />
            </div>
        </div>
    )
}

export default TestimonialSlider;