import React, { useEffect, useRef, useState } from 'react';

import './homepage.scss'

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Directory from '../../components/directory/directory';
import TestimonialSlider from '../../components/testimonial/testimonialSlider';
import Slider from '../../components/slider/slider';
import TopPicksContainer from '../../components/top-picks/top-picks-container';


const HomePage = () => {
   /*  const [isHidden, setIsHidden] = useState(true);
    const handleScroll = async () => {
        let position = document.body.scrollTop;
        if (position <= 80) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    };
    

    useEffect(() => {
        document.body.addEventListener('scroll', handleScroll);

        return () => {
        document.body.removeEventListener('scroll', () => handleScroll);
        };
    }, []); */



    return (
    <div>
        <div>
            <Slider autoPlay={5} />
        </div>
        <div className='homepage'>
            <TestimonialSlider autoPlay={4} />
        </div>
        <div className='homepage'>
            <Directory />
        </div>
        <div className='homepage'>
            <TopPicksContainer />
        </div>
    </div>
    )
}

export default HomePage;