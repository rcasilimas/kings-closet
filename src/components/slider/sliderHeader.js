import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';
import './sliderHeader.scss';
import cartDropdown from '../cart-dropdown/cart-dropdown';
import { withRouter } from 'react-router-dom';

const SliderHeader = ({history, currentUser, hidden, signOutStart}) => {
    const [hover, setHover] = useState(false)
    let cartIconColor;
    const hoverHandler = () => {
        setHover(true)
    }

    const unHoverHandler = () => {
        setHover(false)
    }

    if (hover) {
        cartIconColor = "black";
    } else {
        cartIconColor = "white";
    }

    return (
        <div className='slider-header' onMouseEnter={hoverHandler} onMouseLeave={unHoverHandler}>
            <div className='slider-title-container'>
                <Link className='slider-logo-container' to="/">
                    <Logo className='slider-header-logo' />
                </Link>
                <p onClick={() => history.push('/')} className='slider-header-title'>KING'S CLOSET</p>
            </div>
            <div className='slider-header-options'>
                <Link className='slider-header-option' to='/shop'>
                    SHOP
                </Link>
                <Link className='slider-header-option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='slider-header-option' onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link className='slider-header-option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon cartIconColor={cartIconColor} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderHeader));