import React from 'react';

function Dashboard() {
  const data = JSON.parse(localStorage.getItem('userData'));
  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Welcome, {data.name}</h2>
      <p>Email: {data.email}</p>
      <div className="dashboard-cards">
        <div className="card">Team Members: 8</div>
        <div className="card">Active Projects: 4</div>
        <div className="card">Notifications: 2</div>
      </div>
    </div>
  );
}

export default Dashboard;
