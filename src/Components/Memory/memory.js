import React from 'react'
import Navbar from '../Navbar/navbar.js'; 

const Memory = () => {
  return (
    
    <>
      <div id="layout-wrapper">
  <div class="main-content">
     <div>
        <Navbar/>
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