import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='register-page'>
      <div className="registration">
        <h1>Create your popX account</h1>
        <form className='registration-form'>
          <div className='input-group'>
            <label htmlFor="name">Full name<span>*</span></label>
            <input type="text" id='name' placeholder='Enter your name' required/>
            </div>
            <div className='input-group'>
            <label htmlFor="number">Phone number<span>*</span></label>
            <input type="number" id='number' placeholder='Enter your number' required/>
            </div>
            <div className='input-group'>
            <label htmlFor="email">Email address<span>*</span></label>
            <input type="email" id='email' placeholder='Enter your email' required/>
            </div>
            <div className='input-group'>
            <label htmlFor="password">Password<span>*</span></label>
            <input type="password" id='password' placeholder='Enter password' required/>
            </div>
            <div className='input-group'>
            <label htmlFor="company">Company name</label>
            <input type="text" id='company' placeholder='Enter your company name'/>
            </div>
            <div className='agency-check'>  
                <p>Are you an Agency?<span>*</span></p>
                <div>
                <input type="radio" name="agree" value="yes" /><label>Yes</label>
                <input type="radio" name="agree" value="no" /><label>No</label>
                </div>
                </div>
                <button className='registration-button' type='submit' onClick={()=>{navigate('/profile')}}>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
