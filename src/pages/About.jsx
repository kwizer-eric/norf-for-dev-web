import React from 'react';
import './Pages.css';

const About = () => {
    return (
        <div className="container page-container">
            <header className="page-header-v3">
                <div className="header-text">
                    <span className="accent-label">Our Story</span>
                    <h1 className="page-title">Engineering the Future,<br />Together.</h1>
                    <p className="page-subtitle">
                        Norf for Dev is a global collective of senior engineers, architects, and technical leaders dedicated to raising the bar of software excellence.
                    </p>
                </div>
                <div className="header-visual">
                    <img src="/assets/tech_collaboration_pillars_1768418284274.png" alt="Team Collaboration" className="header-img-premium" />
                </div>
            </header>

            <section className="about-content-v3">
                <div className="content-grid-v3">
                    <div className="glass-info-card">
                        <span className="card-num">01</span>
                        <h3>The Mission</h3>
                        <p>To provide senior-level guidance and opportunities to developers who are ready to build the next generation of global systems.</p>
                    </div>
                    <div className="glass-info-card">
                        <span className="card-num">02</span>
                        <h3>The Vision</h3>
                        <p>A world where technical merit and community-driven innovation are the primary drivers of career success.</p>
                    </div>
                </div>
            </section>

            <section className="leadership-v3">
                <h2 className="section-title-v2 centered">Leadership Team</h2>
                <div className="leadership-grid">
                    <div className="leader-card">
                        <div className="leader-avatar">AC</div>
                        <h4>Alex Chen</h4>
                        <p>Founder & CTO</p>
                    </div>
                    <div className="leader-card">
                        <div className="leader-avatar">SM</div>
                        <h4>Sarah Miller</h4>
                        <p>Head of Community</p>
                    </div>
                    <div className="leader-card">
                        <div className="leader-avatar">DO</div>
                        <h4>David Okafor</h4>
                        <p>Lead Architect</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
