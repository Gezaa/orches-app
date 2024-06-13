// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<div className="flex w-full h-screen items-center justify-center"><Login /></div>} />
            <Route path="/create-account" element={<div className="flex w-full h-screen items-center justify-center"><CreateAccount /></div>} />
            {/* Dashboard route is nested within the main div */}
            <Route path="/dashboard" element={<div className="h-screen bg-gray-200"><Dashboard /></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
