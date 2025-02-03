import "./SSsearchBar.css";
import { useState } from "react";
import MenuBar from "./MenuBar"; // Import the SideBar component

export default function SearchBar() {
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);

  const toggleMenubar = () => {
    setIsMenubarOpen(!isMenubarOpen);
  };

  return (
    <div className="search-root-container">
      <div className="title-container">
        <h1 id="title">Threshold's HopeHub</h1>

        {/* Search Bar */}
        {/* <input type="text" className="search-bar" placeholder="Search" /> */}

        <iframe id="chatbot" src="https://copilotstudio.microsoft.com/environments/Default-88227c99-d157-4dbe-8e33-d8b3fcc29577/bots/cr69f_hope1/webchat?__version__=2"></iframe>

        {/* Button Container */}
        <div className="button-container">
          <button className="icon-button">
            <img src="/image1.png" alt="Button 1" />
          </button>
          <button className="icon-button">
            <img src="/image2.png" alt="Button 2" />
          </button>
          <button className="icon-button">
            <img src="/image3.png" alt="Button 3" />
          </button>
        </div>
      </div>

      {/* Sidebar Component */}
      <MenuBar isMenubarOpen={isMenubarOpen} toggleMenubar={toggleMenubar} />
    </div>
  );
}