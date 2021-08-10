import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { login } from "./Reducer/userReducer";
import "./Login.css";
function Login() {

  const [loginUser, setUser] = useState({
    name:"",
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...loginUser,[name]: value });
  };
  const dispatch= useDispatch();
  const handleSubmit = (e) => {
     e.preventDefault();

     dispatch(login({
       name:loginUser.name,
       email:loginUser.email,
       password:loginUser.password,
       loggedIn:true,
      })
      );
  };
  return (
    <>
    

    <div className="loginform">
      <form onSubmit={(e)=>handleSubmit(e)} >
      <h1> Login Form</h1>
      
        <input
          type="text"
          value={loginUser.name}
          onChange={handleInput}
          placeholder="Enter Your Name"
          name="name"
          id="name"
        />
        <br />
        <input
          type="email"
          value={loginUser.email}
          onChange={handleInput}
          placeholder="Enter Your Email"
          name="email"
          id="email"
        />
        <br />

        <input
          type="mobile"
          value={loginUser.mobile}
          onChange={handleInput}
          placeholder="Enter Your Mobile Number"
          name="mobile"
          id="mobile"
        />

        <br />
    
        <input
          type="password"
          value={loginUser.password}
          onChange={handleInput}
          placeholder="Enter Your Password"
          name="password"
          id="password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
    </>
  );
  
}



export default Login;