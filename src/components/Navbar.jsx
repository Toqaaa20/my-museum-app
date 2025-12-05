import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ARCHIVE</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/artifacts">Artifacts</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}
