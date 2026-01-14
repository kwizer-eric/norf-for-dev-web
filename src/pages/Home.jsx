import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="home-v3">
            {/* Parallax Layers */}
            <div className="parallax-bg" style={{ transform: `translateY(${offsetY * 0.3}px)` }}></div>
            <div className="bg-grid-parallax" style={{ transform: `translateY(${offsetY * 0.15}px)` }}></div>

            {/* 1. Hero Section - Refactored based on Reference Image Structure */}
            <section className="hero-v3">
                <div className="container hero-split">
                    <div className="hero-left">
                        <span className="accent-label fade-in">Norf for Dev</span>
                        <h1 className="hero-main-title fade-in">
                            Empowering Developers. <br />
                            Creating Opportunities.
                        </h1>

                        <div className="programme-list fade-in" style={{ animationDelay: '0.2s' }}>
                            <h3>Our Focus Areas</h3>
                            <ul>
                                <li>— Advanced Software Engineering</li>
                                <li>— Distributed Systems & Mentorship</li>
                                <li>— Global Career Opportunities</li>
                                <li>— High-Stakes Hackathons</li>
                                <li>— Open Source Collaboration</li>
                            </ul>
                        </div>

                        <div className="hero-actions-v3 fade-in" style={{ animationDelay: '0.4s' }}>
                            <a href="/join" className="btn btn-primary">Join as Developer</a>
                            <a href="/partner" className="btn btn-outline">Partner With Us</a>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="image-card-parallax" style={{ transform: `translateY(${offsetY * -0.05}px)` }}>
                            <img src="/assets/hero_senior_devs_1768418268095.png" alt="Senior Developers Collaborating" className="hero-img" />
                            <div className="card-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. About/Pillars Section with Imagery */}
            <section className="pillars-v3">
                <div className="container pillars-content-split">
                    <div className="pillars-visual">
                        <img src="/assets/tech_collaboration_pillars_1768418284274.png" alt="Collaborative Mentorship" className="pillars-img" />
                    </div>
                    <div className="pillars-text">
                        <span className="accent-label">Why Norf</span>
                        <h2 className="section-title-v2">Built for the <br />Top 1%</h2>
                        <div className="pillars-list-v3">
                            <div className="pillar-v3-item">
                                <h4>Real Skills Only</h4>
                                <p>No theory without practice. We build production-ready systems.</p>
                            </div>
                            <div className="pillar-v3-item">
                                <h4>Vetted Community</h4>
                                <p>Connect with Principal Engineers and CTOs directly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services / Tech Stack Visuals */}
            <section className="services-v3">
                <div className="container">
                    <div className="services-header-centered">
                        <h2 className="section-title-v2">Engineering Excellence</h2>
                        <p>Scalable, high-performance solutions for complex problems.</p>
                    </div>
                    <div className="services-visual-grid">
                        <div className="service-v3-card">
                            <img src="/assets/abstract_system_architecture_1768418300946.png" alt="System Architecture" className="service-img" />
                            <div className="service-card-content">
                                <h3>Cloud & AI</h3>
                                <p>Designing the backbone of next-gen applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="cta-v3">
                <div className="container">
                    <div className="cta-v3-box">
                        <h2>Ready to grow with Norf?</h2>
                        <div className="cta-actions-v2">
                            <a href="/join" className="btn btn-primary btn-lg">Join as Developer</a>
                            <a href="/partner" className="btn btn-secondary btn-lg">Become a Partner</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
