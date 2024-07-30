import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AdminPage from './Admin/Admin';
import FormationsPage from './Formations/Formations';
import DashboardPage from './Admin/Dashboard';
import VisualiserPage from './Admin/Visualiser';
import AddPage from './Admin/add';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Admin/dashboard" element={<DashboardPage />} />
        <Route path="/Formations" element={<FormationsPage />} />
        <Route path="/Admin/Visualiser" element={<VisualiserPage />} />
        <Route path="/Admin/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
};

export default App;

