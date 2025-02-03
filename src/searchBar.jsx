import './SSsearchBar.css';
import { useState } from 'react';

export default function SearchBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <div className="root-container">
      <div className="title-container">
        <h1 id="title">Threshold's HopeHub</h1>

        {/* Search Bar */}
        <input type="text" className="search-bar" placeholder="Search..." />

        {/* Button Container */}
        <div className="button-container">
          <button className="icon-button">
            <img src="public/location.png" alt="Button 1" />
          </button>
          <button className="icon-button">
            <img src="public/contacts.png" alt="Button 2" />
          </button>
          <button className="icon-button">
            <img src="public\recentmessages.png" alt="Button 3" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="arrow-btn" onClick={toggleSidebar}>
          <img src="public/menu.png" alt="Toggle Sidebar" style={{ width: '35px', height: '35px' }}/>
        </button>
        {/* Add sidebar content here */}
        <div className="sidebar-content">
          <h2>Side Tab Content</h2>
          {/* Add more sidebar content as needed */}
        </div>
      </div>
    </div>
  );
}