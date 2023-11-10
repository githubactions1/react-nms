import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
// import Chart from 'chart.js';
import axios from "axios";
import { useState, useEffect } from "react";
// import ReactSearchBox from "react-search-box";



function Home1() {
    const [apiData, setApiData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/devices';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setApiData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
      
    const [portData, setPortData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/ports';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setPortData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 


    const [sensorsData, setsensorsData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/sensors';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setsensorsData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
  

    const [statusesData,setStatusesData] = useState({count:0});
  
    useEffect(() => {
    
      const API_URL = 'http://202.53.92.6:8080/apirt1/nmsuat/dashboard/statuses';
      
     
  
      axios
        .get(API_URL)
        .then((response) => {
          
          console.log(response.data.data[0].count)
         
          
          setStatusesData (response.data.data[0]);
          
  
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 

      // const data = [
      //   {
      //     key: "john",
      //     value: "John Doe",
      //   },
      //   {
      //     key: "jane",
      //     value: "Jane Doe",
      //   },
      //   {
      //     key: "mary",
      //     value: "Mary Phillips",
      //   },
      //   {
      //     key: "robert",
      //     value: "Robert",
      //   },
      //   {
      //     key: "karius",
      //     value: "Karius",
      //   },
      // ];
      // const [searchValue, setSearchValue] = useState("Doe");

      // const handleSearch = (record) => {
      //   console.log(record);
      // };
  
  
  return (
    <>
      <div id="layout-wrapper">
        <div className="main-content">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="navbar-brand-box d-flex align-items-left">
                {" "}
                <a href="index.html" className="logo">
                  {" "}
                  <i className="feather-arrow-right-circle"></i>{" "}
                  <span> Network Management System </span>{" "}
                </a>
                <button
                  type="button"
                  className="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light"
                  data-toggle="collapse"
                  data-target="#topnav-menu-content"
                >
                  {" "}
                  <i className="fa fa-fw fa-bars"></i>{" "}
                </button>
              </div>
              <div className="d-flex align-items-center">
                <div className="dropdown d-inline-block ml-2">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect waves-light"
                    id="page-header-search-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="mdi mdi-magnify"></i>{" "}
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">

                          {/* <ReactSearchBox
                            placeholder="Placeholder"
                            value={searchValue}
                            data={data}
                            callback={handleSearch}
                          /> */}
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                              <i className="mdi mdi-magnify"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    className="btn header-item noti-icon waves-effect waves-light"
                    id="page-header-notifications-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="mdi mdi-bell"></i> 1
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0"> Notifications </h6>
                        </div>
                        <div className="col-auto">
                          {" "}
                          <a href="#!" className="small">
                            {" "}
                            View All
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div data-simplebar>
                      {" "}
                      <a href=" " className="text-reset notification-item">
                        <div className="media">
                          {" "}
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="mr-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Samuel Coverdale</h6>
                            <p className="font-size-12 mb-1">
                              You have new follower on Instagram
                            </p>
                            <p className="font-size-12 mb-0 text-muted">
                              <i className="mdi mdi-clock-outline"></i> 2 min
                              ago
                            </p>
                          </div>
                        </div>
                      </a>{" "}
                      <a href=" " className="text-reset notification-item">
                        <div className="media">
                          <div className="avatar-xs mr-3">
                            {" "}
                            <span className="avatar-title bg-success rounded-circle">
                              {" "}
                              <i className="mdi mdi-cloud-download-outline"></i>{" "}
                            </span>{" "}
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Download Available !</h6>
                            <p className="font-size-12 mb-1">
                              Latest version of admin is now available. Please
                              download here.
                            </p>
                            <p className="font-size-12 mb-0 text-muted">
                              <i className="mdi mdi-clock-outline"></i> 4 hours
                              ago
                            </p>
                          </div>
                        </div>
                      </a>{" "}
                      <a href=" " className="text-reset notification-item">
                        <div className="media">
                          {" "}
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="mr-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="media-body">
                            <h6 className="mt-0 mb-1">Victoria Mendis</h6>
                            <p className="font-size-12 mb-1">
                              Just upgraded to premium account.
                            </p>
                            <p className="font-size-12 mb-0 text-muted">
                              <i className="mdi mdi-clock-outline"></i> 1 day
                              ago
                            </p>
                          </div>
                        </div>
                      </a>{" "}
                    </div>
                    <div className="p-2 border-top">
                      {" "}
                      <a
                        className="btn btn-sm btn-light btn-block text-center"
                        href="javascript void(0)"
                      >
                        {" "}
                        <i className="mdi mdi-arrow-down-circle mr-1"></i> Load
                        More..{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block ml-2">
                  <button
                    type="button"
                    className="btn header-item waves-effect waves-light"
                    id="page-header-user-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-3.jpg"
                      alt="Header Avatar"
                    />{" "}
                    <span className="d-none d-sm-inline-block ml-1">
                      Jamie D.
                    </span>{" "}
                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>{" "}
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    {" "}
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript void(0)"
                    >
                      {" "}
                      <span>Inbox</span>{" "}
                      <span>
                        {" "}
                        <span className="badge badge-pill badge-info">
                          3
                        </span>{" "}
                      </span>{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript void(0)"
                    >
                      {" "}
                      <span>Profile</span>{" "}
                      <span>
                        {" "}
                        <span className="badge badge-pill badge-warning">
                          1
                        </span>{" "}
                      </span>{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript void(0)"
                    >
                      {" "}
                      Settings{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript void(0)"
                    >
                      {" "}
                      <span>Lock Account</span>{" "}
                    </a>{" "}
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript void(0)"
                    >
                      {" "}
                      <span>Log Out</span>{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="topnav">
            <div className="container-fluid">
              <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                <div
                  className="collapse navbar-collapse"
                  id="topnav-menu-content"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="index.html">
                        {" "}
                        <i className="mdi mdi-view-dashboard mr-2"></i>Dashboard{" "}
                      </a>{" "}
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href=" "
                        id="topnav-pages"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="mdi mdi-google-pages mr-2"></i>Devices
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-pages"
                      >
                        {" "}
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-television-play"></i> All
                          Devices{" "}
                          <span className="badge badge-pill badge-info">3</span>
                        </a>
                        <div className="dropdown">
                          {" "}
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href=" "
                            id="topnav-auth"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-office-building"></i>{" "}
                            Locations
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-auth"
                          >
                            {" "}
                            <a href=" " className="dropdown-item">
                              INDIA
                            </a>{" "}
                            <a href=" " className="dropdown-item">
                              USA
                            </a>{" "}
                            <a href=" " className="dropdown-item">
                              UK
                            </a>{" "}
                          </div>
                        </div>
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-server-network"></i> Severs{" "}
                          <span className="badge badge-pill badge-success">
                            2
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-access-point-network"></i>{" "}
                          Network{" "}
                          <span className="badge badge-pill badge-primary">
                            1
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="mdi mdi-arrow-down-bold-circle"></i>{" "}
                          Down{" "}
                          <span className="badge badge-pill badge-danger">
                            3
                          </span>
                        </a>{" "}
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href=" "
                        id="topnav-more"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fab fa-hubspot mr-2"></i>Ports
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-more"
                      >
                        {" "}
                        <a href=" " className="dropdown-item">
                          <i className="fas fa-desktop"></i> All Ports{" "}
                          <span className="badge badge-pill badge-danger">
                            37
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="feather-cpu"></i> VLANs
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="feather-grid"></i> Neighbours{" "}
                          <span className="badge badge-pill badge-primary">
                            20
                          </span>
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="fas fa-user-friends"></i> Customers{" "}
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="feather-package"></i> Transit{" "}
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="feather-target"></i> Peering{" "}
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          <i className="feather-zap"></i> Peering &amp; Transit{" "}
                        </a>
                        <div className="dropdown">
                          {" "}
                          <a
                            className="dropdown-item dropdown-toggle arrow-none"
                            href=" "
                            id="topnav-tables"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-unlink"></i> Status Breakdown
                            <div className="arrow-down"></div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="topnav-tables"
                          >
                            {" "}
                            <a href=" " className="dropdown-item">
                              <i className="fas fa-download"></i> Down{" "}
                              <span className="badge badge-pill badge-danger">
                                20
                              </span>
                            </a>{" "}
                            <a
                              href="tables-datatables.html"
                              className="dropdown-item"
                            >
                              <i className="fas fa-upload"></i> Up{" "}
                              <span className="badge badge-pill badge-success">
                                10
                              </span>
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      {" "}
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href=" "
                        id="topnav-pages"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        
                      >
                        {" "}
                        <i className="mdi mdi-google-pages mr-2"></i>Health
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-pages"
                      >
                        {" "}
                        <a href=" " className="dropdown-item">
                          Processors
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Memory
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Storage
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Status
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Temperature
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Fanspeed
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Current
                        </a>
                        <a href=" " className="dropdown-item">
                          Voltage
                        </a>{" "}
                        <a href=" " className="dropdown-item">
                          Power
                        </a>
                        <a href=" " className="dropdown-item">
                          Frequency
                        </a>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="page-content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2">
                      {" "}
                      <img
                        src="assets/images/nms.png"
                        alt=""
                        className="img-fluid"
                      />{" "}
                    </div>
                    <div className="col-lg-5">
                      <h4>Welcome to NMS dashboard!</h4>
                      <p>
                        This was autogenerated based on your previous front
                        page. It can be modified to suit your requirements.
                        Please see the documentation for information about how
                        to configure this dashboard. Including how to delete
                        this widget!
                      </p>
                    </div>

                    <div className="col-lg-5">
                      <p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.70842737001!2d78.43891958715821!3d17.439260000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3794bff07%3A0x1d80c73b7fcc4766!2sGreenlantern%20IT%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1697528551099!5m2!1sen!2sin"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                         
                          width="100%"
                          height="120"
                          title=" "
                        ></iframe>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-md-6">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Devices</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="mdi mdi-monitor-screenshot"></i>{" "}
                        </div>
                        <div className="device">
                        <br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href=" ">{apiData.count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href=" "> {apiData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href=" "> {apiData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href=" ">{apiData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device">
                        <br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href=" ">{apiData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Ports</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="feather-sliders"></i>{" "}
                        </div>
                        <div className="device">
                        <br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href=" ">{portData.count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href=" "> {portData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href=" "> {portData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href=" "> {portData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />

                          <p>
                            <a href=" ">{portData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6 mt-2 mb-2">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Sensors</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="mdi mdi-server-network"></i>{" "}
                        </div>
                        <div className="device"><br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href=" ">{sensorsData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href=" "> {sensorsData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href=" "> {sensorsData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href=" "> {sensorsData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href=" ">{sensorsData.disabled_count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6 mt-2 mb-2">
                  <div className="sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Statuses</h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          {" "}
                          <i className="dripicons-web"></i>{" "}
                        </div>
                        <div className="device"><br />
                          <h6>Total</h6>
                          <br />
                          <p>
                            <a href=" ">{statusesData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6>Up</h6>
                          <br />
                          <p>
                            <a href=" "> {statusesData.Up_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Alert</h6>
                          <br />
                          <p>
                            <a href=" "> {statusesData.Down_Count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Ignored (Dev)</h6>
                          <br />
                          <p>
                            <a href=" "> {statusesData.ignore_count}</a>
                          </p>
                        </div>
                        <div className="device"><br />
                          <h6> Disabled / Shut</h6>
                          <br />
                          <p>
                            <a href=" ">{statusesData.Down_Count}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Pie chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of line pie chart js.
                      </p>
                      <canvas id="pieChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Area chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of line area chart js.
                      </p>
                      <canvas id="areaChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bar Chart</h4>
                      <p className="card-subtitle mb-4">
                        Example of bar chart chart js.
                      </p>
                      <canvas id="barChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <p>
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.70842737001!2d78.43891958715821!3d17.439260000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3794bff07%3A0x1d80c73b7fcc4766!2sGreenlantern%20IT%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1697528551099!5m2!1sen!2sin"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                              width="100%"
                              height="150"
                              title=" "
                            ></iframe>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-centered table-hover table-xl mb-0"
                          id=""
                        >
                          <thead>
                            <tr>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">Total</th>
                              <th className="border-top-0">Up</th>
                              <th className="border-top-0">Alert</th>
                              <th className="border-top-0">Ignored (Dev)</th>
                              <th className="border-top-0">Disabled / Shut</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="devices">
                                  <strong>Devices</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{apiData.count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{apiData.Down_Count} up</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{apiData.Up_Count} down</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{apiData.ignore_count} ignored</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {apiData.disabled_count} disabled
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="blue"></td>
                              <td className="text-truncate">
                                <a href="Ports">
                                  <strong>Ports</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{portData.count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{portData.Up_Count} up</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{portData.Down_Count} down</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{portData.ignore_count} ignored</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {portData.disabled_count} shutdown
                                </a>
                              </td>
                            </tr>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="Sensors">
                                  <strong>Sensors</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{sensorsData.Up_Count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{sensorsData.Up_Count} Ok</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{sensorsData.Down_Count} alerts</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {sensorsData.ignore_count} ignored
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {sensorsData.disabled_count} disabled
                                </a>
                              </td>
                            </tr>
                            <tr className="error">
                              <td className="red"></td>
                              <td className="text-truncate">
                                <a href="statuses">
                                  <strong>Statuses</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{statusesData.Down_Count}</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{statusesData.Up_Count} ok</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">{statusesData.Down_Count} alerts</a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {statusesData.ignore_count} ignored{" "}
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" ">
                                  {statusesData.Down_Count} disabled
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-centered table-hover table-xl mb-0"
                          id=""
                        >
                          <thead>
                            <tr>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">&nbsp;</th>
                              <th className="border-top-0">Ok</th>
                              <th className="border-top-0">Fail</th>
                              <th className="border-top-0">Delay</th>
                              <th className="border-top-0">Supperss</th>
                              <th className="border-top-0">Other</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="blue"></td>
                              <td className="text-truncate">
                                <a href=" ">
                                  <strong>Alerts</strong>
                                </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                              <td className="text-truncate">
                                <a href=" "> </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="box-header">
                        <h3 className="box-title">
                          Status Warnings and Notifications
                        </h3>
                      </div>
                      <div className="box-content">
                        <table className="table table-hover table-condensed">
                          <tbody>
                            <tr className="error">
                              <td className="state-marker"></td>
                              <td className="entity">
                                <a
                                  href=" "
                                  className="entity-popup orange text-nowrap trigger"
                                  data-eid="1"
                                  data-etype="device"
                                >
                                  202.53.92.36
                                </a>
                              </td>
                              <td>
                                <span
                                  className="label label-danger"
                                  title="Down"
                                >
                                  Device Down
                                </span>
                              </td>
                              <td className="entity">
                                <i className="sprite-device"></i>
                                <a
                                  href=" "
                                  className="entity-popup orange text-nowrap trigger"
                                  data-eid="1"
                                  data-etype="device"
                                >
                                  202.53.92.36
                                </a>
                              </td>
                              <td>Down (SNMP) 10d 20h 32m</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="box-header">
                        <h3 className="box-title">Eventlog</h3>
                      </div>
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="red"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup orange text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>202.53.92.36</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup orange text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                {" "}
                                <strong>202.53.92.36</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                          <tr>
                            <td className="blue"></td>
                            <td className="text-truncate">
                              <a href=" ">
                                <strong>5h 4m 3s</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>
                            </td>
                            <td className="text-truncate">
                              <a
                                href=" "
                                className="entity-popup text-nowrap trigger"
                                data-eid="1"
                                data-etype="device"
                              >
                                <strong>175.101.18.18</strong>
                              </a>{" "}
                              Arp-table: 9 added, 6 deleted, 179 unchanged.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    {" "}
                    2023 © Network Management System.{" "}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

      
        {/* <!-- Include jQuery --> */}
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

{/* <!-- Include Bootstrap JavaScript --> */}
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

        <div id="pop-up">
          <div className="table-responsive">
            <table
              className="table table-centered table-hover table-xl mb-0"
              id=""
            >
              <tbody>
                <tr className="error">
                  <td className="red"></td>
                  <td className="text-truncate">
                    <i className="fab fa-redhat hat"></i>
                  </td>
                  <td className="text-truncate">
                    <strong className="orange">202.53.92.36</strong>
                    <br />
                    Unknown (edit /etc/snmp/snmpd.conf){" "}
                  </td>
                  <td className="text-truncate">
                    Linux 3.10.0-1160.99.1.el7.x86_64
                    <br />
                    Generic x86 [64bit]
                  </td>
                  <td className="text-truncate">
                    Down (SNMP) 10d 22h 49m 20s
                    <br />
                    nms36
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table
              className="table table-centered table-hover table-xl mb-0"
              id=""
            >
              <tbody>
                <tr className="bg-light">
                  <td className="blue"></td>
                  <td className="text-truncate">
                    <i className="fab fa-atlassian sync"></i>
                  </td>
                  <td className="text-truncate">
                    <a href=" ">
                      <strong>175.101.18.18</strong>
                    </a>
                  </td>
                  <td className="text-truncate">
                    Mikrotik RouterOS 6.49.7
                    <br />
                    Mikrotik CCR1009-7G-1C-1S+
                  </td>
                  <td className="text-truncate">
                    110d 5h 8m 18s
                    <br />
                    one - 19
                  </td>
                </tr>
                <tr className="table-danger">
                  <th scope="col" colspan="5">
                    Eventlog
                  </th>
                </tr>
                <tr>
                  <td className="text-truncate" colspan="3">
                    Mikrotik RouterOS 6.49.7
                    <br />
                    Mikrotik CCR1009-7G-1C-1S+
                  </td>
                  <td className="text-truncate">
                    110d 5h 8m 18s
                    <br />
                    one - 19
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1
