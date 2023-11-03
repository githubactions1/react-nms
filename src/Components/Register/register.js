import React from 'react'

function Register() {
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
                                                        <i className="mdi mdi-alpha-x-circle"></i> <b>Network Management System
                                                        </b>
                                                    </a>
                                                </div>
                                                <h1 className="h5 mb-1">Create an Account!</h1>
                                                <p className="text-muted mb-4">Don't have an account? Create your own account, it takes less than a minute</p>
                                                <form className="user">
                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                                        </div>
                                                    </div>
                                                    <a href=" " className="btn btn-success btn-block waves-effect waves-light"> Register Account </a>
        
                                                    <div className="text-center mt-4">
                                                        <h5 className="text-muted font-size-16">Sign up using</h5>
                                                    
                                        
                                                    </div>
                                                    
                                                </form>
        
                                                <div className="row mt-4">
                                                    <div className="col-12 text-center">
                                                        <p className="text-muted mb-0">Already have account?  <a href="pages-login.html" className="text-muted font-weight-medium ml-1"><b>Sign In</b></a></p>
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

export default  Register;