import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';


// Your React component code


import LoginForm from "./Components/LoginForm/Login.js"

import Home from '../src/Components/Home/Home.js';
import Memory from "../src/Components/Memory/memory.js";
import LockScreen from '../src/Components/LockScreen/LockScreen.js';
import RecoverPassword from '../src/Components/RecoverPassword/RecoverPassword.js';
import Register from '../src/Components/Register/register.js';
import Notfound from '../src/Components/Notfound/error.js';
import Ports from '../src/Components/Ports/Ports.js';
import Devices from '../src/Components/Devices/Devices.js';
import DevicesPollingPerformance from '../src/Components/DevicesPollingPerformance/Polling.js';
import DeviceStatus from '../src/Components/DeviceStatus/DeviceStatus.js';
import DeviceDetails from "../src/Components/DeviceDetails/DeviceDetails.js";
import PortsBasic from '../src/Components/PortsBasic/PortsBasic.js';
import Processors from "../src/Components/Processors/Processors.js";
import PortOverview from '../src/Components/PortOverview/PortOverview.js';
import Sensors from "../src/Components/Sensors/Sensors.js";
import Statuses from "../src/Components/Statuses/statuses.js";
import DeviceOverview from "../src/Components/DeviceOverview/overview.js";


import Navbar from './Components/Navbar/navbar.js'
import Spinner from './Components/Spinner/spinner.js'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/" element={<LoginForm />} />
      <Route exact path="/Memory" element={<Memory />} />
        <Route exact path="/LockScreen" element={<LockScreen />} />
        <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Ports" element={<Ports />} />
        <Route exact path="/Devices" element={<Devices/>} />
        <Route exact path="/DevicesPollingPerformance" element={<DevicesPollingPerformance />} />
        <Route exact path="/DeviceStatus" element={<DeviceStatus />} />
        <Route exact path="/DeviceDetails" element={<DeviceDetails />} />
        <Route exact path="/PortsBasic" element={<PortsBasic />} />
        <Route exact path="/PortOverview" element={<PortOverview />} />
        <Route exact path="/Processors" element={<Processors />} />
        <Route exact path="/Sensors" element={<Sensors />} />
        <Route exact path="/Navbar" element={<Navbar />} />
        <Route exact path="/Spinner" element={<Spinner />} />
        <Route exact path="/Statuses" element={<Statuses />} />
        <Route exact path="/Devices" element={<Devices />} />
        <Route exact path="/DeviceOverview" element={<DeviceOverview/>} /> 
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
