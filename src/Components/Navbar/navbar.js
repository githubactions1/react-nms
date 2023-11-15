import React from 'react';
import { BsBell } from 'react-icons/bs';
import { Person } from 'react-bootstrap-icons';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#FCE4DB' }}>
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/"> Network Management System </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Search */}
            <li className="nav-item">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            {/* Notifications */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BsBell  style={{paddingLeft:"0px",pr:"15px", color:"red"}}/> 
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
  );
};

export default Navbar;
