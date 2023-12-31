import React from 'react'
import Navbar from '../Navbar/navbar.js'; 

export default function PortsBasic() {
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
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device Locations">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Port Mac Address"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Port State">
                    <option value="1">Up</option>
                    <option value="2">Down</option>
                    <option value="3">Admin Down</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Port Media">
                    <option value="1">Ethernet (ethernetCsmacd)</option>
                    <option value="2">PPP(ppp)</option>
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
                  <input type="text" id="" className="form-control" placeholder="Device Hostname"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Port Name"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <input type="text" id="" className="form-control" placeholder="Port Description (alias)"/>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Port Speed">
                    <option value="1">1Gbps</option>
                    <option value="2">100Mbps</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Port Type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="form-group">
                  <select className="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-1 mt-2">
                <button id="search" name="search" type="button" className="btn btn-light pull-right text-nowrap" onClick="" value=""><i className="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent"> <a className="navbar-brand" href=" ">Ports</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item active"><a className="nav-link" href="ports-basic.html"> Basic </a> </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" "data-bs-toggle="dropdown"> Graphs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href=" ">Bits</a></li>
                          <li><a className="dropdown-item" href=" ">Ucast Pkts</a></li>
                          <li><a className="dropdown-item" href=" ">NU Pkts</a></li>
                          <li><a className="dropdown-item" href=" ">Pkt Size</a></li>
                          <li><a className="dropdown-item" href=" ">DHCP Leases</a></li>
                          <li><a className="dropdown-item" href=" ">Percent</a></li>
                          <li><a className="dropdown-item" href=" ">Errors</a></li>
                          <li><a className="dropdown-item" href=" ">Discards</a></li>
                          <li><a className="dropdown-item" href=" ">Ethernet Errors</a></li>
                          <li><a className="dropdown-item" href=" ">FDB counts</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" "data-bs-toggle="dropdown"> Aggregate Graphs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href=" ">Bits</a></li>
                          <li><a className="dropdown-item" href=" ">Bits (95th)</a></li>
                          <li><a className="dropdown-item" href=" ">Unicast Packets</a></li>
                          <li><a className="dropdown-item" href=" ">Multicast Packets</a></li>
                          <li><a className="dropdown-item" href=" ">Broadcast Packets</a></li>
                          <li><a className="dropdown-item" href=" ">Errors</a></li>
                          <li><a className="dropdown-item" href=" ">Discards</a></li>
                          <li><a className="dropdown-item" href=" ">IPv6</a></li>
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
                    <tr>
                      <th className="border-top-0"></th>
                      <th className="border-top-0"></th>
                      <th className="border-top-0">Device</th>
                      <th className="border-top-0">Port Name / Description / Errors</th>
                      <th className="border-top-0">Bits [In / Out]</th>
                      <th className="border-top-0">% [In / Out]</th>
                      <th className="border-top-0">Pkts [In / Out]</th>
                      <th className="border-top-0">Speed / MTU</th>
                      <th className="border-top-0">Media / MAC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">310Mbps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary">17.8Mbps</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">31%</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary">2%</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success"> 29.3kpps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary"> 11.4kpps</span></td>
                      <td className="text-truncate">1Gbps <br/>
                        1500</td>
                      <td className="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
                    </tr>
                    <tr className="error">
                      <td className="red"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">310Mbps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className="text-primary">17.8Mbps</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">31%</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className="text-primary">2%</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success"> 29.3kpps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className="text-primary"> 11.4kpps</span></td>
                      <td className="text-truncate">1Gbps <br/>
                        1500</td>
                      <td className="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
                    </tr>
					  
					    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td className="text-truncate"><a href=" "className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">310Mbps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary">17.8Mbps</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success">31%</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary">2%</span></td>
                      <td className="text-truncate"><i className="fas fa-arrow-alt-circle-down text-success"></i> <span className="text-success"> 29.3kpps</span> <br/>
                        <i className="fas fa-arrow-alt-circle-up text-primary"></i> <span className=" text-primary"> 11.4kpps</span></td>
                      <td className="text-truncate">1Gbps <br/>
                        1500</td>
                      <td className="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
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

	<div id="pop-up1">
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
  <div className="table-responsive">
    <table className="table table-centered table-hover table-xl mb-0" id="">
      <tbody>
        <tr className="bg-light">
          <td className="blue"></td>
          <td className="text-truncate"><i className="fab fa-atlassian sync"></i></td>
          <td className="text-truncate"><a href=" "><strong>175.101.18.18</strong></a></td>
          <td className="text-truncate">Mikrotik RouterOS 6.49.7<br/>
            Mikrotik CCR1009-7G-1C-1S+</td>
          <td className="text-truncate">110d 5h 8m 18s<br/>
            one - 19</td>
        </tr>
        <tr className="table-danger">
          <th scope="col" colSpan="5">Eventlog</th>
        </tr>
        <tr>
          <td className="text-truncate" colSpan="3">Mikrotik RouterOS 6.49.7<br/>
            Mikrotik CCR1009-7G-1C-1S+</td>
          <td className="text-truncate">110d 5h 8m 18s<br/>
            one - 19</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}
