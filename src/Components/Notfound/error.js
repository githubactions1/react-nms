/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function error() {
  return (
    
    <div>
 <div className="container">
    <div className="row">
        <div className="col-12">
            <div className="d-flex align-items-center min-vh-100">
                <div className="w-100 d-block bg-white shadow-lg rounded my-5">
                    <div className="row" style={{ display: "flex" }}>
                        <div className="col-lg-5">
                            <img src="assets/images/404-image.jpg" alt="404 Image" style={{ height: "80vh", width: "60wh" }} />
                        </div>
                        <div className="col-lg-7">
                            <div style={{ marginTop: "12%" }}>
                                <div className="text-center mb-5">
                                    <a href="index.html" className="text-dark font-size-22 font-family-secondary">
                                        <i className="mdi mdi-alpha-x-circle"></i> <b>Network Management System</b>
                                    </a>
                                </div>
                                <div className="text-center">
                                    <img src="assets/images/404-error.svg" alt="error" height="140" />
                                    <h1 className="h4 mb-3 mt-4">Page Not Found</h1>
                                    <p className="text-muted mb-4 w-75 m-auto">It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</p>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 text-center">
                                        <a href="home" className="btn btn-success waves-effect waves-light"><i className="mdi mdi-home mr-2"></i>Back to Home</a>
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

export default error
