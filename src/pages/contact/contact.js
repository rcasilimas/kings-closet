import React from 'react';
import NonstickyHeader from '../../components/header/nonsticky-header';

import './contact.scss';

const ContactPage = () => {

    const submitHandler = () => {
        alert("Thank you for reaching out to us! We will respond back within 48 hours.")
    }

    return (
        <div className='contact-page'>
        <NonstickyHeader />
            <h1>Contact Us</h1>
            <form className='contact-form' onSubmit={submitHandler}>
                <div className='name-form'>
                    <label className='label'>
                        Your Name:
                    </label>
                    <input required className='name-form-box' type='text' placeholder='Joe Exotic...'></input>
                </div>
                <div className='email-form'>
                    <label className='label'>
                        Your Email:
                    </label>
                    <input required className='email-form-box' type='text' placeholder='CaroleBaskin@gmail.com...'></input>
                </div>
                <div className='description-form'>
                    <label className='label'>
                        How Can We Help You?
                    </label>
                    <textarea required className='description-form-box' type='text' placeholder='Questions, Comments, Concerns, etc...'></textarea>
                </div>
                <div className='submit-form'>
                    <input className='submit-box' type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default ContactPage;