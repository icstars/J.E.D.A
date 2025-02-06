import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
  id="home"
  className="icon-button"
  onClick={() => {
    navigate("/search");
  }}
>
  <img
    src="/file.png"
    alt="Home Button"
    style={{
      width: "100px", // Increase the width
      height: "100px", // Increase the height
      position: "absolute", // Position it freely on the screen
      top: "20px", // Push it down from the top
      left: "20px", // Push it right from the left
      zIndex: 10, // Ensure it stays above other elements
    }}
  />
</button>
  );
}