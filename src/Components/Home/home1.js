import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   createPopperLite as createPopper,
//   preventOverflow,
//   flip,
// } from '@popperjs/core';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '../Navbar/navbar.js'; 




function Home1() {
    const [apiData, setApiData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/devices';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setApiData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
      
    const [portData, setPortData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/ports';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setPortData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 


    const [sensorsData, setSensorsData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/sensors';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setSensorsData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
  

    const [statusesData,setStatusesData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/statuses';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setStatusesData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 

    

  


      // const [searchValue, setSearchValue] = useState("");

      // useEffect(() => {
    
      //   const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/statuses';
        
       
    
      //   axios
      //     .get(API_URL)
      //     .then((response) => {
            
      //       console.log(response.data.data[0].count)
           
            
      //       setSearchValue (response.data.data[0]);
            
    
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching data:', error);
      //     });
      // }, []); 

  //     const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  

  return (
    
      <div id="layout-wrapper">
        <div className="main-content">
         
          <div>
      <Navbar />
    </div>


          <div className="topnav">
            <div className="container-fluid">
              <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                <div
                  className="collapse navbar-collapse"
                  id="topnav-menu-content"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="Home">
                        {" "}
                        <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard{" "}
                      </a>{" "}
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href="Devices"
                        id="topnav-pages"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="mdi mdi-google-pages mr-2"></i>Devices
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-pages"
                      >
                        {" "}
                        <a href="Devices" className="dropdown-item">
                          <i className="mdi mdi-television-play"></i> All
                          Devices{" "}
                          <span className="badge badge-pill badge-info">3</span>
                        </a>
                        <div className="dropdown">
                          {" "}
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href="Devices"
                            id="topnav-auth"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-office-building"></i>{" "}
                            Locations
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-auth"
                          >
                            {" "}
                            <a href=" " className="dropdown-item">
                              INDIA
                            </a>{" "}
                            <a href=" " className="dropdown-item">
                              USA
                            </a>{" "}
                            <a href=" " className="dropdown-item">
                              UK
                            </a>{" "}
                          </div>
                        </div>
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-server-network"></i> Severs{" "}
                          <span className="badge badge-pill badge-success">
                            2
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-access-point-network"></i>{" "}
                          Network{" "}
                          <span className="badge badge-pill badge-primary">
                            1
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-arrow-down-bold-circle"></i>{" "}
                          Down{" "}
                          <span className="badge badge-pill badge-danger">
                            3
                          </span>
                        </a>{" "}
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href=" "
                        id="topnav-more"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fab fa-hubspot mr-2"></i>Ports
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-more"
                      >
                        {" "}
                        <a href="Ports" className="dropdown-item">
                          <i className="fas fa-desktop"></i> All Ports{" "}
                          <span className="badge badge-pill badge-danger">
                            37
                          </span>
                        </a>{" "}
                        <a href="VLANs" className="dropdown-item">
                          <i className="feather-cpu"></i> VLANs
                        </a>{" "}
                        <a href="Neighbours" className="dropdown-item">
                          <i className="feather-grid"></i> Neighbours{" "}
                          <span className="badge badge-pill badge-primary">
                            20
                          </span>
                        </a>{" "}
                        <a href="Customers" className="dropdown-item">
                          <i className="fas fa-user-friends"></i> Customers{" "}
                        </a>{" "}
                        <a href="Transit" className="dropdown-item">
                          <i className="feather-package"></i> Transit{" "}
                        </a>{" "}
                        <a href="Peering" className="dropdown-item">
                          <i className="feather-target"></i> Peering{" "}
                        </a>{" "}
                        <a href="Peering &amp; Transit" className="dropdown-item">
                          <i className="feather-zap"></i> Peering &amp; Transit{" "}
                        </a>
                        <div className="dropdown">
                          {" "}
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href=" "
                            id="topnav-tables"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-unlink"></i> Status Breakdown
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-tables"
                          >
                            {" "}
                            <a href=" " className="dropdown-item">
                              <i className="fas fa-download"></i> Down{" "}
                              <span className="badge badge-pill badge-danger">
                                20
                              </span>
                            </a>{" "}
                            <a
                              href="tables-datatables.html"
                              className="dropdown-item"
                            >
                              <i className="fas fa-upload"></i> Up{" "}
                              <span className="badge badge-pill badge-success">
                                10
                              </span>
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href=" "
                        id="topnav-pages"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        
                      >
                        {" "}
                        <i className="mdi mdi-google-pages mr-2"></i>Health
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-pages"
                      >
                        {" "}
                        <a href="Processors" className="dropdown-item">
                          Processors
                        </a>{" "}
                        <a href="Memory" className="dropdown-item">
                          Memory
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Storage
                        </a>{" "}
                        <a href="Statuses" className="dropdown-item">
                          Status
                        </a>{" "}
                        <a href="Temperature" className="dropdown-item">
                          Temperature
                        </a>{" "}
                        <a href="Fanspeed" className="dropdown-item">
                          Fanspeed
                        </a>{" "}
                        <a href="Current" className="dropdown-item">
                          Current
                        </a>
                        <a href="Voltage" className="dropdown-item">
                          Voltage
                        </a>{" "}
                        <a href="Power" className="dropdown-item">
                          Power
                        </a>
                        <a href="Frequency" className="dropdown-item">
                          Frequency
                        </a>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="page-content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2">
                      {" "}
                      <img
                        src="assets/images/nms.png"
                        alt=""
                        className="img-fluid"
                      />{" "}
                    </div>
                    <div className="col-lg-5">
                      <h4>Welcome to NMS dashboard!</h4>
                      <p>
                        This was autogenerated based on your previous front
                        page. It can be modified to suit your requirements.
                        Please see the documentation for information about how
                        to configure this dashboard. Including how to delete
                        this widget!
                      </p>
                    </div>

                    <div className="col-lg-5">
                      <p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.70842737001!2d78.43891958715821!3d17.439260000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3794bff07%3A0x1d80c73b7fcc4766!2sGreenlantern%20IT%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1697528551099!5m2!1sen!2sin"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                         
                          width="100%"
                          height="120"
                          title=" "
                        ></iframe>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-md-6">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Devices</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="mdi mdi-monitor-screenshot"></i>{" "}
                        </div>
                        <div className="device">
                        <br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href="Devices">{apiData.count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href="Devices"> {apiData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href="Devices"> {apiData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href="Devices">{apiData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href="Devices">{apiData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Ports</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="feather-sliders"></i>{" "}
                        </div>
                        <div className="device">
                        <br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href="Ports">{portData.count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href="Ports"> {portData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href="Ports"> {portData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href="Ports"> {portData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />

                          <p>
                            <a href="Ports">{portData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6 mt-2 mb-2">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Sensors</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="mdi mdi-server-network"></i>{" "}
                        </div>
                        <div className="device"><br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href="Sensors">{sensorsData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href="Sensors"> {sensorsData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href="Sensors"> {sensorsData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href="Sensors"> {sensorsData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href="Sensors">{sensorsData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6 mt-2 mb-2">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Statuses</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="dripicons-web"></i>{" "}
                        </div>
                        <div className="device"><br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href="Statuses">{statusesData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href="Statuses"> {statusesData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href="Statuses"> {statusesData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href="Statuses"> {statusesData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href="Statuses">{statusesData.Down_Count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Pie chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of line pie chart js.
                      </p>
                      <canvas id="pieChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Area chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of line area chart js.
                      </p>
                      <canvas id="areaChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bar Chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of bar chart chart js.
                      </p>
                      <canvas id="barChart"></canvas>
                    </div>
                  </div>
                </div>  */}

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <p>
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.70842737001!2d78.43891958715821!3d17.439260000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3794bff07%3A0x1d80c73b7fcc4766!2sGreenlantern%20IT%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1697528551099!5m2!1sen!2sin"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              width="100%"
                              height="150"
                              title=" "
                            ></iframe>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-centered table-hover table-xl mb-0"
                          id=""
                        >
                          <thead>
                            <tr>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">Total</th>
                              <th className="border-top-0">Up</th>
                              <th className="border-top-0">Alert</th>
                              <th className="border-top-0">Ignored (Dev)</th>
                              <th className="border-top-0">Disabled / Shut</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="Devices">
                                  <strong>Devices</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Devices">{apiData.count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Devices">{apiData.Down_Count} up</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Devices">{apiData.Up_Count} down</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Devices">{apiData.ignore_count} ignored</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Devices">
                                  {apiData.disabled_count} disabled
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="blue"></td>
                              <td className="text-truncate">
                                <a href="Ports">
                                  <strong>Ports</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Ports">{portData.count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Ports">{portData.Up_Count} up</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Ports">{portData.Down_Count} down</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Ports">{portData.ignore_count} ignored</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Ports">
                                  {portData.disabled_count} shutdown
                                </a>
                              </td>
                            </tr>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="Sensors">
                                  <strong>Sensors</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Sensors">{sensorsData.Up_Count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Sensors">{sensorsData.Up_Count} Ok</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Sensors">{sensorsData.Down_Count} alerts</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Sensors">
                                  {sensorsData.ignore_count} ignored
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Sensors">
                                  {sensorsData.disabled_count} disabled
                                </a>
                              </td>
                            </tr>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="statuses">
                                  <strong>Statuses</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Statuses">{statusesData.Down_Count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Statuses">{statusesData.Up_Count} ok</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Statuses">{statusesData.Down_Count} alerts</a>
                              </td>
                              <td className="text-truncate">
                                <a href="Statuses">
                                  {statusesData.ignore_count} ignored{" "}
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href="Statuses">
                                  {statusesData.Down_Count} disabled
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-centered table-hover table-xl mb-0"
                          id=""
                        >
                          <thead>
                            <tr>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">Ok</th>
                              <th className="border-top-0">Fail</th>
                              <th className="border-top-0">Delay</th>
                              <th className="border-top-0">Supperss</th>
                              <th className="border-top-0">Other</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="blue"></td>
                              <td className="text-truncate">
                                <a href=" ">
                                  <strong>Alerts</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="box-header">
                        <h3 className="box-title">
                          Status Warnings and Notifications
                        </h3>
                      </div>
                      <div className="box-content">
                        <table className="table table-hover table-condensed">
                          <tbody>
                            <tr className="error">
                              <td className="state-marker"></td>
                              <td className="entity">
                                <a
                                  href=" "
                                  className="entity-popup orange text-nowrap trigger"
                                  data-eid="1"
                                  data-etype="device"
                                >
                                  202.53.92.36
                                </a>
                              </td>
                              <td>
                                <span
                                  className="label label-danger"
                                  title="Down"
                                >
                                  Device Down
                                </span>
                              </td>
                              <td className="entity">
                                <i className="sprite-device"></i>
                                <a
                                  href=" "
                                  className="entity-popup orange text-nowrap trigger"
                                  data-eid="1"
                                  data-etype="device"
                                >
                                  202.53.92.36
                                </a>
                              </td>
                              <td>Down (SNMP) 10d 20h 32m</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="box-header">
                        <h3 className="box-title">Eventlog</h3>
                      </div>
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="red"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup orange text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>202.53.92.36</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup orange text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>202.53.92.36</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    {" "}
                    2023 © Network Management System.{" "}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div id="pop-up">
          <div className="table-responsive">
            <table
              className="table table-centered table-hover table-xl mb-0"
              id=""
            >
              <tbody>
                <tr className="error">
                  <td className="red"></td>
                  <td className="text-truncate">
                    <i className="fab fa-redhat hat"></i>
                  </td>
                  <td className="text-truncate">
                    <strong className="orange">202.53.92.36</strong>
                    <br />
                    Unknown (edit /etc/snmp/snmpd.conf){" "}
                  </td>
                  <td className="text-truncate">
                    Linux 3.10.0-1160.99.1.el7.x86_64
                    <br />
                    Generic x86 [64bit]
                  </td>
                  <td className="text-truncate">
                    Down (SNMP) 10d 22h 49m 20s
                    <br />
                    nms36
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table
              className="table table-centered table-hover table-xl mb-0"
              id=""
            >
              <tbody>
                <tr className="bg-light">
                  <td className="blue"></td>
                  <td className="text-truncate">
                    <i className="fab fa-atlassian sync"></i>
                  </td>
                  <td className="text-truncate">
                    <a href=" ">
                      <strong>175.101.18.18</strong>
                    </a>
                  </td>
                  <td className="text-truncate">
                    Mikrotik RouterOS 6.49.7
                    <br />
                    Mikrotik CCR1009-7G-1C-1S+
                  </td>
                  <td className="text-truncate">
                    110d 5h 8m 18s
                    <br />
                    one - 19
                  </td>
                </tr>
                <tr className="table-danger">
                  <th scope="col" colSpan="5">
                    Eventlog
                  </th>
                </tr>
                <tr>
                  <td className="text-truncate" colSpan="3">
                    Mikrotik RouterOS 6.49.7
                    <br />
                    Mikrotik CCR1009-7G-1C-1S+
                  </td>
                  <td className="text-truncate">
                    110d 5h 8m 18s
                    <br />
                    one - 19
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
       

         
     
    //   )}
    // </div>
    // </>
  );
}

export default Home1
