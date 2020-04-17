import React from 'react';

import './size-box.scss';

const SizeBox = ({size, changeActive, active}) => {

    return (
        <div onClick={() => changeActive(size)} className={(active == size) ? 'size-picker-box-active' : 'size-picker-box'}>
            <p className='size'>{size}</p>
        </div>
    )
}

export default SizeBox;