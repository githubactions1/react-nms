import React from 'react'
import Navbar from '../Navbar/navbar.js'; 
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function DeviceDetails() {
  return (
    <>
      <div id="layout-wrapper">
  <div className="main-content">
  <div>
      <Navbar />
    
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
        name="Select Hardware"

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
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> <a className="navbar-brand" href=" ">Devices</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link" href="devices-basic.html"> Basic </a> </li>
                      <li className="nav-item active"><a className="nav-link" href="devices-details.html"> Details </a></li>
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
                      <th className="border-top-0"> <a href=" ">Hostname</a> / <a href=" ">Domain</a> / <a href=" ">Location</a></th>
                      <th className="border-top-0"></th>
                      <th className="border-top-0"><a href=" ">Operating System</a> / <a href=" ">Hardware Platform</a></th>
                      <th className="border-top-0"> <a href=" ">Uptime</a> / <a href=" ">sysName</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td><div className="mb-2"><i className="fas fa-ethernet"></i> <span className="label-group label-danger">8</span></div>
                        <div className="mb-2"> <i className="fab fa-usb"></i> <span className="label-group label-default">8</span> <span className="label-group label-danger">1</span> </div></td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7 (Level 6)<br/>
                        CCR1009-7G-1C-1S+</td>
                      <td className="text-truncate">113d 8h 21m 14s<br/>
                        one - 19</td>
                    </tr>
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-redhat font-size-22 text-danger"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.19</strong></a></td>
                      <td className="text-nowrap"><div className="mb-2"><i className="fas fa-ethernet"></i> <span className="label-group label-success">8</span></div>
                        <div className="mb-2"><i className="fab fa-usb"></i> <span className="label-group label-error">8</span> <span className="label-group label-danger">1</span></div></td>
                      <td className="text-truncate">Linux 3.10.0-1160.99.1.el7.x86_64 (RedHat 7)<br/>
                        Generic x86 [64bit]</td>
                      <td className="text-truncate">Down (SNMP) 23d 22h 26s<br/>
                        nms36 </td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.20</strong></a></td>
                      <td className="text-nowrap"><div className="mb-2"><i className="fas fa-ethernet"></i> <span className="label-group label-success">8</span></div>
                        <div className="mb-2"><i className="fab fa-usb"></i> <span className="label-group label-default">8</span> <span className="label-group label-danger">1</span></div></td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7 (Level 6)<br/>
                        CCR1009-7G-1C-1S+</td>
                      <td className="text-truncate">113d 8h 21m 14s<br/>
                        one - 19</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td className="text-nowrap"><div className="mb-2"><i className="fas fa-ethernet"></i> <span className="label-group label-default">8</span></div>
                        <div className="mb-2"><i className="fab fa-usb"></i> <span className="label-group label-success">8</span> <span className="label-group label-default">1</span></div></td>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7 (Level 5)<br/>
                        RB3011UiAS</td>
                      <td className="text-truncate">107d 1h 35m 37s<br/>
                        one - 24</td>
                    </tr>
                  </tbody>
                </table>
                
                
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

export default DeviceDetails
