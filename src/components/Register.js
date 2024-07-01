import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        name:"",
        email:"",
        password: "",
    });

    // to store value local-storage

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/login")
    }

    return (
        <>
            <div class="main"></div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-5">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">Register</h5>
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group mt-2">
                                        <label for="name">Name</label>
                                        <input
                                        name="name"
                                        value={input.name}
                                        onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                                         type="text" class="form-control" id="name" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="date">Date</label>
                                        <input 
                                        name="date"
                                        value={input.date}
                                        onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                                        
                                        type="date" class="form-control" id="date" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="email">Email</label>
                                        <input 
                                        name="email"
                                        value={input.email}
                                        onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                                        type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <label for="password">Password</label>
                                        <input 
                                        name="password"
                                        value={input.password}
                                        onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}
                                        type="password" class="form-control" id="password" />
                                    </div>
                                    <button 
                                    
                                    class="btn btn-outline-success form-control mt-3">Register</button>
                                    <div class="mt-2" >
                                    <Link to='/login' >Have already an account? <b>Login Here</b></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register