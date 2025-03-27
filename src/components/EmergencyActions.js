import React from "react";
import "./EmergencyActions.css";

const EmergencyActions = () => {
  return (
    <div className="emergency-actions">
      <textarea placeholder="Describe the disaster"></textarea>
      <input type="text" placeholder="Tag Location" />
      <button>Upload Photo</button>
      <button>Submit Report</button>
    </div>
  );
};

export default EmergencyActions;
