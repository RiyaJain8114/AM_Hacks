// import React from "react";
// import "./navbar.css";

// const Navbar = () => {
//   return (
//     <div className="sidebar">
//       <div className="logo">ResQLink Insights</div>
//       <ul className="nav-links">
//         <li><a href="#">Dashboard</a></li>
//         <li><a href="#">Live Disaster Map</a></li>
//         <li><a href="#">Alerts & Notification</a></li>
//         <li><a href="#">Emergency Requests</a></li>
//         <li><a href="#">Resource Allocation</a></li>
//         <li><a href="#">User Management (Admin only)</a></li>
//         <li><a href="#">Settings</a></li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ResQLink Insights</h1>
      <div className="user-section">
        <span>User</span>
      </div>
    </nav>
  );
};

export default Navbar;
