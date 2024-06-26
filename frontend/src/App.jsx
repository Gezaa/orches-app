// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Configuration from './components/Configuration';
import Monitoring from './components/Monitoring';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Profile from './components/Profile';
import MonitoringDetails from './components/MonitoringDetails.jsx';
function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<div className="h-screen bg-gray-200"><Layout /></div>}>
              <Route index element={<Dashboard />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/monitoring-details" element={<MonitoringDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<div className="flex w-full h-screen items-center justify-center"><Login /></div>} />
            <Route path="/create-account" element={<div className="flex w-full h-screen items-center justify-center"><CreateAccount /></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
