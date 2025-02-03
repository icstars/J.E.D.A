import "./SSlocationPage.css";
import { useState } from "react";
import MenuBar from "./MenuBar";

export default function LocationsPage() {
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);
  
  const toggleMenubar = () => {
    setIsMenubarOpen(!isMenubarOpen);
  };

  return (
    <div className="root-container">
      <div className="title-container">
        <h1 id="title">Threshold Locations</h1>

        {/* Search Bar */}
        <input type="text" className="search-bar" placeholder="Search locations..." />

        {/* Locations List */}
        <div className="locations-grid">
          <div className="location-item">
            <h3>Threshold Center 1</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 2</h3>
            <p>456 Wellness Ave, Townsburg</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 3</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 4</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 5</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 6</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 7</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 8</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
          <div className="location-item">
            <h3>Threshold Center 9</h3>
            <p>123 Hope Street, Cityville</p>
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="map-container">
          <p>Interactive Map Coming Soon...</p>
        </div>
      </div>
      
      {/* Sidebar Component */}
      <MenuBar isMenubarOpen={isMenubarOpen} toggleMenubar={toggleMenubar} />
    </div>
  );
}
