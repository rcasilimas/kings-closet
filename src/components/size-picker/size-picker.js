import React, { useState, useEffect } from 'react';
import SizeBox from './size-box';

import './size-picker.scss';

const SizePicker = ({productType, sizeHandler, sizePicked}) => {
    const [active, setActive] = useState(false);
    let array;
    const clickHandler = (size) => {
        setActive(size)
        sizeHandler(size)
    }

    useEffect(() => {
        if (sizePicked == false) {
            setActive(false)
        }
    }, [sizePicked])

    

    if (productType == 'shoes') {
        array = [
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
        ]
    } else {
        array = [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ]
    }


    return (
    <div className='size-picker-container'>
        {array.map(size => (
            <SizeBox size={size} changeActive={clickHandler} active={active} />
        ))}
    </div>
    )
}

export default SizePicker;