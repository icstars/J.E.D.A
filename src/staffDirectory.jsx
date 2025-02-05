
import { useState } from 'react';
import MenuBar from './MenuBar';
import './SSstaffDirectory.css';
import { useNavigate } from 'react-router-dom';




const StaffDirectory = () => {

    const [isMenubarOpen, setIsMenubarOpen] = useState(false);
    
      const toggleMenubar = () => {
        setIsMenubarOpen(!isMenubarOpen);
      };

    const navigate = useNavigate(); // Initialize the navigate function 

 return (
   
   <div className="staff-directory">
     
     <div className="search-bar">
       <input type="text" placeholder="Search by name" />
       <button className="enter-icon">🔍</button>
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
         <img src="path/to/picture.jpg" alt="Staff" className="staff-picture" />
         <div className="staff-address">
           <p>123 Work Address</p>
           <p>City, State, ZIP</p>
         </div>
       </div>

        
       <div className="staff-row">
         <img src="path/to/picture.jpg" alt="Staff" className="staff-picture" />
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