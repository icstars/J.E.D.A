import { useState } from 'react';
import './SSsignin.css'; // Make sure this file exists

export default function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

<button className="sign-in-button">
            <h3>Sign In</h3>
          </button>
    </div>
  );
}
