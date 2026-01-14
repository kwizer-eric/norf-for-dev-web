import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo footer-logo">
                        Norf<span className="logo-highlight">dev</span>
                    </div>
                    <p className="footer-tagline">
                        The premium network for senior engineering talent.
                    </p>
                    <div className="social-links">
                        <a href="#">𝕏</a>
                        <a href="#">In</a>
                        <a href="#">Gh</a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Platform</h4>
                        <a href="#">About</a>
                        <a href="#">Community</a>
                        <a href="#">Events</a>
                        <a href="#">Partners</a>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="#">Blog</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Careers</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Code of Conduct</a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Norf for Dev. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
