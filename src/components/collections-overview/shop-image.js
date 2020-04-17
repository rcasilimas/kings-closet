import React from 'react';
import shop from '../../assets/img/shop.jpg';
import mens from '../../assets/img/mens.jpg';
import womens from '../../assets/img/womens.jpg';
import shoes from '../../assets/img/shoes.jpg';
import tops from '../../assets/img/tops.jpg';
import bottoms from '../../assets/img/bottoms.jpg';

import './shop-image.scss';
import MenuHeader from '../menu-header/menu-header';

const ShopImage = ({urlParams}) => {
    let shopImageUrl;
    if (urlParams == 'mens') {
        shopImageUrl = mens
    } else if(urlParams == 'womens') {
        shopImageUrl = womens
    } else if(urlParams == 'tops') {
        shopImageUrl = tops
    } else if(urlParams == 'bottoms') {
        shopImageUrl = bottoms
    } else if(urlParams == 'shoes') {
        shopImageUrl = shoes
    } else {
        urlParams = "shop"
        shopImageUrl = shop;
    }


    return (
        <div className='shop-image-container' >
            <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),' + `url("${shopImageUrl}")`}} className='shop-image'>
                <MenuHeader />
                <h1 className='shop-image-text'>{urlParams.toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default ShopImage;