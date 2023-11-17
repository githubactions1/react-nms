import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Navbar from '../Navbar/navbar.js'; 

const Processors = () => {
  const handleSearchClick = () => {
    console.log('Search button clicked!');
    
  };
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
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event">
                    <option value="1">alert</option>
                    <option value="2">ignore</option>
                    <option value="3">Ok</option>
                  </select> */}
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status Event"
        options={["alert", "ignore","ok"]}
        name="Status Event"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status">
                    <option value="1">false</option>
                    <option value="2">true</option>
                    <option value="3">Waiting for load</option>
                  </select> */}
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Status"
        options={["false", "true","Waiting for load"]}
        name="Status"
       
        
      />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  {/* <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Measured State">
                    <option value="1">Without Measure</option>
                    <option value="2">Measure Up</option>
                    <option value="3">Measure Down</option>
                    <option value="4">Measure Shutdown</option>
                  </select> */}
                  <DropdownMultiselect className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Measured State"
        options={["false", "true","Waiting for load"]}
        name="Measured State"
       
        
      />
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
      <button
        id="search"
        name="search"
        type="button"
        className="btn btn-light text-nowrap"
        onClick={handleSearchClick}
        value=""
      >
       <i className="mdi mdi-magnify"></i>&nbsp;&nbsp;Search
      </button>
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

export default Processors
