import React, { createElement } from 'react';
import "./Login.css";

const Login = () => {
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
        <p>Don't have an account? <a href="">Sign up</a></p>
      </div>
    </section>
  )
}

export default Login;