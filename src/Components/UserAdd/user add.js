import React from 'react'

const userAdd = () => {
    return(
<div>
<div id="layout-wrapper">
  <div class="main-content">
    <header id="page-topbar">
      <div class="navbar-header"> 
        
        <div class="navbar-brand-box d-flex align-items-left"> <a href=" " class="logo"> <i class="feather-arrow-right-circle"></i> <span> Network Management System </span> </a>
          <button type="button" class="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content"> <i class="fa fa-fw fa-bars"></i> </button>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-search-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-magnify"></i> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-search-dropdown">
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
            <button type="button" class="btn header-item noti-icon waves-effect waves-light" id="page-header-notifications-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-bell"></i> <span class="badge badge-danger badge-pill">3</span> </button>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-notifications-dropdown">
              <div class="p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0"> Notifications </h6>
                  </div>
                  <div class="col-auto"> <a href=" " class="small"> View All</a> </div>
                </div>
              </div>
              <div data-simplebar style="max-height: 230px;"> <a href="" class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-2.jpg"
                                                    class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Samuel Coverdale</h6>
                    <p class="font-size-12 mb-1">You have new follower on Instagram</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 2 min ago</p>
                  </div>
                </div>
                </a> <a href="" class="text-reset notification-item">
                <div class="media">
                  <div class="avatar-xs mr-3"> <span class="avatar-title bg-success rounded-circle"> <i class="mdi mdi-cloud-download-outline"></i> </span> </div>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Download Available !</h6>
                    <p class="font-size-12 mb-1">Latest version of admin is now available. Please download here.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 4 hours ago</p>
                  </div>
                </div>
                </a> <a href="" class="text-reset notification-item">
                <div class="media"> <img src="assets/images/users/avatar-3.jpg"
                                                    class="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                  <div class="media-body">
                    <h6 class="mt-0 mb-1">Victoria Mendis</h6>
                    <p class="font-size-12 mb-1">Just upgraded to premium account.</p>
                    <p class="font-size-12 mb-0 text-muted"><i class="mdi mdi-clock-outline"></i> 1 day ago</p>
                  </div>
                </div>
                </a> </div>
              <div class="p-2 border-top"> <a class="btn btn-sm btn-light btn-block text-center" href="   "> <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More.. </a> </div>
            </div>
          </div>
          <div class="dropdown d-inline-block ml-2">
            <button type="button" class="btn header-item waves-effect waves-light" id="page-header-user-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-3.jpg"
                                        alt="Header Avatar"/> <span class="d-none d-sm-inline-block ml-1">Jamie D.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </button>
            <div class="dropdown-menu dropdown-menu-right"> <a class="dropdown-item d-flex align-items-center justify-content-between" href="   "> <span>Inbox</span> <span> <span class="badge badge-pill badge-info">3</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href=" "> <span>My Profile</span> <span> <span class="badge badge-pill badge-warning">1</span> </span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href="   "> Settings </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href="   "> <span>Lock Account</span> </a> <a class="dropdown-item d-flex align-items-center justify-content-between" href="   "> <span>Log Out</span> </a> </div>
          </div>
        </div>
      </div>
    </header>
    <div class="topnav">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li class="nav-item"> <a class="nav-link" href=" "> <i class="mdi mdi-view-dashboard mr-2"></i>Dashboard </a> </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href="   " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Devices
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href=" " class="dropdown-item"><i class="mdi mdi-television-play"></i> All Devices <span class="badge badge-pill badge-info">3</span></a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href="   " id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-office-building"></i> Locations
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-auth"> <a href="   " class="dropdown-item"><i class="mdi mdi-currency-inr"></i> INDIA</a> <a href="   " class="dropdown-item"><i class="mdi mdi-currency-usd"></i> USA</a> <a href="   " class="dropdown-item"><i class="mdi mdi-currency-gbp"></i> UK</a> </div>
                  </div>
                  <a href=" " class="dropdown-item"><i class="mdi mdi-server-network"></i> Severs <span class="badge badge-pill badge-success">2</span></a> <a href=" " class="dropdown-item"><i class="mdi mdi-access-point-network"></i> Network <span class="badge badge-pill badge-primary">1</span></a> <a href=" " class="dropdown-item"><i class="mdi mdi-arrow-down-bold-circle"></i> Down <span class="badge badge-pill badge-danger">3</span></a> <a href=" " class="dropdown-item"><i class="mdi mdi-plus-circle"></i> Add Device </a></div>
              </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href="   " id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fab fa-hubspot mr-2"></i>Ports
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-more"> <a href=" " class="dropdown-item"><i class="fas fa-desktop"></i> All Ports <span class="badge badge-pill badge-danger">37</span></a> <a href=" " class="dropdown-item"><i class="feather-cpu"></i> VLANs</a> <a href=" " class="dropdown-item"><i class="feather-grid"></i> Neighbours <span class="badge badge-pill badge-primary">20</span></a> <a href=" " class="dropdown-item"><i class="fas fa-user-friends"></i> Customers </a> <a href=" " class="dropdown-item"><i class="feather-package"></i> Transit </a> <a href=" " class="dropdown-item"><i class="feather-target"></i> Peering </a> <a href=" " class="dropdown-item"><i class="feather-zap"></i> Peering &amp; Transit </a>
                  <div class="dropdown"> <a class="dropdown-item dropdown-toggle arrow-none" href="   " id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-unlink"></i> Status Breakdown
                    <div class="arrow-down"></div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="topnav-tables"> <a href=" " class="dropdown-item"><i class="fas fa-download"></i> Down <span class="badge badge-pill badge-danger">20</span></a> <a href=" " class="dropdown-item"><i class="fas fa-upload"></i> Up <span class="badge badge-pill badge-success">10</span></a> </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle arrow-none" href=" " id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-google-pages mr-2"></i>Health
                <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-pages"> <a href=" " class="dropdown-item"><i class="fas fa-desktop"></i> Processors</a> <a href=" " class="dropdown-item"><i class="feather-cpu"></i> Memory</a> <a href=" " class="dropdown-item"><i class="fas fa-database"></i> Storage</a> <a href=" " class="dropdown-item"><i class="feather-clock"></i> Status</a> <a href=" " class="dropdown-item"><i class="fas fa-temperature-high"></i> Temperature</a> <a href=" " class="dropdown-item"><i class="feather-send"></i> Fanspeed</a> <a href=" " class="dropdown-item"><i class="feather-hard-drive"></i> Current</a> <a href=" " class="dropdown-item"><i class="fas fa-house-damage"></i> Voltage</a> <a href=" " class="dropdown-item"><i class="mdi mdi-solar-power"></i> Power</a> <a href=" " class="dropdown-item"><i class="mdi mdi-finance"></i> Frequency</a> </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">User Properties</h5>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">Username </label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="" placeholder="Username"/>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">Password </label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="" placeholder="Password"/>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right"></label>
                  <div class="col-9">
                    <input type="checkbox" checked data-toggle="switchery" data-color="#ccc" data-size="small" title="Show Enabled / Disabled"/>
                    Allow the user to change his password </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">Real Name </label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="" placeholder="Real Name"/>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">User Level </label>
                  <div class="col-9">
                    <div class="form-group">
                      <select class="selectpicker" multiple aria-label="Default select example" data-live-search="true" placeholder="Select User">
                        <option value="1">Normal User</option>
                        <option value="2">Global Read</option>
                        <option value="3">Global Secure Read</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">Optional Information</h5>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">E-mail</label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="" placeholder="E-mail"/>
                  </div>
                </div>
                <div class="form-group row mb-2">
                  <label for="" class="col-3 col-form-label text-right">Description</label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="" placeholder="Description"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="form-group row mb-2">
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary mt-2 waves-effect waves-light pull-right"><i class="feather-check"></i> Add user</button>
                  </div>
                </div>
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


</div>
    )
}