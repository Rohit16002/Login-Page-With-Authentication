import React from 'react'

const Register = () => {
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
                                <form action="">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="date">Date</label>
                                        <input type="date" class="form-control" id="date" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" />
                                    </div>
                                    <button class="btn btn-outline-success form-control mt-3">Register</button>
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