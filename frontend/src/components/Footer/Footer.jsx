import React from 'react';
import './Footer.css';
import { FaLinkedin,FaGithubSquare, FaTwitterSquare} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-me">
          <h4>About Me</h4>
          <p style={{paddingRight:"20px"}}>
            I am Ashutosh Saini graduated from IIIT Sonepat in 2024. I have work experience with Nielsen, and Flipkart. I attained good level of problem solving skills by solving above 4000 DSA/CP questions on various coding platforms.
          </p>
        </div>
        
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/sessions">Book a Session</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p>Email: ashutoshsaini432@gmail.com</p>
          <p>Phone: +91 9058139810</p>
          <p>Address: Banglore, Karnataka, India</p>
        </div>
        
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare /> Github
            </a>
            <br></br>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
            </a>
            <br></br>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare /> Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 YourWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
