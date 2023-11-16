import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';


// Your React component code


import LoginForm from "./Components/LoginForm/login.js"

import Home from './Components/Home/Home.js';
import Memory from "./Components/Memory/memory.js";
import LockScreen from './Components/LockScreen/lockscreen.js';
import RecoverPassword from './Components/RecoverPassword/RecoverPassword.js';
import Register from './Components/Register/register.js';
import Notfound from './Components/Notfound/error.js';
import Ports from './Components/Ports/ports.js';
import Devices from './Components/Devices/devices.js';
import DevicesPollingPerformance from './Components/DevicesPollingPerformance/polling.js';
import DeviceStatus from './Components/DeviceStatus/DeviceStatus.js';
import DeviceDetails from "./Components/DeviceDetails/devicedetails.js";
import PortsBasic from './Components/PortsBasic/portsbasic.js';
import Processors from "./Components/Processors/processors.js";
import PortOverview from './Components/PortOverview/portoverview.js';
import Sensors from "./Components/Sensors/sensors.js";
import Statuses from "./Components/Statuses/statuses.js";
import DeviceOverview from "./Components/DeviceOverview/overview.js";
import Information from "./Components/Information/information.js";


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
        <Route exact path="/Information" element={<Information />} />
        <Route exact path="/DeviceOverview" element={<DeviceOverview/>} /> 
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
