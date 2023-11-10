// import 'popper.js';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
 

import LoginForm from "./Components/LoginForm/login.js"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LockScreen from './Components/LockScreen/LockScreen.js';
import Home1 from './Components/Home/home1.js';
import RecoverPassword from './Components/RecoverPassword/recover.js';
import Register from './Components/Register/register.js';
import Notfound from './Components/Notfound/error.js';
import Ports from './Components/Ports/ports.js';
import Devices from './Components/Devices/devices.js';
import DevicesPollingPerformance from './Components/DevicesPollingPerformance/polling.js';
import DeviceStatus from './Components/DeviceStatus/DeviceStatus.js';
import DeviceDetails from './Components/DeviceDetails/deviceDetails.js';
import PortsBasic from './Components/PortsBasic/portsBasic.js';


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/Home" element={<Home1 />} />
        <Route exact path="/LockScreen" element={<LockScreen />} />
        <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Ports" element={<Ports />} />
        <Route exact path="/Devices" element={<Devices />} />
        <Route exact path="/DevicesPollingPerformance" element={<DevicesPollingPerformance />} />
        <Route exact path="/DeviceStatus" element={<DeviceStatus />} />
        <Route exact path="/DeviceDetails" element={<DeviceDetails />} />
        <Route exact path="/PortsBasic" element={<PortsBasic />} />
        <Route path="*" element={<Notfound />} /> 
        
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
