import React from 'react'
import Navbar from '../Navbar/navbar.js'; 

const Sensors = () => {
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
              <div class="col-lg-3">
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
              <div class="col-lg-3">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Sensor Class">
                    <option value="1">Current</option>
                    <option value="2">Fanspeed</option>
                    <option value="3">Frequency</option>
                    <option value="4">Power</option>
                    <option value="5">Temperature</option>
                    <option value="6">Voltage</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Sensor Event">
                    <option value="1">Ok</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3">
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
              <div class="col-lg-5">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Sensor description"/>
                </div>
              </div>
              <div class="col-lg-5">
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
                      <th class="border-top-0"><a href=" ">Class</a></th>
                      <th class="border-top-0"><a href=" ">Thresholds</a></th>
                      <th class="border-top-0"><a href=" ">History</a></th>
                      <th class="border-top-0"><a href=" ">Last changed</a></th>
                      <th class="border-top-0"><a href=" ">Event</a></th>
                      <th class="border-top-0"><a href=" ">Value</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-info">voltage</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">20.6V - (∞) 27.8V</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">24.2V</span></td>
                    </tr>
                    <tr>
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-info">voltage</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">20.6V - (∞) 27.8V</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">24.2V</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-info">voltage</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">20.6V - (∞) 27.8V</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">24.2V</span></td>
                    </tr>
                    <tr>
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-info">voltage</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">20.6V - (∞) 27.8V</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">24.2V</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-success">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">0°C - (∞) 51.2°C</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">36°C</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Processor</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-success">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">0°C - (∞) 51.2°C</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">36°C</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>System</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-success">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">0°C - (∞) 51.2°C</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">36°C</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Processor</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-success">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">0°C - (∞) 51.2°C</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">36°C</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>frequency</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-warning">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">1.33GHz - (∞) 1.47GHz</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">1.4GHz</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>frequency</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-warning">temperature</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">1.33GHz - (∞) 1.47GHz</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">1.4GHz</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>power</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-danger">Power</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">∞ - (∞) 33W</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">22.1W</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>power</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-danger">Power</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">∞ - (∞) 33W</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">25d 22h ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">21.5W</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>power</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-primary">current</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">∞ - (∞) 1.37A</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 52m ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">0.92A</span></td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a></td>
                      <td class="text-truncate"><a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>power</strong></a></td>
                      <td class="text-truncate"><span class="badge badge-primary">current</span></td>
                      <td class="text-truncate"><span class="badge badge-dark">∞ - (∞) 1.37A</span></td>
                      <td class="text-truncate"></td>
                      <td class="text-truncate">26d 52m ago </td>
                      <td class="text-truncate"><span class="badge badge-success">Ok</span></td>
                      <td class="text-truncate"><span class="badge badge-success">0.92A</span></td>
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

{/* <!-- juery  -->  */}
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

export default Sensors
