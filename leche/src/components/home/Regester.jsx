import React, { useState, useRef } from 'react';
import axios from "../../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"

function Regester() {
  const email = useRef(null);
  const password = useRef(null);
  const firstname = useRef(null);
  const lastname = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/user/sign_up', {
      email: email.current.value,
      password: password.current.value,
      first_name: firstname.current.value,
      last_name: lastname.current.value,
    }).then((res) => {
      const message = res.data.message;
      if (message === 'Sign up is successfully') {  
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else if (message === 'This email is already in use') {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    }).catch((error) => {
    });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='my-1 ' htmlFor="firstname">firstname:</label>
        <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="firstname" ref={firstname} />
        <br />
        <label className='my-1 ' htmlFor="lastname">lastname:</label>
        <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="lastname" ref={lastname} />
        <br />
        <label className='my-1 ' htmlFor="email">Email:</label>
        <br /> <input type="email" className='my-1 w-100 bg-white logininput ' id="email" ref={email} />
        <br />
        <label className='my-1 ' htmlFor="password">Password:</label>
        <br />  <input type="password" className='my-1 w-100  bg-white logininput ' id="password" ref={password} />
        <br />
        <button className='my-1 btn w-25 logininput text-light' type="submit" style={{ backgroundColor: "#7DCEA0" }}>Sign up</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Regester;