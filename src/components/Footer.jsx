import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="footer-desc mt-4">
            Premium organic Canadian wild rice. Naturally grown in the lakes and waterways of northern Saskatchewan.
          </p>
        </div>
        
        <div className="footer-links">
          <h4 className="footer-heading">Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/our-wild-rice">Our Wild Rice</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/export">Export</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p><strong>Phone:</strong> 306-649-2550</p>
          <p><strong>Email:</strong> wildricecanada@gmail.com</p>
          <p><strong>Website:</strong> wildricecanada.ca</p>
          <p className="mt-4">
            <strong>Locations:</strong><br />
            Beauval and Saskatoon<br />
            Saskatchewan, Canada
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Wild Rice Canada (A division of Double Diamond Farm Ltd.). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
