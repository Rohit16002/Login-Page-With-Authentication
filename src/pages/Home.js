import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login")
  }

  return (
    <>
      <div class="container">


        <div class="row justify-content-center mt-5">


          <div class="br-rds col-xs-12 col-sm-8 col-md-6 col-lg-5">
            <div class="card">
              <h1>Welcome {userName.name} </h1>

              <button 
              onClick={handleLogout}
              type="button"
              class="btn btn-success form-control width-5 ">Logout</button>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home