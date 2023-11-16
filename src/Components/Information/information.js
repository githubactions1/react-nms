import React from 'react'
import Navbar from '../Navbar/navbar.js'; 

const Information = () => {

    return(
<div>
<div id="layout-wrapper">
  <div class="main-content">
          <div>
            <Navbar />
          </div>
      
        <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent"> <a class="navbar-brand" href=" ">Profile</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                  <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link" href=" "> Information </a> </li>
                      <li class="nav-item"><a class="nav-link" href=" "> Settings </a></li>
                      <li class="nav-item"><a class="nav-link" href=" "> Authentication </a></li>
                      <li class="nav-item"><a class="nav-link" href=" "> Sessions</a></li>
                    </ul>
                  </div>
                 
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">User Information</h5>
                
               
                <table class="table table-hover table-striped table-condensed">
                  <tr class="text-truncate">
                    <th class="border-top-0">User ID</th>
                    <td class="border-top-0">1</td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">Username</th>
                    <td class="border-top-0">Srikar</td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">Real Name</th>
                    <td class="border-top-0"></td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">User Level</th>
                    <td class="border-top-0"><span class="badge badge-dark">Administrator</span></td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">Email</th>
                    <td class="border-top-0"></td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">Description</th>
                    <td class="border-top-0"></td>
                  </tr>
                </table>
             
                
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">User Roles</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">Access Keys</h5>
                
              
                <table class="table table-hover table-striped table-condensed">
                  <tr class="text-truncate">
                    <th class="border-top-0">RSS/Atom access key</th>
                    <td class="border-top-0">RSS/Atom access key created Never.</td>
                    <td class="border-top-0"><span class="badge badge-success">Reset</span></td>
                  </tr>
                  <tr class="text-truncate">
                    <th class="border-top-0">API access key</th>
                    <td class="border-top-0">API access key created Never.</td>
                    <td class="border-top-0"><span class="badge badge-success">Reset</span></td>
                  </tr>
                </table>
                
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title bg-light text-black-50 text-left font-size-14">Permission level</h5>
                
           
                <table class="table table-hover table-striped table-condensed">
                  <tr class="text-truncate">
                    <th class="border-top-0 text-center">THIS USER HAS FULL ADMINISTRATIVE ACCESS</th>
                  </tr>
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


<script src="../plugins/morris-js/morris.min.js"></script> 

<script src="../plugins/raphael/raphael.min.js"></script> 


<script src="assets/pages/dashboard-demo.js"></script> 


<script src="assets/js/theme.js"></script> 

<script src="assets/js/script_tooltip.js"></script> 


<script src="assets/pages/morris-chart-demo.js"></script> 


<script src="../plugins/chart-js/chart.min.js"></script> 


<script src="assets/js/bootstrap-select.min.js"></script> 


<script src="../plugins/bootstrap-maxlength/bootstrap-maxlength.min.js"></script> 
<script src="../plugins/switchery/switchery.min.js"></script> 
<script src="assets/pages/advanced-plugins-demo.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script> 


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

</div>
    )
}

export default Information