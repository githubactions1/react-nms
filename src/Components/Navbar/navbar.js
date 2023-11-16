import React from 'react';
import { AiOutlineBell  } from 'react-icons/ai/index.esm.js';
import { Person } from 'react-bootstrap-icons';


const Navbar = () => {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#FCE4DB' }}>
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/"> Network Management System </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            


            <li className="nav-item">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AiOutlineBell   style={{paddingLeft:"0px",pr:"15px", color:"red"}}/> 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="Notification 1">Notification 1</a></li>
                <li><a className="dropdown-item" href="Notification 2">Notification 2</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="View All">View All</a></li>
              </ul>
            </li>
            {/* User Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" " id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <Person /> 
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                <li><a className="dropdown-item" href="inbox">inbox</a></li>
                <li><a className="dropdown-item" href="Profile">Profile</a></li>
                <li><a className="dropdown-item" href="Settings">Settings</a></li>
                <li><a className="dropdown-item" href="Lock Account">Lock Account</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Logout">Logout</a></li>
              </ul>
            </li>
          </ul>
          </div>
      </div>
    </nav>
      
    

    <div className="topnav">
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
          <div className="collapse navbar-collapse" id="topnav-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" href="Home"> <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href="Devices" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Devices
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="Devices" className="dropdown-item"><i className="mdi mdi-television-play"></i> All Devices <span className="badge badge-pill badge-info">3</span></a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href="Locations" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-office-building"></i> Locations
                    <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-auth"> <a href="INDIA" className="dropdown-item">INDIA</a> <a href="USA" className="dropdown-item">USA</a> <a href="UK" className="dropdown-item">UK</a> </div>
                  </div>
                  <a href="Severs" className="dropdown-item"><i className="mdi mdi-server-network"></i> Severs <span className="badge badge-pill badge-success">2</span></a> <a href="Network" className="dropdown-item"><i className="mdi mdi-access-point-network"></i> Network <span className="badge badge-pill badge-primary">1</span></a> <a href="Down" className="dropdown-item"><i className="mdi mdi-arrow-down-bold-circle"></i> Down <span className="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href="Ports" id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fab fa-hubspot mr-2"></i>Ports
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-more"> <a href="Ports" className="dropdown-item"><i className="fas fa-desktop"></i> All Ports <span className="badge badge-pill badge-danger">37</span></a> <a href="VLANs" className="dropdown-item"><i className="feather-cpu"></i> VLANs</a> <a href="neighbours.html" className="dropdown-item"><i className="feather-grid"></i> Neighbours <span className="badge badge-pill badge-primary">20</span></a> <a href="customers.html" className="dropdown-item"><i className="fas fa-user-friends"></i> Customers </a> <a href="transit.html" className="dropdown-item"><i className="feather-package"></i> Transit </a> <a href="peering.html" className="dropdown-item"><i className="feather-target"></i> Peering </a> <a href="peering-transit.html" className="dropdown-item"><i className="feather-zap"></i> Peering &amp; Transit </a>
                  <div className="dropdown"> <a className="dropdown-item dropdown-toggle arrow-none" href="StatusBreakdown" id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-unlink"></i> Status Breakdown
                    <div className="arrow-down"></div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="topnav-tables"> <a href="Down" className="dropdown-item"><i className="fas fa-download"></i> Down <span className="badge badge-pill badge-danger">20</span></a> <a href="Up" className="dropdown-item"><i className="fas fa-upload"></i> Up <span className="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle arrow-none" href="Health" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-google-pages mr-2"></i>Health
                <div className="arrow-down"></div>
                </a>
                <div className="dropdown-menu" aria-labelledby="topnav-pages"> <a href="Processors" className="dropdown-item">Processors</a> <a href="Memory" className="dropdown-item">Memory</a> <a href="Storage" className="dropdown-item">Storage</a> <a href="Status" className="dropdown-item">Status</a> <a href="Temperature" className="dropdown-item">Temperature</a> <a href="Fanspeed" className="dropdown-item">Fanspeed</a> <a href="Current" className="dropdown-item">Current</a> <a href="Voltage" className="dropdown-item">Voltage</a> <a href="Power" className="dropdown-item">Power</a> <a href="Frequency" className="dropdown-item">Frequency</a> </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  
    </>
  );
};

export default Navbar;
