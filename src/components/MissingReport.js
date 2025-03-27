import React from "react";
import "./MissingReport.css";

const MissingReport = () => {
  return (
    <div className="missing-report">
      <h2>?? MISSING REPORT</h2>
      <input type="file" placeholder="Upload a Recent Photo" />
      <input type="text" placeholder="Last Known Location" />
      <textarea placeholder="Describe some identification"></textarea>
    </div>
  );
};

export default MissingReport;
