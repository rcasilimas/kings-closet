import React from 'react';
import './sliderContent.scss';

const SliderContent = (props) => {


    return (
        <div className='slider-content'>
            {props.children}
        </div>
    )
}

export default SliderContent;