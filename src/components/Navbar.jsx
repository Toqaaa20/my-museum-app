import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ARCHIVE</h1>

      <div className="nav-links">
        <a href="#">Search</a>
        <a href="#">Artifacts</a>
        <a href="#">Home</a>
      </div>
    </nav>
  );
}