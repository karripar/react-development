import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
//import {useState, useEffect} from 'react';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Layout from './components/Layout';
import Single from './views/Single';
import Example from './views/Example';
import Login from './views/Login';
import {UserProvider} from './contexts/UserContext';
import Logout from './views/Logout';
import {
  ProtectedRoute,
  ProtectedRouteHideLogin,
} from './components/ProtectedRoute';

type Device = {
  name: string;
  operatingSystem: string;
};

// query the device name from the user device
const userAgent = navigator.userAgent;
let osName = '';
if (userAgent.includes('Win')) {
  osName = 'Windows';
} else if (userAgent.includes('Mac')) {
  osName = 'MacOS';
} else if (userAgent.includes('X11')) {
  osName = 'UNIX';
} else if (userAgent.includes('Linux')) {
  osName = 'Linux';
}

const deviceName = userAgent.includes('Mobile') ? 'Mobile' : 'Desktop';
const device: Device = {
  name: deviceName,
  operatingSystem: osName,
};

const App = () => {
  // constantly update the clock
  //const clock = useClock();
  return (
    <>
      <h1>
        Hello {device.operatingSystem} {device.name} user!
      </h1>
      <h2></h2>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/upload" element={<Upload />}></Route>
              <Route
                path="/login"
                element={
                  <ProtectedRouteHideLogin>
                    <Login />
                  </ProtectedRouteHideLogin>
                }
              ></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/single" element={<Single />}></Route>
              <Route path="/example" element={<Example />}></Route>
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
