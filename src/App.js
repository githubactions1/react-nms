import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';


// Your React component code


import LoginForm from "./NMS-Frontend/actions-runner-frontend/_work/react_nms/react_nms/src/Components/LoginForm/Login.js"

import Home from './_work/react_nms/react_nms/src/Components/Home/Home.js';
import Memory from "./_work/react_nms/react_nms/src/Components/Memory/memory.js";
import LockScreen from './_work/react_nms/react_nms/src/Components/LockScreen/LockScreen.js';
import RecoverPassword from './_work/react_nms/react_nms/src/Components/RecoverPassword/RecoverPassword.js';
import Register from './_work/react_nms/react_nms/src/Components/Register/register.js';
import Notfound from './_work/react_nms/react_nms/src/Components/Notfound/error.js';
import Ports from './_work/react_nms/react_nms/src/Components/Ports/Ports.js';
import Devices from './_work/react_nms/react_nms/src/Components/Devices/Devices.js';
import DevicesPollingPerformance from './_work/react_nms/react_nms/src/Components/DevicesPollingPerformance/Polling.js';
import DeviceStatus from './_work/react_nms/react_nms/src/Components/DeviceStatus/DeviceStatus.js';
import DeviceDetails from "./_work/react_nms/react_nms/src/Components/DeviceDetails/DeviceDetails.js";
import PortsBasic from './_work/react_nms/react_nms/src/Components/PortsBasic/PortsBasic.js';
import Processors from "./_work/react_nms/react_nms/src/Components/Processors/Processors.js";
import PortOverview from './_work/react_nms/react_nms/src/Components/PortOverview/PortOverview.js';
import Sensors from "./Components/Sensors/Sensors.js";
import Statuses from "./Components/Statuses/statuses.js";
import DeviceOverview from "./Components/DeviceOverview/overview.js";
import Information from "./Components/Information/Information.js";


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
