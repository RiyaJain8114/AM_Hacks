import React from "react";
import "./MapComponent.css";

const MapComponent = () => {
  return (
    <div className="map-container">
      <h3>Send this location</h3>
      <iframe
        title="Disaster Map"
        src="https://www.google.com/maps/embed"
        width="100%"
        height="200px"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
