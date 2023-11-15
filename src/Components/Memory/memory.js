import React from 'react'

const Memory = () => {
  return (
    
    <>
      <div id="layout-wrapper">
  <div class="main-content">
    <header id="page-topbar">
      <div class="navbar-header"> 
        {/* <!-- LOGO --> */}
        <div class="navbar-brand-box d-flex align-items-left"> <a href="index.html" class="logo"> <i class="feather-arrow-right-circle"></i> <span> Network Management System </span> </a>
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
              <div class="p-2 border-top"> <a class="btn btn-sm btn-light btn-block text-center" href=" "> <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More.. </a> </div>
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
    </header>
    <div class="topnav">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li class="nav-item"> <a class="nav-link" href="index.html"> <i class="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href="Devices" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Devices
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" class="dropdown-item"><i class="mdi mdi-television-play"></i> All Devices <span class="badge badge-pill badge-info">3</span></a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-office-building"></i> Locations
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-auth"> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-inr"></i> INDIA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-usd"></i> USA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href="severs.html" class="dropdown-item"><i class="mdi mdi-server-network"></i> Severs <span class="badge badge-pill badge-success">2</span></a> <a href="network.html" class="dropdown-item"><i class="mdi mdi-access-point-network"></i> Network <span class="badge badge-pill badge-primary">1</span></a> <a href="down.html" class="dropdown-item"><i class="mdi mdi-arrow-down-bold-circle"></i> Down <span class="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fab fa-hubspot mr-2"></i>Ports
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-more"> <a href="ports-basic.html" class="dropdown-item"><i class="fas fa-desktop"></i> All Ports <span class="badge badge-pill badge-danger">37</span></a> <a href="vlans.html" class="dropdown-item"><i class="feather-cpu"></i> VLANs</a> <a href="neighbours.html" class="dropdown-item"><i class="feather-grid"></i> Neighbours <span class="badge badge-pill badge-primary">20</span></a> <a href="customers.html" class="dropdown-item"><i class="fas fa-user-friends"></i> Customers </a> <a href="transit.html" class="dropdown-item"><i class="feather-package"></i> Transit </a> <a href="peering.html" class="dropdown-item"><i class="feather-target"></i> Peering </a> <a href="peering-transit.html" class="dropdown-item"><i class="feather-zap"></i> Peering &amp; Transit </a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-unlink"></i> Status Breakdown
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-tables"> <a href="down.html" class="dropdown-item"><i class="fas fa-download"></i> Down <span class="badge badge-pill badge-danger">20</span></a> <a href="up.html" class="dropdown-item"><i class="fas fa-upload"></i> Up <span class="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Health
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
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">175.101.18.21</option>
                    <option value="2">175.101.18.18</option>
                    <option value="3">175.101.18.19</option>
                    <option value="4">175.101.18.20</option>
                    <option value="5">175.101.18.21</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Physical Class">
                    <option value="1">Device</option>
                    <option value="2">Port</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event">
                    <option value="1">alert</option>
                    <option value="2">ignore</option>
                    <option value="3">Ok</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status">
                    <option value="1">false</option>
                    <option value="2">true</option>
                    <option value="3">Waiting for load</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Measured State">
                    <option value="1">Without Measure</option>
                    <option value="2">Measure Up</option>
                    <option value="3">Measure Down</option>
                    <option value="4">Measure Shutdown</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Sensor description"/>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Sensor Type"/>
                </div>
              </div>
              <div class="col-lg-2">
                <button id="search" name="search" type="button" class="btn btn-light text-nowrap" onClick="" value=""><i class="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
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
                    <tr class="text-truncate">
                      <th class="border-top-0"></th>
                      <th class="border-top-0"></th>
                      <th class="border-top-0"><a href=" ">Device</a></th>
                      <th class="border-top-0"><a href=" ">Description</a></th>
                      <th class="border-top-0"><a href=" ">Physical Class</a></th>
                      <th class="border-top-0"><a href=" ">History</a></th>
                      <th class="border-top-0"><a href=" ">Last changed</a></th>
                      <th class="border-top-0"><a href=" ">Event</a></th>
                      <th class="border-top-0"><a href=" ">Status</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Backup Power Supply</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">device</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">true</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Backup Power Supply</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">device</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">true</span></td>
                    </tr>
                    <tr class="error">
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Primary Power Supply</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">device</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-danger">alert</span></td>
                      <td class="text-truncate"><span class="badge badge-danger">false</span></td>
                    </tr>
                    <tr class="error">
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Primary Power Supply</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">device</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-danger">alert</span></td>
                      <td class="text-truncate"><span class="badge badge-danger">false</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether10 PoE state (ether10)</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">Port</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-dark">ignore</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">Waiting For Load</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether10 PoE state (ether10)</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-dark">Port</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 1h 10m ago</td>
                      <td class="text-truncate"><span class="badge badge-dark">ignore</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">Waiting For Load</span></td>
                    </tr>
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
<script src="%PUBLIC_URL%/assets/js/jquery.min.js"></script> 
<script src="%PUBLIC_URL%/assets/js/bootstrap.bundle.min.js"></script> 
<script src="%PUBLIC_URL%/assets/js/waves.js"></script> 
<script src="%PUBLIC_URL%/assets/js/simplebar.min.js"></script> 

{/* <!-- Morris Js-->  */}
<script src="%PUBLIC_URL%/plugins/morris-js/morris.min.js"></script> 
{/* <!-- Raphael Js-->  */}
<script src="%PUBLIC_URL%/plugins/raphael/raphael.min.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="%PUBLIC_URL%/assets/pages/dashboard-demo.js"></script> 

{/* <!-- App js -->  */}
<script src="%PUBLIC_URL%/assets/js/theme.js"></script> 
{/* <!-- Script Tooltip js -->  */}
<script src="%PUBLIC_URL%/assets/js/script_tooltip.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="%PUBLIC_URL%/assets/pages/morris-chart-demo.js"></script> 

{/* <!-- Chart Js-->  */}
<script src="%PUBLIC_URL%/plugins/chart-js/chart.min.js"></script> 

{/* <!-- Multi Select dropdown Js-->  */}
<script src="%PUBLIC_URL%/assets/js/bootstrap-select.min.js"></script> 

{/* <!-- Plugins js -->  */}
<script src="%PUBLIC_URL%/assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="%PUBLIC_URL%/assets/plugins/switchery/switchery.min.js"></script> 
<script src="%PUBLIC_URL%/assets/pages/advanced-plugins-demo.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script> 

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
export default Memory