import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
       <div className='home-container'>
            <div className="welcome-container">
            <h1 className='welcome'>Welcome to PopX</h1>
            <p className='welcome-message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          <div className='login-signup'>
            <button className='create-account' onClick={() => navigate('/register')}>Create Account</button>
            <button className='already-registered' onClick={() => navigate('/login')}>Already Registered? Login</button>
          </div>
        </div>
      </div>
  )
}

export default Home;
