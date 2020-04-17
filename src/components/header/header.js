import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';
import {withRouter} from 'react-router-dom';
import './header.scss';

const Header = ({ history, currentUser, hidden, signOutStart}) => {

    return (
    <div className={(hidden) ? "hidden" : "unhidden"}>
        <div className='title-container'>
            <Link className='header-logo-container' to="/">
                <Logo className='header-logo' />
            </Link>
            <p onClick={() => history.push('/')} className='header-title'>KING'S CLOSET</p>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={signOutStart}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon cartIconColor='black' />
        </div>
    </div>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));