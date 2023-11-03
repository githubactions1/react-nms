import React, { useState } from 'react';

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = 'http://localhost:5000/api/traffic_data';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log("userDetails",userDetails);
    if (response.ok === true) {
      // Handle successful submission
    } else {
      setErrorMsg(data.error_msg);
      setShowSubmitError(true);
    }
  };
  
  return (
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
                    <h1 className="h5 mb-1">Welcome Back!</h1>
                    <p className="text-muted mb-4">Enter your email address and password to access the admin panel.</p>

                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="User Name"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-success btn-block waves-effect waves-light">
                        Log In
                      </button>
                      {showSubmitError && <p className="error-message">*{errorMsg}</p>}

                      <div className="text-center mt-4">
                        <h5 className="text-muted font-size-16">Sign in using</h5>
                      </div>
                    </form>

                    <div className="row mt-4">
                      <div className="col-12 text-center">
                        <p className="text-muted mb-2">
                          <a href="recoverpassword" className="text-muted font-weight-medium ml-1">
                            Forgot your password?
                          </a>
                        </p>
                        <p className="text-muted mb-0">
                          Don't have an account? <a href="register" className="text-muted font-weight-medium ml-1"><b>Sign Up</b></a>
                        </p>
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
  );
};

export default LoginForm;
