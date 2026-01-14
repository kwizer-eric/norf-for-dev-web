import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="container hero-content">
                <h1 className="hero-title fade-in">
                    The Global Network for <span className="text-gradient">Senior Developers</span>
                </h1>
                <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
                    Connect with elite talent, master advanced technologies, and shape the future of software engineering.
                </p>
                <div className="hero-actions fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#join" className="btn btn-primary">Join the Community</a>
                    <a href="#partner" className="btn btn-outline">Partner With Us</a>
                </div>

                <div className="hero-stats fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="stat-item">
                        <span className="stat-number">15k+</span>
                        <span className="stat-label">Senior Members</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Partner Companies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">120+</span>
                        <span className="stat-label">Countries</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
