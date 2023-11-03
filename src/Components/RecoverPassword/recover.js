import React from 'react'

function RecoverPassword() {
  return (
    <div> 
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="d-flex align-items-center min-vh-100">
                    <div className="w-100 d-block bg-white shadow-lg rounded my-5">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-login rounded-left"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center mb-5">
                                        <a href="index.html" className="text-dark font-size-22 font-family-secondary">
                                            <i className="mdi mdi-alpha-x-circle"></i> <b>Network Management System</b>
                                        </a>
                                    </div>
                                    <h1 className="h5 mb-1">Reset Password</h1>
                                    <p className="text-muted mb-4">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail">Email Address</label>
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                                        </div>
                                        <a href="z" className="btn btn-success btn-block waves-effect waves-light"> Log In </a>
                                        
                                    </form>

                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <p className="text-muted">Already have account?  <a href="/" className="text-muted font-weight-medium ml-1"><b>Sign In</b></a></p>
                                            <p className="text-muted mb-0">Don't have an account? <a href="register" className="text-muted font-weight-medium ml-1"><b>Sign Up</b></a></p>
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

export default RecoverPassword;
