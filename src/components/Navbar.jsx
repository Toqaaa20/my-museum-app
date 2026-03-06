import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";  

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
      
        <Link to="/" className="logo-link">
          <img src={logo} alt="ARCHIVE logo" className="logo-img" />
        </Link>


        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-item active" : "nav-item"}>
            About Museum
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
            Contact Us
          </Link>
        </div>

        
    
      
      </div>
    </nav>
  );
}
