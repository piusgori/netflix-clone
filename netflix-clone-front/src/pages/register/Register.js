import React from 'react';
import './register.scss';

const Register = () => {
  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt='logo'></img>
                <button className='loginButton'>Sign in</button>
            </div>
        </div>
        <div className='container'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <input type='email' placeholder='Email address'></input>
            <button className='register'>Get Started</button>
        </div>
    </div>
  )
}

export default Register