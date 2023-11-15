import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Navbar from '../Navbar/navbar.js'; 

const processors = () => {
  return (
    <>
      <div id="layout-wrapper">
  <div className="main-content">
       <div>
           <Navbar />
       </div>

     
    <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" href="index.html"> <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Devices
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" className="dropdown-item"><i className="mdi mdi-television-play"></i> All Devices <span className="badge badge-pill badge-info">3</span></a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-office-building"></i> Locations
                    <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-auth"> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-inr"></i> INDIA</a> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-usd"></i> USA</a> <a href=" " className="dropdown-item"><i className="mdi mdi-currency-gbp"></i> UK</a> </div>
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
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Health
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
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">175.101.18.21</option>
                    <option value="2">175.101.18.18</option>
                    <option value="3">175.101.18.19</option>
                    <option value="4">175.101.18.20</option>
                    <option value="5">175.101.18.21</option>
                  </select> */}
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device"
        options={["175.101.18.21", "175.101.18.18", "175.101.18.19","175.101.18.20"]}
        name="Device"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Physical Class"
        options={["Device", "Port"]}
        name="Physical Class"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event">
                    <option value="1">alert</option>
                    <option value="2">ignore</option>
                    <option value="3">Ok</option>
                  </select>
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event"
        options={["alert", "ignore","ok"]}
        name="Status Event"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status">
                    <option value="1">false</option>
                    <option value="2">true</option>
                    <option value="3">Waiting for load</option>
                  </select>
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event"
        options={["false", "true","Waiting for load"]}
        name="Status Event"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Measured State">
                    <option value="1">Without Measure</option>
                    <option value="2">Measure Up</option>
                    <option value="3">Measure Down</option>
                    <option value="4">Measure Shutdown</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Sensor description"/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Sensor Type"/>
                </div>
              </div>
              <div className="col-lg-2">
                <button id="search" name="search" type="button" className="btn btn-light text-nowrap" onClick="" value=""><i className="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <thead>
                    <tr className="text-truncate">
                      <th className="border-top-0"></th>
                      <th className="border-top-0"></th>
                      <th className="border-top-0"><a href=" ">Device</a></th>
                      <th className="border-top-0"><a href=" ">Description</a></th>
                      <th className="border-top-0"><a href=" ">Physical className</a></th>
                      <th className="border-top-0"><a href=" ">History</a></th>
                      <th className="border-top-0"><a href=" ">Last changed</a></th>
                      <th className="border-top-0"><a href=" ">Event</a></th>
                      <th className="border-top-0"><a href=" ">Status</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Backup Power Supply</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">device</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-success">Ok</span></td>
                      <td className="text-truncate"><span className="badge badge-success">true</span></td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Backup Power Supply</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">device</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-success">Ok</span></td>
                      <td className="text-truncate"><span className="badge badge-success">true</span></td>
                    </tr>
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Primary Power Supply</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">device</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-danger">alert</span></td>
                      <td className="text-truncate"><span className="badge badge-danger">false</span></td>
                    </tr>
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Primary Power Supply</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">device</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-danger">alert</span></td>
                      <td className="text-truncate"><span className="badge badge-danger">false</span></td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether10 PoE state (ether10)</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">Port</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-dark">ignore</span></td>
                      <td className="text-truncate"><span className="badge badge-dark">Waiting For Load</span></td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether10 PoE state (ether10)</strong></a></td>
                      <td className="text-truncate"><span className="badge badge-dark">Port</span></td>
                      <td className="text-truncate"></td>
                      <td className="text-truncate">26d 1h 10m ago</td>
                      <td className="text-truncate"><span className="badge badge-dark">ignore</span></td>
                      <td className="text-truncate"><span className="badge badge-dark">Waiting For Load</span></td>
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
<script src="assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="assets/plugins/switchery/switchery.min.js"></script> 
<script src="assets/pages/advanced-plugins-demo.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script> 

{/* <!-- HIDDEN / POP-UP DIV --> */}
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

export default processors
