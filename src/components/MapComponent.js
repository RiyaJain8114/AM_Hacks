import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  const center = [20.5937, 78.9629]; // Center of India
  const incidents = [
    { id: 1, position: [19.0760, 72.8777], title: "Flood Alert", type: "flood" },
    { id: 2, position: [28.7041, 77.1025], title: "Fire Emergency", type: "fire" }
  ];

  return (
    <div className="map-container">
      <div className="map-header">
        <h2>Live Disaster Map</h2>
        <div className="map-controls">
          <button className="control-btn">Select Area</button>
          <button className="control-btn">Find Help</button>
        </div>
      </div>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {incidents.map(incident => (
          <Marker key={incident.id} position={incident.position}>
            <Popup>
              <strong>{incident.title}</strong>
              <br />
              Type: {incident.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
