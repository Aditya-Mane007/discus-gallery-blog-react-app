import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Discus Gallery
      </Link>

      <Link to="/about" className="logo">
        About Me
      </Link>
    </div>
  );
}

export default Navbar;
