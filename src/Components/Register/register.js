import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.fname === '' || formData.fname === null) {
      isvalid = false;
      validationErrors.fname = 'First name Required';
    }

    if (formData.lname === '' || formData.lname === null) {
      isvalid = false;
      validationErrors.lname = 'Last name Required';
    }

    if (formData.email === '' || formData.email === null) {
      isvalid = false;
      validationErrors.email = 'Email Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = 'Email is not valid';
    }

    if (formData.password === '' || formData.password === null) {
      isvalid = false;
      validationErrors.password = 'Password Required';
    } else if (formData.password.length < 8) {
      isvalid = false;
      validationErrors.password = 'Password length at least 8 characters';
    }

    if (formData.password !== formData.cPassword) {
      isvalid = false;
      validationErrors.cPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      try {
       console.log(formData.fname, formData.lname, formData.email, formData.password)
        const response = await axios.post('http://202.53.92.6:8080/apirt1/nmsuat/register', {
          
        "user_email": formData.email,
        "user_password":formData.password,
        "first_name":formData.fname,
        "last_name":formData.lname
  
        });
         console.log(response)
        
        if (response.data.status === 200) {
  
            navigate('/')
  
          
          console.log("successful")
        } 
        // else {
          
        //   setErrorMsg(response.data.error.message);
        //   setShowSubmitError(true);
        // }
      }
       catch (error) {
        console.error('Error during login:', error);
        // setErrorMsg('An error occurred during login. Please try again later.');
        // setShowSubmitError(true);
    }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12"><div className="d-flex align-items-center min-vh-100">
            <div className="w-100 d-block bg-white shadow-lg rounded my-5">
              <div className="row"><div className="col-lg-5 d-none d-lg-block bg-login rounded-left"></div>
                <div className="col-lg-7">
                  <div className="p-5">
                  <a href="index.html" className="text-dark font-size-22 font-family-secondary">
                        <i className="mdi mdi-alpha-x-circle"></i> <b>Network Management System</b>
                      </a>
                    </div>
                    <h1 className="h5 mb-1">Welcome Back!</h1>
                    <p className="text-muted mb-4">Enter your email address and password to access the admin panel.</p>
          {!valid ? (
            <span className="text-danger">
              {errors.fname}; {errors.lname}; {errors.email}; {errors.password}; {errors.cPassword}
            </span>
          ) : null}
          <form className="user" onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <input
                  type="text"
                  className="form-control form-control-user"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control form-control-user"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-user"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <input
                  type="password"
                  className="form-control form-control-user"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="password"
                  className="form-control form-control-user"
                  placeholder="Repeat Password"
                  value={formData.cPassword}
                  onChange={(e) => setFormData({ ...formData, cPassword: e.target.value })}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-block waves-effect waves-light">
              Register Account
            </button>
          </form>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="text-muted mb-0">
                Already have an account?{' '}
                <a href="pages-login.html" className="text-muted font-weight-medium ml-1">
                  <b>Sign In</b>
                </a>
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
 
  );
};

export default Register;
