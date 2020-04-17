import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user-actions';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { withRouter } from 'react-router-dom';
import backArrow from '../../assets/backArrow.svg'

import './menu-dropdown.scss';

const MenuDropdown = ({currentUser, signOutStart, history}) => {


    return (
        <div className='menu-dropdown-container'>
            <div className='menu-dropdown'>
                <div className='menu-dropdown-header'>
                    <img className='back-arrow' src={backArrow} onClick={() => history.goBack()} />
                    <h1>MENU</h1>
                </div>
                <Link className='menu-dropdown-link' to='/'>HOME</Link>
                <Link className='menu-dropdown-link' to='/shop/mens'>SHOP MENS</Link>
                <Link className='menu-dropdown-link' to='/shop/womens'>SHOP WOMENS</Link>
                <Link className='menu-dropdown-link' to='/contact'>CONTACT US</Link>
                {
                    currentUser ? 
                    <div className='menu-dropdown-link' onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link className='menu-dropdown-link' to='/signin'>SIGN IN</Link>
                }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuDropdown));