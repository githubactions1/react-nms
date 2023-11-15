import React from 'react'

const ports1 = () => {
  return (
    <>
    


<div id="layout-wrapper">
  <div class="main-content">
    <header id="page-topbar">
      <div class="navbar-header"> 
    
        <div class="navbar-brand-box d-flex align-items-left"> <a href="index.html" class="logo"> <i class="feather-arrow-right-circle"></i> <span> Network Management System </span> </a>
          <button type="button" class="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content"> <i class="fa fa-fw fa-bars"></i> </button>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-magnify"></i> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
              <form class="p-3">
                <div class="form-group m-0">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell"></i> <span class="badge badge-danger badge-pill">3</span> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
              <div class="p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0"> Notifications </h6>
                  </div>
                  <div class="col-auto"> <a href="#!" class="small"> View All</a> </div>
                </div>
              </div>
              <div data-simplebar="init" style={{maxheight: "230px"}}><div class="simplebar-wrapper" style={{margin: "0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: "0px", bottom: "0px"}}><div class="simplebar-content-wrapper" style={{height: "auto", paddingright: "0px", paddingbottom: "0px",overflow: "hidden"}}><div class="simplebar-content" style={{padding: "0px"}}> <a href=" " class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-2.jpg" class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Samuel Coverdale</h6>
                    <p class="font-size-12 mb-1">You have new follower on Instagram</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 2 min ago</p>
                  </div>
                </div>
                </a> <a href=" " class="text-reset notification-item">
                <div class="media">
                  <div class="avatar-xs mr-3"> <span class="avatar-title bg-success rounded-circle"> <i class="mdi mdi-cloud-download-outline"></i> </span> </div>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Download Available !</h6>
                    <p class="font-size-12 mb-1">Latest version of admin is now available. Please download here.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 4 hours ago</p>
                  </div>
                </div>
                </a> <a href=" " class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-3.jpg" class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Victoria Mendis</h6>
                    <p class="font-size-12 mb-1">Just upgraded to premium account.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 1 day ago</p>
                  </div>
                </div>
                </a> </div></div></div></div><div class="simplebar-placeholder" style={{width: "0px", height: "0px" + 'em'}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{transform: 'translate3d'('0px', '0px', '0px'), display: 'none'}}></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: none;"></div></div></div>
              <div class="p-2 border-top"> <a class="btn btn-sm btn-light btn-block text-center" href=" "> <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More.. </a> </div>
            </div>
          </div>
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item waves-effect waves-light" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-3.jpg" alt="Header Avatar"/> <span class="d-none d-sm-inline-block ml-1">Jamie D.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </button>
            <div class="dropdown-menu dropdown-menu-right"> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Inbox</span> <span> <span class="badge badge-pill badge-info">3</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Profile</span> <span> <span class="badge badge-pill badge-warning">1</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> Settings </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Lock Account</span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>Log Out</span> </a> </div>
          </div>
        </div>
      </div>
    </header>
    <div class="topnav">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse active" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li class="nav-item"> <a class="nav-link" href="index.html"> <i class="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Devices
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href="devices-basic.html" class="dropdown-item"><i class="mdi mdi-television-play"></i> All Devices <span class="badge badge-pill badge-info">3</span></a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-office-building"></i> Locations
                    <div class="arrow-down"></div>
                    </a><div class="dropdown-menu" aria-labelledby="topnav-auth"> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-inr"></i> INDIA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-usd"></i> USA</a> <a href=" " class="dropdown-item"><i class="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href="severs.html" class="dropdown-item"><i class="mdi mdi-server-network"></i> Severs <span class="badge badge-pill badge-success">2</span></a> <a href="network.html" class="dropdown-item"><i class="mdi mdi-access-point-network"></i> Network <span class="badge badge-pill badge-primary">1</span></a> <a href="down.html" class="dropdown-item"><i class="mdi mdi-arrow-down-bold-circle"></i> Down <span class="badge badge-pill badge-danger">3</span></a> </div>
              </li>
              <li class="nav-item dropdown active"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fab fa-hubspot mr-2"></i>Ports
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu active" aria-labelledby="topnav-more"> <a href="ports-basic.html" class="dropdown-item active"><i class="fas fa-desktop"></i> All Ports <span class="badge badge-pill badge-danger">37</span></a> <a href="vlans.html" class="dropdown-item"><i class="feather-cpu"></i> VLANs</a> <a href="neighbours.html" class="dropdown-item"><i class="feather-grid"></i> Neighbours <span class="badge badge-pill badge-primary">20</span></a> <a href="customers.html" class="dropdown-item"><i class="fas fa-user-friends"></i> Customers </a> <a href="transit.html" class="dropdown-item"><i class="feather-package"></i> Transit </a> <a href="peering.html" class="dropdown-item"><i class="feather-target"></i> Peering </a> <a href="peering-transit.html" class="dropdown-item"><i class="feather-zap"></i> Peering &amp; Transit </a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href=" " id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-unlink"></i> Status Breakdown
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-tables"> <a href="down.html" class="dropdown-item"><i class="fas fa-download"></i> Down <span class="badge badge-pill badge-danger">20</span></a> <a href="up.html" class="dropdown-item"><i class="fas fa-upload"></i> Up <span class="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Health
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href="processors.html" class="dropdown-item"><i class="fas fa-desktop"></i> Processors</a> <a href="memory.html" class="dropdown-item"><i class="feather-cpu"></i> Memory</a> <a href="storage.html" class="dropdown-item"><i class="fas fa-database"></i> Storage</a> <a href="status.html" class="dropdown-item"><i class="feather-clock"></i> Status</a> <a href="temperature.html" class="dropdown-item"><i class="fas fa-temperature-high"></i> Temperature</a> <a href="fanspeed.html" class="dropdown-item"><i class="feather-send"></i> Fanspeed</a> <a href="current.html" class="dropdown-item"><i class="feather-hard-drive"></i> Current</a> <a href="voltage.html" class="dropdown-item"><i class="fas fa-house-damage"></i> Voltage</a> <a href="power.html" class="dropdown-item"><i class="mdi mdi-solar-power"></i> Power</a> <a href="frequency.html" class="dropdown-item"><i class="mdi mdi-finance"></i> Frequency</a> </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="page-content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Device"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Device</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-1" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Device Locations">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Device Locations"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Device Locations</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-2" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Port Mac Address"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Port State">
                    <option value="1">Up</option>
                    <option value="2">Down</option>
                    <option value="3">Admin Down</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Port State"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Port State</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-3" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-3" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Port Media">
                    <option value="1">Ethernet (ethernetCsmacd)</option>
                    <option value="2">PPP(ppp)</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" title="Port Media"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Port Media</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-4" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-4" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Select Groups">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" title="Select Groups"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Select Groups</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-5" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-5" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Device Hostname"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Port Name"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <input type="text" id="" class="form-control" placeholder="Port Description (alias)"/>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Port Speed">
                    <option value="1">1Gbps</option>
                    <option value="2">100Mbps</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-6" aria-haspopup="listbox" aria-expanded="false" title="Port Speed"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Port Speed</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-6" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-6" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Port Type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" title="Port Type"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Port Type</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-7" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-7" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="form-group">
                  <div class="dropdown bootstrap-select show-tick"><select class="selectpicker" multiple="" aria-label="Default select example" data-live-search="true" placeholder="Device">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" title="Device"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Device</div></div> </div></button><div class="dropdown-menu "><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-8" aria-autocomplete="list"/></div><div class="inner show" role="listbox" id="bs-select-8" tabindex="-1" aria-multiselectable="true"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                </div>
              </div>
              <div class="col-lg-1 mt-2">
                <button id="search" name="search" type="button" class="btn btn-light pull-right text-nowrap" onClick="" value=""><i class="mdi mdi-magnify"></i>&nbsp;&nbsp;Search</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent"> <a class="navbar-brand" href="#">Ports</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                  <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link" href="ports-basic.html"> Basic </a> </li>
                      <li class="nav-item dropdown"> <a class="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Graphs
                        <div class="arrow-down"></div>
                        </a>
                        <ul class="dropdown-menu scrollspy-example">
                          <li><a class="dropdown-item" href=" ">Bits</a></li>
                          <li><a class="dropdown-item" href=" ">Ucast Pkts</a></li>
                          <li><a class="dropdown-item" href=" ">NU Pkts</a></li>
                          <li><a class="dropdown-item" href=" ">Pkt Size</a></li>
                          <li><a class="dropdown-item" href=" ">DHCP Leases</a></li>
                          <li><a class="dropdown-item" href=" ">Percent</a></li>
                          <li><a class="dropdown-item" href=" ">Errors</a></li>
                          <li><a class="dropdown-item" href=" ">Discards</a></li>
                          <li><a class="dropdown-item" href=" ">Ethernet Errors</a></li>
                          <li><a class="dropdown-item" href=" ">FDB counts</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown"> <a class="nav-link  dropdown-toggle" href=" " data-bs-toggle="dropdown"> Aggregate Graphs
                        <div class="arrow-down"></div>
                        </a>
                        <ul class="dropdown-menu scrollspy-example">
                          <li><a class="dropdown-item" href=" ">Bits</a></li>
                          <li><a class="dropdown-item" href=" ">Bits (95th)</a></li>
                          <li><a class="dropdown-item" href=" ">Unicast Packets</a></li>
                          <li><a class="dropdown-item" href=" ">Multicast Packets</a></li>
                          <li><a class="dropdown-item" href=" ">Broadcast Packets</a></li>
                          <li><a class="dropdown-item" href=" ">Errors</a></li>
                          <li><a class="dropdown-item" href=" ">Discards</a></li>
                          <li><a class="dropdown-item" href=" ">IPv6</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                 
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body"> 
                
             
                <table class="table table-hover">
                  <thead>
                    <tr class="text-truncate">
                      <th class="border-top-0"></th>
                      <th class="border-top-0"></th>
                      <th class="border-top-0"> <a href=" ">Device</a></th>
                      <th class="border-top-0"> <a href=" ">Port Name</a> /  <a href=" ">Description</a> /  <a href=" ">Errors</a></th>
                      <th class="border-top-0"> <a href=" ">Bits</a> [ <a href=" ">In</a> /  <a href=" ">Out</a>]</th>
                      <th class="border-top-0"> <a href=" ">%</a> [ <a href=" ">In</a> /  <a href=" ">Out</a>]</th>
                      <th class="border-top-0"> <a href=" ">Pkts</a> [ <a href=" ">In</a> /  <a href=" ">Out</a>]</th>
                      <th class="border-top-0"> <a href=" ">Speed</a> /  <a href=" ">MTU</a></th>
                      <th class="border-top-0"> <a href=" ">Media</a> /  <a href=" ">MAC</a></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">310Mbps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary">17.8Mbps</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">31%</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary">2%</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success"> 29.3kpps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary"> 11.4kpps</span></td>
                      <td class="text-truncate">1Gbps <br/>
                        1500</td>
                      <td class="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
                    </tr>
                    <tr class="error">
                      <td class="red"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">310Mbps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class="text-primary">17.8Mbps</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">31%</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class="text-primary">2%</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success"> 29.3kpps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class="text-primary"> 11.4kpps</span></td>
                      <td class="text-truncate">1Gbps <br/>
                        1500</td>
                      <td class="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
                    </tr>
                    <tr>
                      <td class="blue"></td>
                      <td class="text-truncate"><i class="fab fa-accusoft font-size-22"></i></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>175.101.18.18</strong></a></td>
                      <td class="text-truncate"> <a href=" " class="entity-popup text-nowrap trigger" data-eid="1" data-etype="device"><strong>combo1</strong></a></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">310Mbps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary">17.8Mbps</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success">31%</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary">2%</span></td>
                      <td class="text-truncate"><i class="fas fa-arrow-alt-circle-down text-success"></i> <span class="text-success"> 29.3kpps</span> <br/>
                        <i class="fas fa-arrow-alt-circle-up text-primary"></i> <span class=" text-primary"> 11.4kpps</span></td>
                      <td class="text-truncate">1Gbps <br/>
                        1500</td>
                      <td class="text-truncate">Ethernet<br/>
                        08:55:31:64:b7:b6</td>
                    </tr>
                  </tbody>
                </table>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    
    
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
 
  
</div>



<script src="assets/js/jquery.min.js"></script> 
<script src="assets/js/bootstrap.bundle.min.js"></script> 
<script src="assets/js/waves.js"></script> 
<script src="assets/js/simplebar.min.js"></script> 


<script src="assets/plugins/morris-js/morris.min.js"></script> 

<script src="assets/plugins/raphael/raphael.min.js"></script> 


<script src="assets/pages/dashboard-demo.js"></script> 


<script src="assets/js/theme.js"></script> 

<script src="assets/js/script_tooltip.js"></script> 


<script src="assets/pages/morris-chart-demo.js"></script> 


<script src="assets/plugins/chart-js/chart.min.js"></script> 


<script src="assets/js/bootstrap-select.min.js"></script> 


<script src="assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="assets/plugins/switchery/switchery.min.js"></script> 
<script src="assets/pages/advanced-plugins-demo.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script> 


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


    </>
  )
}

export default ports1
