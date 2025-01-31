import React from "react";
import "./SSsearchBar.css"; // Ensure the CSS file is properly imported

export default function menuBar({ isMenubarOpen, toggleMenubar }) {
  return (
    <div className={`menubar ${isMenubarOpen ? "open" : ""}`}>
      <button className="arrow-btn" onClick={toggleMenubar}>
        <img src="/arrow-icon.png" alt="Toggle Menubar" />
      </button>
      <div className="menubar-content">
        <h2>Side Tab Content</h2>
        {/* Add more menubar content as needed */}
      </div>
    </div>
  );
}