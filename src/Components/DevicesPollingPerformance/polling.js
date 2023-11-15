import React from 'react'
import Navbar from '../Navbar/navbar.js'; 
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function Polling() {
  return (
    <>
      <div id="layout-wrapper">
  <div className="main-content">
  <div> 
     <Navbar/>
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
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Locations">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Locations"
        options={["one", "two", "three"]}
        name="Select Locations"

      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS"
        options={["one", "two", "three"]}
        name="Select OS"

      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Hardware">
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
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Vendor">
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
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Groups">
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
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS Version">
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
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Featureset">
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
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Device Type">
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
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Hostname">
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
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Distro">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Distro"
        options={["one", "two", "three"]}
        name="Select Distro"

      />
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
                  <button id="search" name="search" type="button" className="btn btn-light pull-right text-nowrap" onClick="" value=""><i className="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> <a className="navbar-brand"  href=" ">Devices</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link" href="devices"> Basic </a> </li>
                      <li className="nav-item"><a className="nav-link" href="DevicesDetails"> Details </a></li>
                      <li className="nav-item"><a className="nav-link" href="DevicesStatus"> Status </a></li>
                      <li className="nav-item active"><a className="nav-link" href="DevicesPolligPerformance.html"> Pollig Performance </a></li>
                      <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle"  href="Graphs" data-bs-toggle="dropdown"> Graphs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item"  href=" ">Device Availability</a></li>
                          <li><a className="dropdown-item"  href=" ">Traffic</a></li>
                          <li><a className="dropdown-item"  href=" ">Active AAA Sessions</a></li>
                          <li><a className="dropdown-item"  href=" ">Current</a></li>
                          <li><a className="dropdown-item"  href=" ">DHCP Leases</a></li>
                          <li><a className="dropdown-item"  href=" ">Fanspeed</a></li>
                          <li><a className="dropdown-item"  href=" ">Frequency</a></li>
                          <li><a className="dropdown-item"  href=" ">Memory Usage</a></li>
                          <li><a className="dropdown-item"  href=" ">Ping Response</a></li>
                          <li><a className="dropdown-item"  href=" ">SNMP Response</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller Duration</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller MySQL Operations</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller MySQL Times</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller Memory usage</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller SNMP Requests</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller SNMP Errors</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller SNMP Errors Times</a></li>
                          <li><a className="dropdown-item"  href=" ">Poller SNMP Times</a></li>
                          <li><a className="dropdown-item"  href=" ">Power</a></li>
                          <li><a className="dropdown-item"  href=" ">Processors</a></li>
                          <li><a className="dropdown-item"  href=" ">Filesystem Usage</a></li>
                          <li><a className="dropdown-item"  href=" ">Temperature</a></li>
                          <li><a className="dropdown-item"  href=" ">Device Uptime</a></li>
                          <li><a className="dropdown-item"  href=" ">Voltage</a></li>
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
                      <th className="border-top-0"><a  href=" ">Device</a> / <a  href=" ">Location</a></th>
                      <th className="border-top-0"><a  href=" "> Poller Performance times</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="blue"></td>
                      <td><i className="fab fa-accusoft font-size-22"></i></td>
                      <td><a  href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td><p><img src="assets/images/img3.png" alt=""/></p></td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td><i className="fab fa-accusoft font-size-22"></i></td>
                      <td><a  href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td><p><img src="assets/images/img3.png" alt=""/></p></td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td><i className="fab fa-accusoft font-size-22"></i></td>
                      <td><a  href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                       <td><p><img src="assets/images/img3.png" alt=""/></p></td>
                    </tr>
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-redhat font-size-22 text-danger"></i></td>
                      <td className="text-truncate"><a  href=" " className="entity-popup orange text-nowrap trigger" data-eid="1" data-etype="device"><strong>202.53.92.36</strong></a><br/>
                        Unknown (edit /etc/snmp/snmpd.conf)</td>
                      <td><p><img src="assets/images/img3.png" alt=""/></p></td>
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
<script src="assets/js/bootstrap-select.min.js"></script> 

{/* <!-- Plugins js -->  */}
<script src="%PUBLIC_URL%/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="%PUBLIC_URL%/plugins/switchery/switchery.min.js"></script> 
<script src="%PUBLIC_URL%/assets/pages/advanced-plugins-demo.js"></script> 
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

export default Polling
