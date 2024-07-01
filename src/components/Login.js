import React from 'react'
import './Page.css'

const Login = () => {
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
              <form action="">
                <div class="form-group mt-3 position-relative">
                  <i class="fa-solid fa-user fa-xl my-user"></i>
                  <input type="text" class="form-control ps-5" placeholder="username" />
                </div>
                <div class="form-group mt-3 position-relative">
                  <i class="fa-solid fa-lock fa-xl my-user"></i>
                  <input type="password" class="form-control ps-5" placeholder="password" />
                </div>
                <button class="btn btn-outline-success form-control mt-4">LOGIN</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login