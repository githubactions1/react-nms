import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons'; // Replace with the appropriate icon




function Devices() {
  const [basicListData, setBasicListData] = useState([ ]);

  useEffect(() => {

    const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/devices/devicesbasiclist';

    axios
        .get(API_URL)
        .then((response) => {
          const value = response.data.data
          console.log(value)
         
          
          setBasicListData (value);
         
         
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
 


 return (
    <>
      <div id="layout-wrapper">
  <div className="main-content">
    <header id="page-topbar">
      <div className="navbar-header"> 
       
        <div className="navbar-brand-box d-flex align-items-left"> <a href="Home" className="logo"> <i className="feather-arrow-right-circle"></i> <span> Network Management System </span> </a>
          <button type="button" className="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content"> <i className="fa fa-fw fa-bars"></i> </button>
        </div>
        <div className="d-flex align-items-center">
          <div className="dropdown d-inline-block ml-2">
            <button type="button" className="btn header-item noti-icon waves-effect waves-light" id="page-header-search-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-magnify"></i> </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-search-dropdown">
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item noti-icon waves-effect waves-light" id="page-header-notifications-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-bell"></i> <span className="badge badge-danger badge-pill">3</span> </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-notifications-dropdown">
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Notifications </h6>
                  </div>
                  <div className="col-auto"> <a href="#!" className="small"> View All</a> </div>
                </div>
              </div>
              <div data-simplebar style={{maxheight: "230px"}}> <a href=" " className="text-reset notification-item">
                <div className="media"> <img src="assets/images/users/avatar-2.jpg"
                                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Samuel Coverdale</h6>
                    <p className="font-size-12 mb-1">You have new follower on Instagram</p>
                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 2 min ago</p>
                  </div>
                </div>
                </a> <a href=" " className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs mr-3"> <span className="avatar-title bg-success rounded-circle"> <i className="mdi mdi-cloud-download-outline"></i> </span> </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Download Available !</h6>
                    <p className="font-size-12 mb-1">Latest version of admin is now available. Please download here.</p>
                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 4 hours ago</p>
                  </div>
                </div>
                </a> <a href=" " className="text-reset notification-item">
                <div className="media"> <img src="assets/images/users/avatar-3.jpg"
                                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Victoria Mendis</h6>
                    <p className="font-size-12 mb-1">Just upgraded to premium account.</p>
                    <p className="font-size-12 mb-0 text-muted"><i className="mdi mdi-clock-outline"></i> 1 day ago</p>
                  </div>
                </div>
                </a> </div>
              <div className="p-2 border-top"> <a className="btn btn-sm btn-light btn-block text-center" href=" "> <i className="mdi mdi-arrow-down-circle mr-1"></i> Load More.. </a> </div>
            </div>
          </div>
          <div>
          <div class="dropdown d-inline-block ml-2">
         
      <button
        type="button"
        className="btn header-item waves-effect waves-light"
        id="page-header-user-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          className="rounded-circle header-profile-user"
          src="assets/images/users/avatar-3.jpg"
          alt="Header Avatar"
        />
        <span className="d-none d-sm-inline-block ml-1">Jamie D.</span>
        <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
      </button>

      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item d-flex align-items-center justify-content-between" href=" ">
          <span>Inbox</span>
          <span>
            <span className="badge badge-pill badge-info">3</span>
          </span>
        </a>
        <a className="dropdown-item d-flex align-items-center justify-content-between" href=" ">
          <span>Profile</span>
          <span>
            <span className="badge badge-pill badge-warning">1</span>
          </span>
        </a>
        <a className="dropdown-item d-flex align-items-center justify-content-between" href=" ">
          Settings
        </a>
        <a className="dropdown-item d-flex align-items-center justify-content-between" href=" ">
          <span>Lock Account</span>
        </a>
        <a className="dropdown-item d-flex align-items-center justify-content-between" href=" ">
          <span>Log Out</span>
        </a>
      </div>
          </div>
          </div>
        </div>
      </div>
    </header> <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" href="Home"> <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Devices
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" className="dropdown-item"><i className="mdi mdi-television-play"></i> All Devices <span className="badge badge-pill badge-info">3</span></a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-office-building"></i> Locations
                    <div className="arrow-down"></div>
                    </a><div className="dropdown-menu" aria-labelledby="topnav-auth"> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-inr"></i> INDIA</a> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-usd"></i> USA</a> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href="severs.html" className="dropdown-item"><i className="mdi mdi-server-network"></i> Severs <span className="badge badge-pill badge-success">2</span></a> <a href="network.html" className="dropdown-item"><i className="mdi mdi-access-point-network"></i> Network <span className="badge badge-pill badge-primary">1</span></a> <a href="down.html" className="dropdown-item"><i className="mdi mdi-arrow-down-bold-circle"></i> Down <span className="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fab fa-hubspot mr-2"></i>Ports
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more"> <a href="ports-basic.html" className="dropdown-item"><i className="fas fa-desktop"></i> All Ports <span className="badge badge-pill badge-danger">37</span></a> <a href="vlans.html" className="dropdown-item"><i className="feather-cpu"></i> VLANs</a> <a href="neighbours.html" className="dropdown-item"><i className="feather-grid"></i> Neighbours <span className="badge badge-pill badge-primary">20</span></a> <a href="customers.html" className="dropdown-item"><i className="fas fa-user-friends"></i> Customers </a> <a href="transit.html" className="dropdown-item"><i className="feather-package"></i> Transit </a> <a href="peering.html" className="dropdown-item"><i className="feather-target"></i> Peering </a> <a href="peering-transit.html" className="dropdown-item"><i className="feather-zap"></i> Peering &amp; Transit </a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-unlink"></i> Status Breakdown
                    <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-tables"> <a href="down.html" className="dropdown-item"><i className="fas fa-download"></i> Down <span className="badge badge-pill badge-danger">20</span></a> <a href="up.html" className="dropdown-item"><i className="fas fa-upload"></i> Up <span className="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li> <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Health
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="processors.html" className="dropdown-item"><i className="fas fa-desktop"></i> Processors</a> <a href="memory.html" className="dropdown-item"><i className="feather-cpu"></i> Memory</a> <a href="storage.html" className="dropdown-item"><i className="fas fa-database"></i> Storage</a> <a href="status.html" className="dropdown-item"><i className="feather-clock"></i> Status</a> <a href="temperature.html" className="dropdown-item"><i className="fas fa-temperature-high"></i> Temperature</a> <a href="fanspeed.html" className="dropdown-item"><i className="feather-send"></i> Fanspeed</a> <a href="current.html" className="dropdown-item"><i className="feather-hard-drive"></i> Current</a> <a href="voltage.html" className="dropdown-item"><i className="fas fa-house-damage"></i> Voltage</a> <a href="power.html" className="dropdown-item"><i className="mdi mdi-solar-power"></i> Power</a> <a href="frequency.html" className="dropdown-item"><i className="mdi mdi-finance"></i> Frequency</a> </div>
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
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Host Name"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Locations">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Hardware">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Vendor">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Groups">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="sysName"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Location"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS Version">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Featureset">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Device Type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Hostname">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="sysDescr"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Description / Purpose"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="sysContact"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Distro">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Serial Number"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group mt-2">
                  <input type="checkbox" checked data-toggle="switchery" data-color="#ccc" data-size="small" title="Show Enabled / Disabled"/>
                  <button id="search" name="search" type="button" className="btn btn-light pull-right text-nowrap" onclick="" value=""><i className="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> <a className="navbar-brand" href=" ">Devices</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item active"><a className="nav-link" href="devices-basic.html"> Basic </a> </li>
                      <li className="nav-item"><a className="nav-link" href="devices-details.html"> Details </a></li>
                      <li className="nav-item"><a className="nav-link" href="devices-status.html"> Status </a></li>
                      <li className="nav-item"><a className="nav-link" href="devices-pollig-performance.html"> Pollig Performance </a></li>
                      <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href=" " data-bs-toggle="dropdown"> Graphs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href=" ">Device Availability</a></li>
                          <li><a className="dropdown-item" href=" ">Traffic</a></li>
                          <li><a className="dropdown-item" href=" ">Active AAA Sessions</a></li>
                          <li><a className="dropdown-item" href=" ">Current</a></li>
                          <li><a className="dropdown-item" href=" ">DHCP Leases</a></li>
                          <li><a className="dropdown-item" href=" ">Fanspeed</a></li>
                          <li><a className="dropdown-item" href=" ">Frequency</a></li>
                          <li><a className="dropdown-item" href=" ">Memory Usage</a></li>
                          <li><a className="dropdown-item" href=" ">Ping Response</a></li>
                          <li><a className="dropdown-item" href=" ">SNMP Response</a></li>
                          <li><a className="dropdown-item" href=" ">Poller Duration</a></li>
                          <li><a className="dropdown-item" href=" ">Poller MySQL Operations</a></li>
                          <li><a className="dropdown-item" href=" ">Poller MySQL Times</a></li>
                          <li><a className="dropdown-item" href=" ">Poller Memory usage</a></li>
                          <li><a className="dropdown-item" href=" ">Poller SNMP Requests</a></li>
                          <li><a className="dropdown-item" href=" ">Poller SNMP Errors</a></li>
                          <li><a className="dropdown-item" href=" ">Poller SNMP Errors Times</a></li>
                          <li><a className="dropdown-item" href=" ">Poller SNMP Times</a></li>
                          <li><a className="dropdown-item" href=" ">Power</a></li>
                          <li><a className="dropdown-item" href=" ">Processors</a></li>
                          <li><a className="dropdown-item" href=" ">Filesystem Usage</a></li>
                          <li><a className="dropdown-item" href=" ">Temperature</a></li>
                          <li><a className="dropdown-item" href=" ">Device Uptime</a></li>
                          <li><a className="dropdown-item" href=" ">Voltage</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                 
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body"> 
                
              
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="border-top-0"></th>
                      <th className="border-top-0"></th>
                      <th className="border-top-0">Device / Location</th>
                      <th className="border-top-0">Hardware / Features</th>
                      <th className="border-top-0">Operating System</th>
                      <th className="border-top-0">Uptime / sysName</th>
                    </tr>
                  </thead>
                
                  <tbody>
                  {basicListData.map((row,index) => (
                    <tr key={index}>
                      <td className="faAccusoft"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong> { index.hostname}</strong></a></td>
                      <td className="text-truncate">{ index.hardware}</td>
                      <td className="text-truncate">{ index.os}</td>
                      <td className="text-truncate">{ index.uptime}</td>
                    </tr> 
          ))}
                  {/* <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>202.53.92.36</strong></a></td>
                      <td className="text-truncate">CCR1009-7G-1C-1S+ Level 6</td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7</td>
                      <td className="text-truncate">113d 8h 21m 14s</td>
                    </tr> 
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-redhat font-size-22 text-danger"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup orange text-nowrap trigger" data-eid="1" data-etype="device"><strong>202.53.92.36</strong></a></td>
                      <td className="text-truncate">CCR1009-7G-1C-1S+ Level 6</td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7</td>
                      <td className="text-truncate">113d 8h 21m 14s</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.19</strong></a></td>
                      <td className="text-truncate">CCR1009-7G-1C-1S+ Level 6</td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7</td>
                      <td className="text-truncate">113d 8h 21m 16s</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.20</strong></a></td>
                      <td className="text-truncate">RB4011iGS+ Level 5</td>
                      <td className="text-truncate"> Mikrotik RouterOS 6.49.7</td>
                      <td className="text-truncate">118d 9h 27m 33s</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate">RB3011UiAS Level 5</td>
                      <td className="text-truncate"> Mikrotik RouterOS 6.49.7</td>
                      <td className="text-truncate">107d 1h 35m 37s</td>
                    </tr> */}
                  </tbody>
                 
               
                </table>
            
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
{/* <!-- HIDDEN / POP-UP DIV --> */}
    
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center"> 2023 © Network Management System. </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

  
</div>




<div id="pop-up">
  <div className="table-responsive">
    <table className="table table-centered table-hover table-xl mb-0" id="">
      <tbody>
        <tr className="error">
          <td className="red"></td>
          <td className="text-truncate"><i className="fab fa-redhat hat"></i></td>
          <td className="text-truncate"><strong className="orange">202.53.92.36</strong><br/>
            Unknown (edit /etc/snmp/snmpd.conf) </td>
          <td className="text-truncate">Linux 3.10.0-1160.99.1.el7.x86_64<br/>
            Generic x86 [64bit]</td>
          <td className="text-truncate">Down (SNMP) 10d 22h 49m 20s<br/>
            nms36</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  )
}

export default Devices