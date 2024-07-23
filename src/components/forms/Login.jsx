import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className='login-main'>
      <div className='login-box'>
        <h2 className='instagram'>Instakart</h2>
        <form onSubmit={handleSubmit} className='login-inputs'>
          <input type="text" placeholder='Phone number, username, or email' required />
          <input type="password" placeholder='Password' required />
          <button type='submit' className='login-button'>Log in</button>
        </form>
        <p className='forgot-pw'>
          <a href="">Forgot password?</a>
        </p>
      </div>
      <div className='signup-box-alternate'>
        <p>Don't have an account?
          <Link to='/signup'> Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
