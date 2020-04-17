import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIconWhite } from '../../assets/shopping-bag-white.svg';
import { ReactComponent as ShoppingIconBlack } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount, selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-icon.scss';

const CartIcon = ({ history, toggleCartHidden, itemCount, cartIconColor }) => {
    let ShoppingIcon;
    if (cartIconColor == "black") {
        ShoppingIcon = <ShoppingIconBlack className='shopping-icon' />
    } else {
        ShoppingIcon =  <ShoppingIconWhite className='shopping-icon' />
    }

    return (
    <div className='cart-icon' onClick={() => history.push('/checkout')}>
        {ShoppingIcon}
        <span className='item-count'>{itemCount}</span>
    </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIcon));