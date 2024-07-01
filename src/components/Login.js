import React from 'react'
import './Page.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate();
  const [input,setInput] = useState({
    name:"",
    password: "",
});

const handleLogin = (e) => {
  e.preventDefault();
  const loggeduser = JSON.parse(localStorage.getItem("user"));
  if(input.name === loggeduser.name && input.password === loggeduser.password){
    localStorage.setItem("loggedin",true);
    navigate("/")
  }else{
    alert("wrong Username or Password")
  }
}
  return (
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="br-rds col-xs-12 col-sm-8 col-md-6 col-lg-5">
          <div class="card">
            <div class="card-body my-card">
              <div class="card-header">
                <h5 class="text-center">SIGN IN</h5>
              </div>

              <div class="d-flex justify-content-center my-4">
                <i class="fa-solid fa-circle-user fa-5x"></i>
              </div>
              <form onSubmit={handleLogin}>
                <div class="form-group mt-3 position-relative">
                  <i class="fa-solid fa-user fa-xl my-user"></i>
                  <input 
                  name="name"
                  value={input.name}
                  onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                  
                  type="text" class="form-control ps-5" placeholder="username" />
                </div>
                <div class="form-group mt-3 position-relative">
                  <i class="fa-solid fa-lock fa-xl my-user"></i>
                  <input 
                  name="password"
                  value={input.password}
                  onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                  
                  type="password" class="form-control ps-5" placeholder="password" />
                </div>
                <button class="btn btn-outline-success form-control mt-4">LOGIN</button>
                <div class="mt-4">
                <Link to="/register" >Don't have an account? <b>Register Here</b></Link>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login