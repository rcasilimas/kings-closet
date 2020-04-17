import React from 'react';

import './dots.scss'

const Dot = ({ active }) => {

    let activeDot = 'unactive';

    if (active) {
        activeDot = 'active'
    }

    
    return (
    <span 
        className={activeDot}
    />
    )
}

const Dots = ({ slides, activeIndex }) => {
    return (
        <div className='dots'>
            {slides.map((slide, i) => (
                <Dot key={slide} active={activeIndex === i} />
            ))}
        </div>
    )
}

export default Dots;