// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppKitProvider } from './config'; // Your custom provider from config.jsx
import Home from './pages/Home';
import CreateChama from './pages/CreateChama';
import JoinChama from './pages/JoinChama';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppKitProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateChama />} />
          <Route path="/join" element={<JoinChama />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppKitProvider>
  );
}

export default App;
