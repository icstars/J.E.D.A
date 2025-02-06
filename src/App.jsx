
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Signin from './Signin';
import Landing from './landingPage';
import Location from './locationsPage';
// import MenuBar from './MenuBar';
import SearchBar from './searchBar';
import StaffDirectory from './staffDirectory';

export default function App() {
  return (
    <Router>

      {/* <div className="app-container">
        {/* Home Button */}                   {/* This is the Home Button Component */}
        {/*<HomeButton /> */}                 {/* problem is that it was showing up on the landing and signin page */}

      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/location" element={<Location />} />
        <Route path="/staff" element={<StaffDirectory />} />
        {/* <Route path="/menu" element={<MenuBar />} /> */}
        {/* <Route path="/signin" element={<Signin />} /> */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

// HomeButton Component
// function HomeButton() {
//   const navigate = useNavigate();

//   return (
//     <button
//       className="home-button"
//       onClick={() => navigate('/')} // Navigates to the Landing page
//     >
//       Home
//     </button>
//   );
// }