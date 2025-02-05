import "./SSsearchBar.css";
import { useState } from "react";
import MenuBar from "./MenuBar"; // Import the SideBar component
import { useNavigate } from "react-router-dom"; 


export default function SearchBar() {
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);

  const toggleMenubar = () => {
    setIsMenubarOpen(!isMenubarOpen);
  };

  const navigate = useNavigate(); // Initialize the navigate function


  return (
    <div className="search-root-container">
      <div className="title-container">
        <h1 id="title">Threshold's HopeHub</h1>

        {/* Search Bar */}
        {/* <input type="text" className="search-bar" placeholder="Search" /> */}

        <iframe id="chatbot" src="https://copilotstudio.microsoft.com/environments/Default-88227c99-d157-4dbe-8e33-d8b3fcc29577/bots/cr69f_hope1/webchat?__version__=2"></iframe>

        {/* Button Container */}
        <div className="button-container">


          <button id='location' className="icon-button" 
          
          onClick={() => {
            // Navigate to the search page
            navigate("/location");
          }}
          >

            <img src="public\location (4).png" alt="Button 1" style={{ width: '65px', height: '50px' }}/>
            
          </button>



          <button id='staff' className="icon-button"
          
          onClick={() => {
            // Navigate to the search page
            navigate("/staff");
          }}
          >

            <img src="public\contact (5).png" alt="Button 2" style={{ width: '75px', height: '50px' }} />

          </button>




          <button id='savedChats' className="icon-button"
          
          onClick={() => {
            // Navigate to the search page
            navigate("/savedResources");
          }}
          >

            <img src="public\bookmark.png" alt="Button 3" style={{ width: '70px', height: '50px' }} />

          </button>
          


        </div>
      </div>

      {/* Sidebar Component */}
      <MenuBar isMenubarOpen={isMenubarOpen} toggleMenubar={toggleMenubar} />

    </div>
  );
}