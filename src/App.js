// import 'popper.js';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
 

import LoginForm from "./Components/LoginForm/login.js"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LockScreen from "../src/Components/LockScreen/lockscreen.js";
import Home1 from './Components/Home/home1.js';
import RecoverPassword from './Components/RecoverPassword/recover.js';
import Register from './Components/Register/register.js';
import Notfound from './Components/Notfound/error.js';
import Ports from './Components/Ports/ports.js';
import Devices1 from './Components/Devices/devices1.js';
import DevicesPollingPerformance from './Components/DevicesPollingPerformance/polling.js';
import DeviceStatus from './Components/DeviceStatus/DeviceStatus.js';
import DeviceDetails from "../src/Components/DeviceDetails/devicedetails.js";
import PortsBasic from "../src/Components/PortsBasic/portsbasic.js";
import Memory from "../src/Components/Memory/memory.js";
import PortOverview from "./Components/PortOverview/portoverview.js";
// import DeviceOverview from "../src/Components/Spinner/spinner.js";




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
        <Route exact path="/Devices1" element={<Devices1 />} />
        <Route exact path="/DevicesPollingPerformance" element={<DevicesPollingPerformance />} />
        <Route exact path="/DeviceStatus" element={<DeviceStatus />} />
        <Route exact path="/DeviceDetails" element={<DeviceDetails />} />
        <Route exact path="/PortsBasic" element={<PortsBasic />} />
        <Route exact path="/Memory" element={<Memory />} />
        <Route exact path="/PortOverview" element={<PortOverview />} />
        {/* <Route exact path="/DeviceOverview" element={<DeviceOverview />} /> */}
        <Route path="*" element={<Notfound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
