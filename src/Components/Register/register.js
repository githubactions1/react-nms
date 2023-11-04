import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const [errors, setErrors] = useState({})
  const [vaild, setValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}
    if(formData.fname === "" || formData.fname === null) {
        isvalid = false;
        validationErrors.fname = "First name Required"
    }
    if(formData.lname === "" || formData.lname === null) {
        isvalid = false;
        validationErrors.lname = "last name Required"
    }

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
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
                  value={formData.repeatPassword}
                  onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-block waves-effect waves-light">Register Account</button>
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
  );
};

export default Register;