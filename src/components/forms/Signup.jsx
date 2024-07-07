import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <section className='signup-main'>
      <div className='signup-box'>
        <h2 className='instagram'>Instacart</h2>
        <p className='signup-secondary-text'>Sign up to see photos and videos from your friends.</p>
        <section className='signup-inputs'>
          <input type="text" placeholder='Mobile or email address' />
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Username' />
          <input type="text" placeholder='Password' />          
        </section>
        <button className='signup-button'>Sign Up</button>
      </div>
      <div className='login-box-alternate'>
        <p>Have an account? <a href="">Log in</a></p>
      </div>
    </section>
  )
}

export default Signup 