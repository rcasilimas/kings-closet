import React from 'react';
import SliderHeader from './sliderHeader';
import './slide.scss';
import CustomButton from '../custom-button/custom-button';
import { withRouter } from 'react-router-dom';
import MenuHeader from '../menu-header/menu-header';

const Slide = ({history, content}) => {

    return (
        <div 
            style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),' + `url("${content}")`
            }}
            className='slide' 
        >
            <SliderHeader />
            <MenuHeader />
            <div className='box'>
                <h1>BUILT FOR THE MODERN MAN</h1>
                <h3>URBAN DESIGN</h3>
                <h3>TIMELESS STYLE</h3>
            </div>
            <div className='buttons-container'>
                <CustomButton onClick={() => history.push('/shop/mens')} inverted style={{
                    border: 0,
                    margin: '10px'
                }}>
                    SHOP MENS
                </CustomButton>
                <CustomButton onClick={() => history.push('/shop/womens')} inverted style={{
                    border: 0,
                    margin: '10px'
                }}>
                 SHOP WOMENS
                </CustomButton>
            </div>
        </div>
    )
}

export default withRouter(Slide);