import React, { useState } from 'react'
import './SignUp.css'
import img1 from '../../public/eye-close.png?url'
import img2 from '../../public/eye-open.png?url'

function SignUp() {
  const [hide, setHide] = useState(true);
  const [img, setImg] = useState(img1);

  const handlePassword = () => {
    if (hide === true) {
      setHide(false);
      document.getElementById('password').type = "text";
      setImg(img2);
    } else {
      setHide(true);
      document.getElementById('password').type = "password";
      setImg(img1);
    }
  }

  return (
    <div className='signup'>
        <div id='left'>
        </div>
        <div id='right'>
            <div id='sign-in'>
                <div id='forsign-in'>Sign In!</div>
                <label id='email-label' htmlFor='email'>Email ID</label>
                <input type='text' id='email'/>
                <label id='password-label' htmlFor='password'>Password</label>
                <div id='div-pass'>
                  <input type='password' id='password'/>
                  <img src={img} id='hide' onClick={handlePassword}></img>
                </div>
            </div>
            <div id='link-box'>
                <a href='' target='' id='forgot-link'>Forgot Password?</a>
            </div>
            <button id='logbtn'>Log In</button>
        </div>   
    </div>
  )
}

export default SignUp