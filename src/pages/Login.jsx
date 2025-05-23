import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
  <div className='login-page'>
      <div className="signin">
        <h1>Signin to your popX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <form className='login-form'>
          <div className='input-group'>
            <label htmlFor="email">Email address<span>*</span></label>
            <input type="email" id='email' placeholder='Enter email address' required/>
            </div>
            <div className='input-group'>
            <label htmlFor="password">Password<span>*</span></label>
            <input type="password" id='password' placeholder='Enter password' required/>
            </div>
            <button className='login-btn' onClick={()=>{navigate('/profile')}}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
