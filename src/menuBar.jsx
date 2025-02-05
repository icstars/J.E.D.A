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
          <li>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent1")}
            >
              Notifications
            </button>
            {submenuStates["parent1"] && (
              <ul className="submenu">
                <li>Teams</li>
                <li>Outlook</li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent2")}
            >
              Saved Resources
            </button>
            {submenuStates["parent2"] && (
              <ul className="submenu">
                <li>Training Doc</li>
                <li>Training Doc</li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="menu-item"
              onClick={() => toggleSubmenu("parent3")}
            >
              Recents
            </button>
            {submenuStates["parent3"] && (
              <ul className="submenu">
                <li>Locations </li>
                <li>Recent Searches</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

