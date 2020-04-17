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
import { withRouter } from 'react-router-dom';
import './nonsticky-header.scss';

const NonstickyHeader = ({ history, currentUser, signOutStart}) => {

    return (
    <div className='nonsticky-header-container'>
        <div className='nonsticky-title-container'>
            <Link className='nonsticky-header-logo-container' to="/">
                <Logo className='nonsticky-header-logo' />
            </Link>
            <p onClick={() => history.push('/')} className='nonsticky-header-title'>KING'S CLOSET</p>
        </div>
        <div className='nonsticky-options'>
            <Link className='nonsticky-option' to='/shop'>
                SHOP
            </Link>
            <Link className='nonsticky-option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='nonsticky-option' onClick={signOutStart}>SIGN OUT</div>
                :
                <Link className='nonsticky-option' to='/signin'>SIGN IN</Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NonstickyHeader));