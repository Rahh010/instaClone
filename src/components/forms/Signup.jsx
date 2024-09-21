import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
  const navigateToDecide = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigateToDecide('/decide');
  };

  return (
    <section className='signup-main'>
      <div className='signup-box'>
        <h2 className='instagram'>Instakart</h2>
        <p className='signup-secondary-text'>Sign up to see photos and videos from your friends.</p>
        <form onSubmit={handleSubmit} className='signup-inputs'>
          <input type="text" placeholder='Mobile or email address' required />
          <input type="text" placeholder='Full Name' required />
          <input type="text" placeholder='Username' required />
          <input type="password" placeholder='Password' required />
          <button type='submit' className='signup-button'>Sign Up</button>
        </form>
      </div>
      <div className='login-box-alternate'>
        <p>Have an account? <Link to="/">Log in</Link></p>
      </div>
    </section>
  );
};

export default Signup;
