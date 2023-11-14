import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from "./Components/LoginForm/login"
import Home1 from './Components/Home/home1';
import Memory from "./Components/Memory/memory";
import LockScreen from "./Components/LockScreen/lockScreen";
import RecoverPassword from './Components/RecoverPassword/recover';
import Register from './Components/Register/register';
import Notfound from './Components/Notfound/error';
import Ports from './Components/Ports/ports';
import Devices1 from './Components/Devices/devices1';
import DevicesPollingPerformance from './Components/DevicesPollingPerformance/polling';
import DeviceStatus from './Components/DeviceStatus/DeviceStatus';
import DeviceDetails from "./Components/DeviceDetails/deviceDetails";
import PortsBasic from "./Components/PortsBasic/portsBasic";
import Processors from "./Components/Processors/processors";
import PortOverview from "./Components/PortOverview/portOverview";
import Sensors from "./Components/Sensors/sensors";
import Statuses from "./Components/Statuses/statuses";
import DeviceOverview from "./Components/DeviceOverview/overview";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/Home" element={<Home1 />} />
      <Route exact path="/" element={<LoginForm />} />
      <Route exact path="/Memory" element={<Memory />} />
        <Route exact path="/LockScreen" element={<LockScreen />} />
        <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Ports" element={<Ports />} />
        <Route exact path="/Devices1" element={<Devices1/>} />
        <Route exact path="/DevicesPollingPerformance" element={<DevicesPollingPerformance />} />
        <Route exact path="/DeviceStatus" element={<DeviceStatus />} />
        <Route exact path="/DeviceDetails" element={<DeviceDetails />} />
        <Route exact path="/PortsBasic" element={<PortsBasic />} />
        <Route exact path="/PortOverview" element={<PortOverview />} />
        <Route exact path="/Processors" element={<Processors />} />
        <Route exact path="/Sensors" element={<Sensors />} />
        <Route exact path="/Statuses" element={<Statuses />} />
        <Route exact path="/DeviceOverview" element={<DeviceOverview/>} /> 
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
