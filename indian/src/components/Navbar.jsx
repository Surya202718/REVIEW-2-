import React from "react";
import { Link } from "react-router-dom";
import RoleSwitcher from "./RoleSwitcher";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🏛️ Bharat Heritage
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/monuments">Monuments</Link></li>
          <li><Link to="/tours">Virtual Tours</Link></li>
          <li><Link to="/culture">Culture</Link></li>
          <li><Link to="/learning">Learning</Link></li>
          <li><Link to="/discussions">Discussions</Link></li>
          <li><RoleSwitcher /></li> {/* Add this line */}
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
