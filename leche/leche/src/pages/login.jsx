import React from "react";
import Login from "../components/home/Login";
import "../components/home/login.css";
import Regester from "../components/home/Regester";

function login() {
  return (
    <div className="d-flex  flex-wrap  my-3 " style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
      <div className="col-12 ">
        <h2>Sign in to your account</h2>
        <p>
          Our brand new site is live. Please create a new account to explore
          this experience.
        </p>
      </div>
      <div className="col-12 col-lg-6 margenleft ">
        <div className="mx-3">
          <h3> Login</h3>
          <p>If you have an account, please sign in with your email address.</p>

          <Login></Login>
        </div>
      </div>

      <div className="col-12 col-lg-6 margenleft" >
        <div className="mx-4">
          <h3> Create Customer</h3>
          <p>    Creating an account has many benefits: check out faster,
            keep more than one address, track orders and more.</p>

          <Regester></Regester>
        </div>
      </div>
    </div>
  );
}

export default login;
