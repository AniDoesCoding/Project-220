import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';

const SplashActions = () => {
    return(
        <>
            <button><Link to={'/home'}>Login</Link></button> <br />
            <button>Sign Up</button> <br />
            <a>Learn More</a>
        </>
    )
    
}

export default SplashActions;