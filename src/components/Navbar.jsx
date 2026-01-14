import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <NavLink to="/" className="logo">
          Norf<span className="logo-highlight">dev</span>
        </NavLink>

        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/about">About Us ▼</NavLink>
            <div className="mega-menu">
              <div className="mega-grid">
                <div>
                  <h4>Company</h4>
                  <a href="#">Our Story</a>
                  <a href="#">Leadership</a>
                  <a href="#">Careers</a>
                </div>
                <div>
                  <h4>Culture</h4>
                  <a href="#">Diversity</a>
                  <a href="#">Philanthropy</a>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/services">Services ▼</NavLink>
            <div className="mega-menu">
              <div className="mega-grid">
                <div>
                  <h4>Development</h4>
                  <a href="#">Web Applications</a>
                  <a href="#">Mobile Development</a>
                  <a href="#">API Integration</a>
                </div>
                <div>
                  <h4>Consulting</h4>
                  <a href="#">System Architecture</a>
                  <a href="#">Cloud Migration</a>
                  <a href="#">AI Strategy</a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/work">Work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <NavLink to="/login" className="btn btn-sm btn-outline">Log In</NavLink>
          <NavLink to="/join" className="btn btn-sm btn-primary">Join Now</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
