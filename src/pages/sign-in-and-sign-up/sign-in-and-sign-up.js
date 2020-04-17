import React from 'react';

import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'
import NonstickyHeader from '../../components/header/nonsticky-header'

const SignInAndSignUpPage = () => (
    <div>
        <NonstickyHeader />
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUpPage;