
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SigninPage from './SigninPage';
import LandingPage from './LandingPage';
import LocationsPage from './LocationsPage';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/menu" element={<MenuBar />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}