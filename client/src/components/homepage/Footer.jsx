import React from 'react';
import './Footer.css'; // Add a new CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Popular Categories</h4>
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Kids</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Movies by Languages</h4>
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Shows by Categories</h4>
          <ul>
            <li>Drama</li>
            <li>Comedy</li>
            <li>Thriller</li>
            <li>Romantic</li>
            <li>Reality</li>
          </ul>
        </div>

        <div className="footer-column footer-socials">
          <h4>Connect with Us</h4>
          <ul>
            <li><i className="fab fa-twitter"></i> Twitter</li>
            <li><i className="fab fa-instagram"></i> Instagram</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 PictaStream Pvt Ltd. All Rights Reserved.</p>
        <div class="footer-links">
            <a href="#">Terms of Use</a> 
            <a href="#">Privacy Policy</a> 
            <a href="#">FAQ</a>
        </div>
    </div>

    </footer>
  );
};

export default Footer;