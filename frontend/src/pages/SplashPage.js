import React from 'react';
import SplashActions from '../components/SplashActions';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const SplashPage = () => (
    <main>
        <div className='splashBody'>
            <div>
                <img className='splashCover' src="splash.png"/>
            </div>
            <div className='splashAct'>
                <img />
                <SplashActions />
            </div>
        </div>
        
    </main>
)

export default SplashPage;

