import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import Navbar from "./components/navbar.js";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* Your other components */}
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import MissingReport from "./components/MissingReport";
import MapComponent from "./components/MapComponent";
import EmergencyActions from "./components/EmergencyActions";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <EmergencyActions />
          <MapComponent />
          <MissingReport />
        </div>
      </div>
    </div>
  );
}

export default App;

