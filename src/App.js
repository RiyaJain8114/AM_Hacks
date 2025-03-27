import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import MissingReport from "./components/MissingReport";
import MapComponent from "./components/MapComponent";
import "./App.css";

const Header = () => {
  return (
    <div className="app-header">
      <div className="header-section">
        <h2>Live Interactive Map</h2>
        <div className="toggle-group">
          <label className="toggle">
            <input type="checkbox" />
            <span className="toggle-label">Notify me about nearby danger areas</span>
          </label>
          <label className="toggle">
            <input type="checkbox" />
            <span className="toggle-label">Show emergency service locations</span>
          </label>
          <label className="toggle">
            <input type="checkbox" />
            <span className="toggle-label">Alert me about route safety</span>
          </label>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-layout">
          <MapComponent />
          <MissingReport />
        </div>
      </div>
    </div>
  );
}

export default App;

