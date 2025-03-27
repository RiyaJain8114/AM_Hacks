import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button>Dashboard</button>
      <button>Live Disaster Map</button>
      <button>Alerts & Notification</button>
      <button className="active">Emergency Requests</button>
      <button>Resource Allocation</button>
      <button>User Management (Admin only)</button>
      <button>Settings</button>
    </div>
  );
};

export default Sidebar;
