import './Admin.css';
import React from 'react';
import axios from 'axios';

const Barside: React.FC = () => {
  return (
    
    <div className="barside">
    <ul>
        <li className="img">   
          <img
        src="https://tse1.explicit.bing.net/th?id=OIP.ROJLMWQcPybcPj5Pn70_oAHaHa&pid=Api&P=0&h=180"
        alt="Admin"
      />
      <h1>Admin</h1></li>
        <li className="item1"><a href="/Admin"><i className="fa-solid fa-house"></i><h2>Dashboard</h2></a></li>
        <li className="item4"><a href="/Admin/visualiser"><i className="fa-solid fa-chart-simple"></i><h2>Visualiser</h2></a></li>
        <li className="item5"><a href="/Admin/add"><i className="fa-solid fa-pen"></i><h2>Ajouter une formation</h2></a></li>
        <li className="item7"><a href="/Admin/setting"><i className="fa-solid fa-gear"></i><h2>settings</h2></a></li>
        <li className="logout"><a href="/Admin/logout"><i className="fa-solid fa-right-from-bracket"></i><h2>Logout</h2></a></li>
    </ul>
</div>
  
  );
};

export default Barside;

