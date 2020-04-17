import React, { useState } from 'react';
import crown from '../../assets/crown.svg';

import './footer.scss';

const Footer = () => {
    const [email, setEmail] = useState('');


    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const submitHandler = () => {
        alert("Thank you for signing up, " + email)
    }

    return (
        <div className='footer-container'>
            <div className='left-container'>
                <img className='logo' src={crown} />
                <h2 className='logo-title'>KING'S CLOSET</h2>
                <p className='logo-copyright'>All rights reserved 2020</p>
            </div>
            <div className='right-container'>
                <form className='form-container'>
                    <label className='label'>
                        Sign Up For Exclusive Access To Offers And Sneak Peeks!
                    </label>
                    <div>
                        <input placeholder='example@gmail.com' className='text-input' type='text' onChange={emailChangeHandler} />
                        <input className='submit' type='submit' value='Submit' onClick={submitHandler} />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Footer;