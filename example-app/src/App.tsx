import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import {useState, useEffect} from 'react';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Layout from './components/Layout';
import Single from './views/Single';

type Device = {
  name: string;
  operatingSystem: string;
};

const useClock = () => {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const padZero = (num: number) => (num < 10 ? '0' + num : num);
      const hours = padZero(new Date().getHours());
      const minutes = padZero(new Date().getMinutes());
      const seconds = padZero(new Date().getSeconds());
      setClock(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return clock;
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
  const clock = useClock();
  return (
    <>
      <h1>
        Hello {device.operatingSystem} {device.name} user!
      </h1>
      <h2>{clock}</h2>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
            <Route path="/single" element={<Single />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
