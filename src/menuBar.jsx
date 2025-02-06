import React, { useState } from "react";
import "./SSsearchBar.css"; // Ensure the CSS file is properly imported

export default function MenuBar({ isMenubarOpen, toggleMenubar }) {
  const [submenuStates, setSubmenuStates] = useState({});

  const toggleSubmenu = (menuItem) => {
    setSubmenuStates((prevStates) => ({
      ...prevStates,
      [menuItem]: !prevStates[menuItem],
    }));
  };

  return (
    <div className={`menubar ${isMenubarOpen ? "open" : ""}`}>
      <button className="arrow-btn" onClick={toggleMenubar}>
        <img src="public\open-menu.png" alt="Toggle Menubar" style={{ width: '30px', height: '50px' }}/>
      </button>
      <div className="menubar-content">
        <h2>Main Menu</h2>
        <ul className="menu-list">
          <p>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent1")}
            >
              Notifications
            </button>
            {submenuStates["parent1"] && (
              <ul className="submenu">
                <h3>Teams</h3>
                <h3>Outlook</h3>
              </ul>
            )}
          </p>
          <p>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent2")}
            >
              Saved Resources
            </button>
            {submenuStates["parent2"] && (
              <ul className="submenu">
                <h3>Training Doc</h3>
                <h3>Training Doc</h3>
              </ul>
            )}
          </p>
          <p>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent3")}
            >
              Recents
            </button>
            {submenuStates["parent3"] && (
              <ul className="submenu">
                <h3>Locations </h3>
                <h3>Recent Searches</h3>
              </ul>
            )}
          </p>
        </ul>
      </div>
    </div>
  );
}

