import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Navbar from '../Navbar/navbar.js'; 

function Devices() {
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
  <div>
    <Navbar />
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
                
                  <DropdownMultiselect multiple aria-label="Default select example" data-live-search="true" placeholder="Select Locations"
        options={["one", "two", "three"]}
        name="Select Locations"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS"
        options={["one", "two", "three"]}
        name="Select OS "

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                 
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Hardware"
        options={["one", "two", "three"]}
        name="Select Hardware"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                 
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Vendor"
        options={["one", "two", "three"]}
        name="Select Vendor"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                 
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
                 
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select OS Version"
        options={["one", "two", "three"]}
        name="Select OS Version"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Featureset"
        options={["one", "two", "three"]}
        name="Select Featureset"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                
                  <DropdownMultiselect class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select Device Type"
        options={["one", "two", "three"]}
        name="Select Device Type"

      />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
               
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
                  <button id="search" name="search" type="button" class="btn btn-light pull-right text-nowrap" onClick="" value=""><i class="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent"> <a class="navbar-brand" href="Devices">Devices</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                  <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link" href="Devices"> Basic </a> </li>
                      <li class="nav-item"><a class="nav-link" href="DeviceDetails"> Details </a></li>
                      <li class="nav-item"><a class="nav-link" href="DeviceStatus"> Status </a></li>
                      <li class="nav-item"><a class="nav-link" href="DevicesPolligPerformance"> Pollig Performance </a></li>
                      <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="Graphs" data-bs-toggle="dropdown"> Graphs
                        <div class="arrow-down"></div>
                        </a>
                        <ul class="dropdown-menu scrollspy-example">
                          <li><a class="dropdown-item" href="DeviceAvailability">Device Availability</a></li>
                          <li><a class="dropdown-item" href="Traffic">Traffic</a></li>
                          <li><a class="dropdown-item" href="ActiveAAASessions ">Active AAA Sessions</a></li>
                          <li><a class="dropdown-item" href="Current">Current</a></li>
                          <li><a class="dropdown-item" href="DHCPLeases">DHCP Leases</a></li>
                          <li><a class="dropdown-item" href="FanSpeed">Fanspeed</a></li>
                          <li><a class="dropdown-item" href="Frequency">Frequency</a></li>
                          <li><a class="dropdown-item" href="MemoryUsage">Memory Usage</a></li>
                          <li><a class="dropdown-item" href="PingResponse">Ping Response</a></li>
                          <li><a class="dropdown-item" href="SNMPResponse">SNMP Response</a></li>
                          <li><a class="dropdown-item" href="PollerDuration">Poller Duration</a></li>
                          <li><a class="dropdown-item" href="PollerMySQLOperations">Poller MySQL Operations</a></li>
                          <li><a class="dropdown-item" href="PollerMySQLTimes">Poller MySQL Times</a></li>
                          <li><a class="dropdown-item" href="PollerMemoryusage">Poller Memory usage</a></li>
                          <li><a class="dropdown-item" href="PollerSNMPRequests">Poller SNMP Requests</a></li>
                          <li><a class="dropdown-item" href="PollerSNMPErrors">Poller SNMP Errors</a></li>
                          <li><a class="dropdown-item" href="PollerSNMPErrorsTimes">Poller SNMP Errors Times</a></li>
                          <li><a class="dropdown-item" href="Poller SNMP Times">Poller SNMP Times</a></li>
                          <li><a class="dropdown-item" href="Power">Power</a></li>
                          <li><a class="dropdown-item" href="Processors">Processors</a></li>
                          <li><a class="dropdown-item" href="Filesystem Usage">Filesystem Usage</a></li>
                          <li><a class="dropdown-item" href="Temperature">Temperature</a></li>
                          <li><a class="dropdown-item" href="Device Uptime">Device Uptime</a></li>
                          <li><a class="dropdown-item" href="Voltage">Voltage</a></li>
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

export default Devices



