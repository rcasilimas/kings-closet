import React from 'react';

import './sliderContent.scss'

const SliderContent = (props) => {

    return (
        <div className='sliderContent' style={{
            transform: `translateX(-${props.translate}px)`,
            transition: `transform ease-out ${props.transition}s`,
            width: `${props.width}px`,
            }}>
            {props.children}
        </div>
    )
}

export default SliderContent;