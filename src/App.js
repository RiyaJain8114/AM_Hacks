// import React from "react";
// import Navbar from "./components/navbar";
// import Sidebar from "./components/Sidebar";
// import MissingReport from "./components/MissingReport";
// import MapComponent from "./components/MapComponent";
// import "./App.css";

// const Header = () => {
//   return (
//     <div className="app-header">
//       <div className="header-section">
//         <h2>Live Interactive Map</h2>
//         <div className="toggle-group">
//           <label className="toggle">
//             <input type="checkbox" />
//             <span className="toggle-label">Notify me about nearby danger areas</span>
//           </label>
//           <label className="toggle">
//             <input type="checkbox" />
//             <span className="toggle-label">Show emergency service locations</span>
//           </label>
//           <label className="toggle">
//             <input type="checkbox" />
//             <span className="toggle-label">Alert me about route safety</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="content-layout">
//           <MapComponent />
//           <MissingReport />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





















// for page 2



// import React from "react";
// import navbar from "./components/navbar";
// import Sidebar from "./components/Sidebar";
// import Map from "./components/Map";
// import Graphs from "./components/Graphs";
// import ButtonGroup from "./components/ButtonGroup";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       <navbar />
//       <div className="main-content">
//         <Sidebar />
//         <div className="dashboard">
//           <Map />
//           <ButtonGroup />
//           <Graphs />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;












import React from "react";
import Background from "./components/Background";
import DialogBox from "./components/DialogBox";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <Background />
      <DialogBox />
    </div>
  );
};

export default App;
