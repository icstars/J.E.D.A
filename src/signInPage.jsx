/*this is the SIGN IN PAGE*/

import './SSsignInPage.css';

export default function App() {
  return (
    <div className="root-container">
      <img
        src="/file.png" // Use the correct relative path for the public folder
        alt="Hope Logo"
        className="hope-logo"
      />
      <h1>Threshold's HopeHub</h1>
      <button className="sign-in-button">Sign In</button>
    </div>
  );
}