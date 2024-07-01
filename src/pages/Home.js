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
            <div class="card-header">
                                <h5 class="card-title">Output Table</h5>
                            </div>

              <table class="table align-middle mb-0 bg-white   br-rds col-xs-10 col-sm-8 col-md-6 col-lg-5">
                <thead class="bg-light">
                  <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>email</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>1</span> 
                    </td>
                    <td>
                      <span>{userName.name}</span> 
                    </td>
                    <td>
                      <span>{userName.date}</span> 
                    </td>
                    <td>
                      <span>{userName.email}</span> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>3</span> 
                    </td>
                    <td>
                      <span>rohit</span> 
                    </td>
                    <td>
                      <span>2024-12-31</span> 
                    </td>
                    <td>
                      <span>rohit@google.com</span> 
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>3</span> 
                    </td>
                    <td>
                      <span>John Doe</span> 
                    </td>
                    <td>
                      <span>2024-07-04</span> 
                    </td>
                    <td>
                      <span>john.doe@gmail.com</span> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>4</span> 
                    </td>
                    <td>
                      <span>Kate Hunington</span> 
                    </td>
                    <td>
                      <span>2024-11-14</span> 
                    </td>
                    <td>
                      <span>kate.hunington@gmail.com</span> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>5</span> 
                    </td>
                    <td>
                      <span>Alex Ray</span> 
                    </td>
                    <td>
                      <span>2024-10-22</span> 
                    </td>
                    <td>
                      <span>alex.ray@gmail.com</span> 
                    </td>
                  </tr>





                </tbody>
              </table>

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