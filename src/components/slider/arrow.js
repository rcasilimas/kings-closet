import React from 'react';
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'
import './arrow.scss';

const Arrow = ({ direction, handleClick }) => {


    return (
        <div onClick={handleClick} className={direction}>
            {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
        </div>
    )
}

export default Arrow;