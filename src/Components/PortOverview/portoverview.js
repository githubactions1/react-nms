import React from 'react'
// import Chart from 'chart.js';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from '../Navbar/navbar.js'; 

const PortOverview = () => {
  return (
    <>
      <div id="layout-wrapper">
  <div className="main-content">
    <div>
       <Navbar/>
    </div>



    <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" href="index.html"> <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href="javascript void(0)" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Devices
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" className="dropdown-item"><i className="mdi mdi-television-play"></i> All Devices <span className="badge badge-pill badge-info">3</span></a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href="javascript void(0)" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-office-building"></i> Locations
                    <div className="arrow-down"></div>
                    </a><div className="dropdown-menu" aria-labelledby="topnav-auth"> <a href="javascript void(0)" className="dropdown-item"><i className="mdi mdi-currency-inr"></i> INDIA</a> <a href="javascript void(0)" className="dropdown-item"><i className="mdi mdi-currency-usd"></i> USA</a> <a href="javascript void(0)" className="dropdown-item"><i className="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href="severs.html" className="dropdown-item"><i className="mdi mdi-server-network"></i> Severs <span className="badge badge-pill badge-success">2</span></a> <a href="network.html" className="dropdown-item"><i className="mdi mdi-access-point-network"></i> Network <span className="badge badge-pill badge-primary">1</span></a> <a href="down.html" className="dropdown-item"><i className="mdi mdi-arrow-down-bold-circle"></i> Down <span className="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href="javascript void(0)" id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fab fa-hubspot mr-2"></i>Ports
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more"> <a href="ports-basic.html" className="dropdown-item"><i className="fas fa-desktop"></i> All Ports <span className="badge badge-pill badge-danger">37</span></a> <a href="vlans.html" className="dropdown-item"><i className="feather-cpu"></i> VLANs</a> <a href="neighbours.html" className="dropdown-item"><i className="feather-grid"></i> Neighbours <span className="badge badge-pill badge-primary">20</span></a> <a href="customers.html" className="dropdown-item"><i className="fas fa-user-friends"></i> Customers </a> <a href="transit.html" className="dropdown-item"><i className="feather-package"></i> Transit </a> <a href="peering.html" className="dropdown-item"><i className="feather-target"></i> Peering </a> <a href="peering-transit.html" className="dropdown-item"><i className="feather-zap"></i> Peering &amp; Transit </a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href="javascript void(0)" id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-unlink"></i> Status Breakdown
                    <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-tables"> <a href="down.html" className="dropdown-item"><i className="fas fa-download"></i> Down <span className="badge badge-pill badge-danger">20</span></a> <a href="up.html" className="dropdown-item"><i className="fas fa-upload"></i> Up <span className="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li> <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Health
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
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td className="blue border-top-0"></td>
                      <td className="border-top-0"><i className="fab fa-accusoft font-size-22"></i></td>
                      <td className="border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td className="border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Device Uptime</a></td>
                      <td className="border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Memory Usage</a></td>
                      <td className="border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Processors</a></td>
                      <td className="border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Traffic</a></td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item active"><a className="nav-link" href="port-overview.html"> Overview </a> </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Graphs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href="graphs-system.html">System</a></li>
                          <li><a className="dropdown-item" href="graphs-processor.html">Processor</a></li>
                          <li><a className="dropdown-item" href="graphs-memory.html">Memory</a></li>
                          <li><a className="dropdown-item" href="graphs-storage.html">Storage</a></li>
                          <li><a className="dropdown-item" href="graphs-authentication.html">Authentication</a></li>
                          <li><a className="dropdown-item" href="graphs-dhcp.html">DHCP</a></li>
                          <li><a className="dropdown-item" href="graphs-poller.html">Poller</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Health
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href="health-overview.html">Overview</a></li>
                          <li><a className="dropdown-item" href="health-processor.html">Processor</a></li>
                          <li><a className="dropdown-item" href="health-memory.html">Memory</a></li>
                          <li><a className="dropdown-item" href="health-storage.html">Storage</a></li>
                          <li><a className="dropdown-item" href="health-status.html">Status</a></li>
                          <li><a className="dropdown-item" href="health-temperature.html">Temperature</a></li>
                          <li><a className="dropdown-item" href="health-fanspeed.html">Fanspeed</a></li>
                          <li><a className="dropdown-item" href="health-current.html">Current</a></li>
                          <li><a className="dropdown-item" href="health-voltage.html">Voltage</a></li>
                          <li><a className="dropdown-item" href="health-power.html">Power</a></li>
                          <li><a className="dropdown-item" href="health-frequency.html">Frequency</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Ports
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu scrollspy-example">
                          <li><a className="dropdown-item" href="prts-basic.html">Basic</a></li>
                          <li><a className="dropdown-item" href="prts-details.html">Details</a></li>
                          <li><a className="dropdown-item" href="prts-ip.html">IPv4 addresses</a></li>
                          <li><a className="dropdown-item" href="prts-arp.html">ARP/NDP Table</a></li>
                          <li><a className="dropdown-item" href="prts-neighbours.html">Neighbours</a></li>
                          <li><a className="dropdown-item" href="prts-map.html">Map</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown"> <a className="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Logs
                        <div className="arrow-down"></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="logs-event-log.html">Event Log</a></li>
                          <li><a className="dropdown-item" href="logs-alert-log.html">Alert Log</a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="logs-alerts.html"> Alerts </a> </li>
                    </ul>
                  </div>
                  {/* <!-- navbar-collapse.// -->  */}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <thead>
                    <tr className="text-truncate">
                      <th className="border-top-0"><a href=" "> RouterOS CCR1009-7G-1C-1S+</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-light">
                      <th className="text-truncate">Vendor/Hardware</th>
                      <td className="text-truncate">Mikrotik CCR1009-7G-1C-1S+</td>
                    </tr>
                    <tr>
                      <th className="text-truncate">Operating system</th>
                      <td className="text-truncate">Mikrotik RouterOS 6.49.7 (Level 6)</td>
                    </tr>
                    <tr className="bg-light">
                      <th className="text-truncate">System Name</th>
                      <td className="text-truncate">one - 19</td>
                    </tr>
                    <tr>
                      <th className="text-truncate">Cached IP</th>
                      <td className="text-truncate">175.101.18.18</td>
                    </tr>
                    <tr className="bg-light">
                      <th className="text-truncate">Asset tag</th>
                      <td className="text-truncate">1IPK-3U8P</td>
                    </tr>
                    <tr>
                      <th className="text-truncate">Serial</th>
                      <td className="text-truncate">E3200DE5849E</td>
                    </tr>
                    <tr className="bg-light">
                      <th className="text-truncate">Uptime</th>
                      <td className="text-truncate">113 days, 8h 21m 14s</td>
                    </tr>
                    <tr>
                      <th className="text-truncate">Last reboot</th>
                      <td className="text-truncate">2023-06-30 02:33:35</td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <thead>
                    <tr className="text-truncate">
                      <th className="border-top-0"><a href=" "> Ports</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-truncate" colSpan="3"><p><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><img src="assets/images/graph11.png" alt="" className="img-fluid"/></a></p></td>
                    </tr>
                    <tr className="bg-light">
                      <td className="text-truncate border-top-0"><i className="fas fa-desktop"></i> 11</td>
                      <td className="text-truncate border-top-0"><i className="fas fa-check-circle text-success"></i> 9</td>
                      <td className="text-truncate border-top-0"><i className="fas fa-minus-circle text-success"></i> 15</td>
                      <td className="text-truncate border-top-0"><i className="fas fa-minus-circle text-danger"></i> 10</td>
                    </tr>
                    <tr>
                      <th className="text-truncate border-top-0" colSpan="3"> <a href=" " className="entity-popup text-nowrap trigger text-danger" data-eid="1" data-etype="device">Ether1</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether2</a>, <a href=" " className="entity-popup text-nowrap trigger text-danger" data-eid="1" data-etype="device">Ether3</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether4</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether5</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether6</a>, <a href=" " className="entity-popup text-nowrap trigger text-danger" data-eid="1" data-etype="device">Ether7</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether8</a>, <a href=" " className="entity-popup text-nowrap trigger text-danger" data-eid="1" data-etype="device">Ether9</a>, <a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">Ether10</a>, <a href=" " className="entity-popup text-nowrap trigger text-danger" data-eid="1" data-etype="device">lvpn</a> </th>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="box-header">
                  <h3 className="box-title">Eventlog</h3>
                </div>
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>10d 4h 3m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>175.101.18.21</strong></a> Arp-table: 3 added, 4 deleted, 44 unchanged.</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>13d 2h 20m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>175.101.18.21</strong></a> Arp-table: 2 added, 4 deleted, 46 unchanged.</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>15d 2h 7m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a> Arp-table: 5 added, 4 deleted, 45 unchanged.</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>20d 23h 26m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.21</strong></a> Arp-table: 5 added, 4 deleted, 44 unchanged.</td>
                    </tr>
                    <tr>
                      <td className="red"></td>
                      <td className="text-truncate"><a href=" "><strong>24d 22h 39m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup orange text-nowrap trigger" data-eid="1" data-etype="device"> <strong>Ether8</strong></a> Interface changed: [ifPromiscuousMode] '' -- '0'</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>24d 23h 2m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether8</strong></a> Interface changed: [ifMtu] '' -- '1500'; [ifSpeed] '' -- '0'; [ifPhysAddress]<br/>
                        '' -- 'c4ad349d4a33'; [ifAdminStatus] '' -- 'up';<br/>
                        [ifOperStatus] '' -- 'down'; [ifHighSpeed]<br/>
                        '' -- '0'; [port_label] '' -- 'Ether8'; [port_label_short] '' -- 'Ether8';<br/>
                        [port_label_base] '' -- 'Ether'; [port_label_num] '' -- '8';<br/>
                        [ifLastChange] '2023-10-06 11:13:51' -- '2023-07-06 09:19:14'</td>
                    </tr>
                    <tr>
                      <td className="blue"></td>
                      <td className="text-truncate"><a href=" "><strong>24d 23h 2m</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>Ether8</strong></a> Interface changed: [ifMtu] '' -- '1500'; [ifSpeed] '' -- '0'; [ifPhysAddress]<br/>
                        '' -- 'c4ad349d4a33'; [ifAdminStatus] '' -- 'up';<br/>
                        [ifOperStatus] '' -- 'down'; [ifHighSpeed]<br/>
                        '' -- '0'; [port_label] '' -- 'Ether8'; [port_label_short] '' -- 'Ether8';<br/>
                        [port_label_base] '' -- 'Ether'; [port_label_num] '' -- '8';<br/>
                        [ifLastChange] '2023-10-06 11:13:51' -- '2023-07-06 09:19:14'</td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Tablewith hoverable rows -->  */}
                
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <thead>
                    <tr className="text-truncate">
                      <th className="border-top-0"><a href=" "> Processors</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-truncate" colSpan="3"><p><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><img src="assets/images/graph11.png" alt="" className="img-fluid"/></a></p></td>
                    </tr>
                    <tr>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>Processor</strong></a></td>
                      <td className="text-truncate"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                        </a></td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-desktop"></i> Memory</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>main memory</strong></a></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text -nowrap trigger" data-eid="1" data-etype="device">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                      </div>
                      </a></td>
                  </tr>
                  </tbody>
                  
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-database"></i> Storage</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>system disk</strong></a></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">
                      <div className="progress bg-primary">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                      </div>
                      </a></td>
                  </tr>
                  </tbody>
                  
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-industry"></i> Status Indicators</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>Ether10 PoE state (ether10)</strong></a></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device">
                      <div className="progress bg-primary">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                      </div>
                      </a></td>
                  </tr>
                  </tbody>
                  
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-temperature-high"></i> Temperature</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>System</strong></a></td>
                    <td className="text-truncate border-top-0 pull-right"><span className="badge badge-success badge-pill">36°C</span></td>
                  </tr>
                  </tbody>
                  
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-house-damage"></i> Voltage</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>System</strong></a></td>
                    <td className="text-truncate border-top-0 pull-right"><span className="badge badge-success badge-pill">24.2V</span></td>
                  </tr>
                  </tbody>
                  
                </table>
                {/* <!-- End Table with hoverable rows -->  */}
                
              </div>
            </div>
            <div className="card">
              <div className="card-body"> 
                
                {/* <!-- Table with hoverable rows --> */}
                <table className="table table-hover">
                  <tbody>
                  <th className="text-truncate border-top-0 font-size-15 bg-light" colSpan="3"><a href=" "><i className="fas fa-recycle"></i> Frequency</a></th>
                  <tr>
                    <td className="blue"></td>
                    <td className="text-truncate border-top-0"><a href=" " className="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"> <strong>Processor</strong></a></td>
                    <td className="text-truncate border-top-0 pull-right"><span className="badge badge-success badge-pill">1.4GHz</span></td>
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
<script src="assets/plugins/morris-js/morris.min.js"></script> 
{/* <!-- Raphael Js-->  */}
<script src="assets/plugins/raphael/raphael.min.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="assets/pages/dashboard-demo.js"></script> 

{/* <!-- App js -->  */}
<script src="assets/js/theme.js"></script> 
{/* <!-- Script Tooltip js -->  */}
<script src="assets/js/script_tooltip.js"></script> 

{/* <!-- Morris Custom Js-->  */}
<script src="assets/pages/morris-chart-demo.js"></script> 

{/* <!-- Chart Js-->  */}
<script src="assets/plugins/chart-js/chart.min.js"></script> 

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
      <thead>
        <tr className="text-truncate">
          <th className="border-top-0"><a href=" "> 175.101.18.18 - Processor Usage</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-truncate"><p><img src="assets/images/g11.png" alt="" className="img-fluid"/></p></td>
          <td className="text-truncate"><p><img src="assets/images/g22.png" alt="" className="img-fluid"/></p></td>
        </tr>
        <tr>
          <td className="text-truncate"><p><img src="assets/images/g33.png" alt="" className="img-fluid"/></p></td>
          <td className="text-truncate"><p><img src="assets/images/g44.png" alt="" className="img-fluid"/></p></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  )
}

export default PortOverview
