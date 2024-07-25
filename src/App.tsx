import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AdminPage from './Admin/Admin';
import FormationsPage from './Formations/Formations';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Formations" element={<FormationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

