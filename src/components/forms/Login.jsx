import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './Signup';
import "./Login.css";
import { BrowserRouter, Link, Routes } from 'react-router-dom';

const Login = () => {
<<<<<<< HEAD
  const gotoSignup = () => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <Signup/>
    )
  }
=======
>>>>>>> 2ae5f3decfea812c017fb3d699032497d0db01ec
  return (
    <section className='login-main'>
      <div className='login-box'>
        <h2 className='instagram'>Instakart</h2>
        <section className='login-inputs'>
          <input type="text" placeholder='Phone number,username or email' />
          <input type="text" placeholder='Password' />        
        </section>
        <button className='login-button'>Log in</button>
        <p className='forgot-pw'> <a href=""> Forgot password?</a></p>
      </div>
      <div className='signup-box-alternate'>
<<<<<<< HEAD
        <p>Don't have an account? <a href='#signup' onClick={gotoSignup}>Sign up</a></p>
=======
          <p>Don't have an account?
              <Link to='/signup'>Sign up</Link>
          </p>
>>>>>>> 2ae5f3decfea812c017fb3d699032497d0db01ec
      </div>
    </section>
  )
}

export default Login;