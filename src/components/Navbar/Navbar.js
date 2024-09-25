import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RegistrationForm from "../Registration/RegistrationForm"; // Import the RegistrationForm
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the registration form

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleSearch = (searchText) => {
    console.log("Search for:", searchText);
  };

  const handleRegisterClick = () => {
    setShowForm((prev) => !prev); // Toggle the registration form visibility
  };

  return (
    <header>
      <h3>Experience Cricket Like Never Before!</h3>
      <SearchBar handleSearch={handleSearch} />
      <nav ref={navRef}>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
      {/* Register button in the right corner */}
      <button className="register-btn" onClick={handleRegisterClick}>
        Register
      </button>

      {/* Conditionally render the RegistrationForm */}
      {showForm && <RegistrationForm />}
    </header>
  );
}

export default Navbar;
