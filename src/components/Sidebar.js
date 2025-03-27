import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ResQLink</h1>
        <span>Insights</span>
      </div>
      
      <nav className="sidebar-nav">
        <button className="nav-item">Dashboard</button>
        <button className="nav-item">Live Disaster Map</button>
        <button className="nav-item">Alerts & Notification</button>
        <button className="nav-item active">Emergency Requests</button>
        <button className="nav-item">Resource Allocation</button>
        <button className="nav-item admin">User Management (Admin only)</button>
        <button className="nav-item">Settings</button>
      </nav>
    </div>
  );
};

export default Sidebar;
