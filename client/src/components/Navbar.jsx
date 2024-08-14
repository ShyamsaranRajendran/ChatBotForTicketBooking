import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FreelancerHub</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/freelancers">Freelancers</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
      <div className="navbar-toggle">
        {/* <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span> */}
      </div>
    </nav>
  );
}

export default Navbar;
