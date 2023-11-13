import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


function Devices1() {
  const [basicListData, setBasicListData] = useState([]);

  useEffect(() => {
    const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/devices/devicesbasiclist';

    axios
      .get(API_URL)
      .then((response) => {
        const value = response.data.data;
        console.log(value);

        setBasicListData(value);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>

    
      <div id="layout-wrapper">
  <div class="main-content">
    <header id="page-topbar">
      <div class="navbar-header"> 
        {/* <!-- LOGO --> */}
        <div class="navbar-brand-box d-flex align-items-left"> <a href="Home" class="logo"> <i class="feather-arrow-right-circle"></i> <span> Network Management System </span> </a>
          <button type="button" class="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content"> <i class="fa fa-fw fa-bars"></i> </button>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-search-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-magnify"></i> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-search-dropdown">
              <form class="p-3">
                <div class="form-group m-0">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-notifications-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell"></i> <span class="badge badge-danger badge-pill">3</span> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-notifications-dropdown">
              <div class="p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0"> Notifications </h6>
                  </div>
                  <div class="col-auto"> <a href="#!" class="small"> View All</a> </div>
                </div>
              </div>
              <div data-simplebar style={{maxheight: "230px"}}> <a href=" " class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-2.jpg"
                                                    class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Samuel Coverdale</h6>
                    <p class="font-size-12 mb-1">You have new follower on Instagram</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 2 min ago</p>
                  </div>
                </div>
                </a> <a href=" " class="text-reset notification-item">
                <div class="media">
                  <div class="avatar-xs mr-3"> <span class="avatar-title bg-success rounded-circle"> <i class="mdi mdi-cloud-download-outline"></i> </span> </div>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Download Available !</h6>
                    <p class="font-size-12 mb-1">Latest version of admin is now available. Please download here.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 4 hours ago</p>
                  </div>
                </div>
                </a> <a href=" " class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-3.jpg"
                                                    class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Victoria Mendis</h6>
                    <p class="font-size-12 mb-1">Just upgraded to premium account.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 1 day ago</p>
                  </div>
                </div>
                </a> </div>
              <div class="p-2 border-top"> <a class="btn btn-sm btn-light btn-block text-center" href="javascript void(0)"> <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More.. </a> </div>
            </div>
          </div>
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item waves-effect waves-light" id="page-header-user-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-3.jpg"
                                        alt="Header Avatar"/> <span class="d-none d-sm-inline-block ml-1">Jamie D.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </button>
            <div class="dropdown-menu dropdown-menu-right"> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Inbox</span> <span> <span class="badge badge-pill badge-info">3</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Profile</span> <span> <span class="badge badge-pill badge-warning">1</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> Settings </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Lock Account</span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Log Out</span> </a> </div>
          </div>
        </div>
      </div>
    </header> <div class="topnav">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li class="nav-item"> <a class="nav-link" href="Home"> <i class="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Devices
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" class="dropdown-item"><i class="mdi mdi-television-play"></i> All Devices <span class="badge badge-pill badge-info">3</span></a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href="Devices" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-office-building"></i> Locations
                    <div class="arrow-down"></div>
                    </a><div class="dropdown-menu" aria-labelledby="topnav-auth"> <a href="  " class="dropdown-item"><i class="mdi mdi-currency-inr"></i> INDIA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-usd"></i> USA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href="severs.html" class="dropdown-item"><i class="mdi mdi-server-network"></i> Severs <span class="badge badge-pill badge-success">2</span></a> <a href="network.html" class="dropdown-item"><i class="mdi mdi-access-point-network"></i> Network <span class="badge badge-pill badge-primary">1</span></a> <a href="down.html" class="dropdown-item"><i class="mdi mdi-arrow-down-bold-circle"></i> Down <span class="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fab fa-hubspot mr-2"></i>Ports
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-more"> <a href="PortsBasic" class="dropdown-item"><i class="fas fa-desktop"></i> All Ports <span class="badge badge-pill badge-danger">37</span></a> <a href="vlans.html" class="dropdown-item"><i class="feather-cpu"></i> VLANs</a> <a href="neighbours.html" class="dropdown-item"><i class="feather-grid"></i> Neighbours <span class="badge badge-pill badge-primary">20</span></a> <a href="customers.html" class="dropdown-item"><i class="fas fa-user-friends"></i> Customers </a> <a href="transit.html" class="dropdown-item"><i class="feather-package"></i> Transit </a> <a href="peering.html" class="dropdown-item"><i class="feather-target"></i> Peering </a> <a href="peering-transit.html" class="dropdown-item"><i class="feather-zap"></i> Peering &amp; Transit </a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-unlink"></i> Status Breakdown
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-tables"> <a href="down.html" class="dropdown-item"><i class="fas fa-download"></i> Down <span class="badge badge-pill badge-danger">20</span></a> <a href="up.html" class="dropdown-item"><i class="fas fa-upload"></i> Up <span class="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Health
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href="processors.html" class="dropdown-item"><i class="fas fa-desktop"></i> Processors</a> <a href="memory.html" class="dropdown-item"><i class="feather-cpu"></i> Memory</a> <a href="storage.html" class="dropdown-item"><i class="fas fa-database"></i> Storage</a> <a href="status.html" class="dropdown-item"><i class="feather-clock"></i> Status</a> <a href="temperature.html" class="dropdown-item"><i class="fas fa-temperature-high"></i> Temperature</a> <a href="fanspeed.html" class="dropdown-item"><i class="feather-send"></i> Fanspeed</a> <a href="current.html" class="dropdown-item"><i class="feather-hard-drive"></i> Current</a> <a href="voltage.html" class="dropdown-item"><i class="fas fa-house-damage"></i> Voltage</a> <a href="power.html" class="dropdown-item"><i class="mdi mdi-solar-power"></i> Power</a> <a href="frequency.html" class="dropdown-item"><i class="mdi mdi-finance"></i> Frequency</a> </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="page-content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Host Name"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect multiple aria-label="Default select example" data-live-search="true" placeholder="Select Locations"
        options={["one", "two", "three"]}
        name="Select Locations"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS"
        options={["one", "two", "three"]}
        name="Select OS "

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Hardware">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Hardware"
        options={["one", "two", "three"]}
        name="Select Hardware"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Vendor">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Vendor"
        options={["one", "two", "three"]}
        name="Select Vendor"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Groups">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Groups"
        options={["one", "two", "three"]}
        name="Select Groups"

      />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="sysName"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Location"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS Version">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS Version"
        options={["one", "two", "three"]}
        name="Select OS Version"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Featureset">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Featureset"
        options={["one", "two", "three"]}
        name="Select Featureset"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Device Type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Device Type"
        options={["one", "two", "three"]}
        name="Select Device Type"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Hostname">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Hostname"
        options={["one", "two", "three"]}
        name="Hostname"

      />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="sysDescr"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Description / Purpose"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="sysContact"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  {/* <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Distro">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Distro"
        options={["one", "two", "three"]}
        name="Hostname"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Serial Number"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group mt-2">
                  <input type="checkbox" checked data-toggle="switchery" data-color="#ccc" data-size="small" title="Show Enabled / Disabled"/>
                  <button id="search" name="search" type="button" class="btn btn-light pull-right text-nowrap" onclick="" value=""><i class="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent"> <a class="navbar-brand" href=" ">Devices</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                  <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link" href="devices-basic.html"> Basic </a> </li>
                      <li class="nav-item"><a class="nav-link" href="devices-details.html"> Details </a></li>
                      <li class="nav-item"><a class="nav-link" href="devices-status.html"> Status </a></li>
                      <li class="nav-item"><a class="nav-link" href="devices-pollig-performance.html"> Pollig Performance </a></li>
                      <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href=" " data-bs-toggle="dropdown"> Graphs
                        <div class="arrow-down"></div>
                        </a>
                        <ul class="dropdown-menu scrollspy-example">
                          <li><a class="dropdown-item" href=" ">Device Availability</a></li>
                          <li><a class="dropdown-item" href=" ">Traffic</a></li>
                          <li><a class="dropdown-item" href=" ">Active AAA Sessions</a></li>
                          <li><a class="dropdown-item" href=" ">Current</a></li>
                          <li><a class="dropdown-item" href=" ">DHCP Leases</a></li>
                          <li><a class="dropdown-item" href=" ">Fanspeed</a></li>
                          <li><a class="dropdown-item" href=" ">Frequency</a></li>
                          <li><a class="dropdown-item" href=" ">Memory Usage</a></li>
                          <li><a class="dropdown-item" href=" ">Ping Response</a></li>
                          <li><a class="dropdown-item" href=" ">SNMP Response</a></li>
                          <li><a class="dropdown-item" href=" ">Poller Duration</a></li>
                          <li><a class="dropdown-item" href=" ">Poller MySQL Operations</a></li>
                          <li><a class="dropdown-item" href=" ">Poller MySQL Times</a></li>
                          <li><a class="dropdown-item" href=" ">Poller Memory usage</a></li>
                          <li><a class="dropdown-item" href=" ">Poller SNMP Requests</a></li>
                          <li><a class="dropdown-item" href=" ">Poller SNMP Errors</a></li>
                          <li><a class="dropdown-item" href=" ">Poller SNMP Errors Times</a></li>
                          <li><a class="dropdown-item" href=" ">Poller SNMP Times</a></li>
                          <li><a class="dropdown-item" href=" ">Power</a></li>
                          <li><a class="dropdown-item" href=" ">Processors</a></li>
                          <li><a class="dropdown-item" href=" ">Filesystem Usage</a></li>
                          <li><a class="dropdown-item" href=" ">Temperature</a></li>
                          <li><a class="dropdown-item" href=" ">Device Uptime</a></li>
                          <li><a class="dropdown-item" href=" ">Voltage</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- navbar-collapse.// -->  */}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th class="border-top-0"></th>
                      <th class="border-top-0"></th>
                      <th class="border-top-0">Device / Location</th>
                      <th class="border-top-0">Hardware / Features</th>
                      <th class="border-top-0">Operating System</th>
                      <th class="border-top-0">Uptime / sysName</th>
                    </tr>
                  </thead>
                  <tbody>
                   {basicListData.map((row,index) => (
                     <tr key={index}>
                       <td className="blue"></td>
                       <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                       <td className="text-truncate"><a href="devices-overview.html" className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong> { row.hostname}</strong></a></td>
                       <td className="text-truncate">{ row.hardware}</td>
                       <td className="text-truncate">{ row.os}</td>
                       <td className="text-truncate">{ row.uptime}</td>
                     </tr> 
      ))}
                    {/* <tr class="error">
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-redhat font-size-22 text-danger"></i></td>
                      <td class="text-truncate"><a href="devices-overview.html" class="entity-popup orange text-nowrap trigger" data-eid="1" data-etype="device"><strong>202.53.92.36</strong></a></td>
                      <td class="text-truncate">CCR1009-7G-1C-1S+ Level 6</td>
                      <td class="text-truncate">Mikrotik RouterOS 6.49.7</td>
                      <td class="text-truncate">113d 8h 21m 14s</td>
                    </tr> */}
                   
                  </tbody>
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- container-fluid -->  */}
    </div>
    {/* <!-- End Page-content --> */}
    
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center"> 2023 © Network Management System. </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* <!-- end main content-->  */}
  
</div>
{/* <!-- END layout-wrapper -->  */}

{/* <!-- jQuery  -->  */}
<script src="assets/js/jquery.min.js"></script> 
<script src="assets/js/bootstrap.bundle.min.js"></script> 
<script src="assets/js/waves.js"></script> 
<script src="assets/js/simplebar.min.js"></script> 

{/* <!-- Morris Js-->  */}
<script src="../plugins/morris-js/morris.min.js"></script> 
{/* <!-- Raphael Js-->  */}
<script src="../plugins/raphael/raphael.min.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="assets/pages/dashboard-demo.js"></script> 

{/* <!-- App js -->  */}
<script src="assets/js/theme.js"></script> 
{/* <!-- Script Tooltip js -->  */}
<script src="assets/js/script_tooltip.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="assets/pages/morris-chart-demo.js"></script> 

{/* <!-- Chart Js-->  */}
<script src="../plugins/chart-js/chart.min.js"></script> 

{/* <!-- Multi Select dropdown Js-->  */}
<script src="assets/js/bootstrap-select.min.js"></script> 

{/* <!-- Plugins js -->  */}
<script src="../plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="../plugins/switchery/switchery.min.js"></script> 
<script src="assets/pages/advanced-plugins-demo.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script> 

{/* <!-- HIDDEN / POP-UP DIV --> */}
<div id="pop-up">
  <div class="table-responsive">
    <table class="table table-centered table-hover table-xl mb-0" id="">
      <tbody>
        <tr class="error">
          <td class="red"></td>
          <td class="text-truncate"><i class="fab fa-redhat hat"></i></td>
          <td class="text-truncate"><strong class="orange">202.53.92.36</strong><br/>
            Unknown (edit /etc/snmp/snmpd.conf) </td>
          <td class="text-truncate">Linux 3.10.0-1160.99.1.el7.x86_64<br/>
            Generic x86 [64bit]</td>
          <td class="text-truncate">Down (SNMP) 10d 22h 49m 20s<br/>
            nms36</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  )
}

export default Devices1



