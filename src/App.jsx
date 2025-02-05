
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from './Signin';
import Landing from './LandingPage';
import Location from './LocationsPage';
// import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/signin" element={<Signin />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/location" element={<Location />} />
        {/* <Route path="/menu" element={<MenuBar />} /> */}
        {/* <Route path="/signin" element={<Signin />} /> */}
      </Routes>
    </Router>
  );
}