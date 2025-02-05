import { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import './SSsignin.css'; // Make sure this file exists

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function


  return (
    <div className="signin-root-container">
      <img
        src="/file.png"
        alt="Hope Logo"
        className="hope-logo"
      />

      
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />

<button
        className="sign-in-button-two"
        
        onClick={() => {
          // Navigate to the search page
          navigate("/search");
        }}
      >
        Sign In
      </button>



{/* <button className="sign-in-button-two">
            <h3>Sign In</h3>
            onClick={() => {
          // Navigate to the sign-in page
          window.location.href = "/search";
        }}
          </button>     >>>>>>>>>>>>>>>>>>>>>>>>>>> this is the old sign in button, it was fixed*/}

          
    </div>
  );
}
