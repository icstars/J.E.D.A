import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SSlandingPage.css";

export default function Landing() {

  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="landing-root-container">
      <img
        src="/file.png" // Ensure the logo file exists in your public folder
        alt="Hope Logo"
        id="hope-logo"
      />
      <h1>Threshold's HopeHub</h1>
      <button
        className="sign-in-button"
        onClick={() => {
          // Navigate to the sign-in page
          navigate("/signin");
        }}
      >
        Sign In
      </button>
    </div>
  );
}