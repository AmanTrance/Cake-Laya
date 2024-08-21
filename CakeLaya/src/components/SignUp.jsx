import React, { useState } from 'react'
import './SignUp.css'
import img1 from '../../public/eye-close.png?url'
import img2 from '../../public/eye-open.png?url'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [hide, setHide] = useState(true);
  const [img, setImg] = useState(img1);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await axios.post('http://localhost:8000/login', JSON.stringify({
      email: email,
      password: password 
    }), {headers:{
      "Content-Type": "application/json"
    }});
    if(response.data.id !== "Not Found"){
      window.sessionStorage.setItem('id', `${response.data.id}`);
      navigate('/dashboard', {state:{
        id: response.data.id,
        username: response.data.username
      }});
    } else {
      alert("Wrong Credentials");
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
            <button id='logbtn' onClick={handleLogin}>Log In</button>
        </div>   
    </div>
  )
}

export default SignUp