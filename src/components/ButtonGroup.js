import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <button className="red">Severe Weather Alerts</button>
      <button className="orange">Evacuation Orders</button>
      <button className="green">Medical & Rescue Updates</button>
      <button className="blue">Missing Persons Reports</button>
    </div>
  );
};

export default ButtonGroup;