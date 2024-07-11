import React, { createElement } from 'react';
import ReactDOM from "react-dom/client";
import "./Signup.css";
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigateToDecide = useNavigate()
  function onSubmit() {
    navigateToDecide('/decide')
  }
  return (
    <section className='signup-main'>
      <div className='signup-box'>
        <h2 className='instagram'>Instakart</h2>
        <p className='signup-secondary-text'>Sign up to see photos and videos from your friends.</p>
        <section className='signup-inputs'>
          <input type="text" placeholder='Mobile or email address' />
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />          
        </section>
        <button className='signup-button' onClick={onSubmit}>Sign Up</button>
      </div>
      <div className='login-box-alternate'>
        <p>Have an account? <a href="#">Log in</a></p>
      </div>
    </section>
  )
}

export default Signup ;