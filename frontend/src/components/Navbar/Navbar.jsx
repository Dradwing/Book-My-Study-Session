import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Future Edge</div>
      <div className="navbar-left">
        <ul className="navbar-links">
          <li><a href="#courses">Courses</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#why-future-edge">Why FutureEdge</a></li>
          <li><a href="#mentors">Mentors</a></li>
          <li><a href="#alumni">Alumni</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="#signin">Sign in</a></li>
          <li><a href="#signup" className="signup-button" style={{color:"white"}}>Sign up</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
