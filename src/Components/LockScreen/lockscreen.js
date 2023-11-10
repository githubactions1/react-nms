
import React from 'react'

function lockscreen() {
  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="d-flex align-items-center min-vh-100">
                    <div className="w-100 d-block bg-white shadow-lg rounded my-5">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register rounded-left"></div>
                            <div className="col-lg-7">
                                <div className="p-5">

                                    <div className="text-center mb-5">
                                        <a href="index.html" className="text-dark font-size-22 font-family-secondary">
                                            <i className="mdi mdi-alpha-h-circle"></i> <b>Network Management System</b>
                                        </a>
                                    </div>

                                    <div className="text-center">
                                        <img src="public/assets/images/users/avatar-1.jpg" alt="Generic placeholder img" className="avatar-md rounded-circle img-thumbnail" /> 
                                        <h1 className="h5 mb-1 mt-2">Henry John</h1>
                                        <p className="text-muted mb-4">Enter your password to access the admin.</p>
                                    </div>
                                    
                                    <form>
                                        <div className="form-group">
                                            <label for="enter password">Password</label>
                                            <input type="password" className="form-control form-control-user" id="enter password" placeholder="Enter password" />
                                        </div>
                                        <a href=" " className="btn btn-success btn-block waves-effect waves-light"> Log In </a>
                                      
                                    </form>

                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <p className="text-muted">Not you? return <a href="pages-login.html" className="text-muted font-weight-medium ml-1"><b>Sign In</b></a></p>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
   
</div>
  )
}

export default lockscreen;
