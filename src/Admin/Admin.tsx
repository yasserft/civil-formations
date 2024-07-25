import './Admin.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin: React.FC = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/formations')
      .then(response => {
        setFormations(response.data);
      })
      .catch(error => {
        console.error('Error fetching formations:', error);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
    </div>
  );
};

export default Admin;

