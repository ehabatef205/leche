import React, { useRef, useState } from 'react';
import "./login.css"
import axios from "../../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.removeItem("AuthBrook")
    axios.post('/user/login', { email: email.current.value, password: password.current.value }).then(async (res) => {
      const message = res.data.message;
      console.log(message)
      if (message === 'Login Successful!') {
        localStorage.setItem("AuthBrook", "Bearer " + res.data.token);
        navigate('/', { replace: true });
      } else if (message === "email or password is invalid") {
        toast.warning(message, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
      }
    }).catch((error) => {
    })
  };

  const handleResetSubmit = (event) => {
    event.preventDefault();

    setResetMessage(`Password reset link sent to ${resetEmail}`);
  };

  const handleResetCancel = () => {
    setShowResetForm(false);
    setResetEmail('');
    setResetMessage('');
  };

  return (
    <div className='margenleft' style={{ position: "relative", width: "100%" }}>
      <form onSubmit={handleSubmit} style={{ fontSize: "1.6rem" }}>
        <label className='my-1 ' htmlFor="email">Email:</label> <br />
        <input className='my-1 w-100 bg-white logininput ' type="email" id="email" ref={email} />
        <br />
        <label className='my-1' htmlFor="password">Password:</label> <br />
        <input className='my-1 w-100  bg-white logininput' type="password" id="password" ref={password} />
        <br />
        <button className='my-1 btn w-25 logininput text-light' type="submit" style={{ backgroundColor: "#7DCEA0" }}>Login</button> <br />
        <button className='my-1 bg-white' type="button" style={{ border: "none", fontSize: "0.9rem" }} onClick={() => setShowResetForm(true)}>Forgot your password?</button>
      </form>
      {showResetForm && (
        <div>
          <form onSubmit={handleResetSubmit}>
            <div className='w-100 col-12 my-2'>
              <h4>
                Reset your password
              </h4>
              <p>
                We will send you an email to reset your password

              </p>
            </div>
            <label className='my-1' htmlFor="reset-email">Enter your email:</label><br />
            <input className='my-1 w-50 bg-white logininput ' type="email" id="reset-email" value={resetEmail} onChange={(event) => setResetEmail(event.target.value)} required />
            <br />
            <button className=' btn w-25 logininput text-light ' style={{ backgroundColor: "#7DCEA0" }} type="submit">Reset Password</button>
            <button type="button" className='my-1 mx-2  w-25 logininput btn btn-outline-secondary' onClick={handleResetCancel}>Cancel</button>
          </form>
          {resetMessage && <p>{resetMessage}</p>}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Login;