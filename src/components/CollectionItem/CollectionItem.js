import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button'
import ProductPage from '../../pages/product/product';

import './CollectionItem.scss';
import { fetchProductPage } from '../../redux/shop/shop-actions';
import { selectProduct } from '../../redux/shop/shop-selectors';

const CollectionItem = ({ item, selectProduct }) => { 
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <CustomButton onClick={() => selectProduct(item)} inverted> Add to cart </CustomButton>
        </div>
    ); 
}

const mapDispatchToProps = dispatch => ({
    selectProduct: item => dispatch(fetchProductPage(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);