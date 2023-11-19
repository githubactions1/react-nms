import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import $ from  'jquery';

// Bootstrap and related dependencies
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-maxlength/dist/bootstrap-maxlength.min.js';

// Other UI Enhancements
import 'node-waves/dist/waves.min.css';
// import './js/waves.js';
import 'simplebar/dist/simplebar.min.css';
// import 'assets/js/simplebar.min.js';
import 'multiselect-react-dropdown/dist/multiselect-react-dropdown.esm.js';
// import 'react-tooltip/dist/react-tooltip.umd.min.js';

// Charting and graphics
import 'morris.js/morris.min.js';
import 'raphael/raphael.min.js';

// Input handling and formatting
import 'jquery/dist/jquery.min.js';
// import 'autonumeric/autoNumeric-min.js';

// React-specific components
import 'popper.js/dist/popper.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
