
import { useState } from 'react';
import MenuBar from './MenuBar';
import './SSstaffDirectory.css';
import { useNavigate } from 'react-router-dom';
import HomeButton from "./homeButton";



const StaffDirectory = () => {

    const [isMenubarOpen, setIsMenubarOpen] = useState(false);
    
      const toggleMenubar = () => {
        setIsMenubarOpen(!isMenubarOpen);
      };

    const navigate = useNavigate(); // Initialize the navigate function 

 return (
   
   <div className="staff-directory">
     
<HomeButton />

     {/* <button
  id="home"
  className="icon-button"
  onClick={() => {
    navigate("/search");
  }}
>
  <img
    src="/file.png" // Use the same image as on the landing page
    alt="Home Button"
    style={{ width: "65px", height: "50px" }} // Adjust dimensions if needed
  />
</button> */}

     <div className="staff-search-bar">
       <input type="text" placeholder="Search by name" />
       <button className="enter-icon">
          <img src="public\search_icon.png" alt="staff_search_button" style={{ width: '35px', height: '35px' }}/>
       </button>
     </div>


     <div className="specialities-dropdown">
       <select>
         <option value="">Select Speciality</option>
         <option value="speciality1">Speciality 1</option>
         <option value="speciality2">Speciality 2</option>
       </select>
     </div>


     <div className="staff-info">
       <div className="staff-row">
         <img src="public\staff2.jpg" alt="Staff" className="staff-picture" />
         <div className="staff-address">
           <p>123 Work Address</p>
           <p>City, State, ZIP</p>
         </div>
       </div>

        
       <div className="staff-row">
         <img src="public\staff1.jpg" alt="Staff" className="staff-picture" />
         <div className="staff-address">
           <p>456 Work Address</p>
           <p>City, State, ZIP</p>
         </div>
       </div>


     </div>

    <MenuBar isMenubarOpen={isMenubarOpen} toggleMenubar={toggleMenubar} />

   </div>
 );
};
 
export default StaffDirectory;