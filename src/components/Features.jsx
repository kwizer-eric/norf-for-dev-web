import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <span className="accent-label">Platform Features</span>
                    <h2 className="section-title-v2">Everything you need to <br />Reach the Next Level</h2>
                </div>

                <div className="bento-grid">
                    {/* Large Card: Direct CTO Access */}
                    <div className="bento-card bento-card-large">
                        <div className="bento-content">
                            <div className="bento-icon">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 className="bento-title">Direct CTO Access</h3>
                            <p className="bento-desc">
                                Bypass the gatekeepers. Get mentorship, layout your career path, and receive direct feedback from CTOs and VPs of Engineering at top tech companies.
                            </p>
                        </div>
                    </div>

                    {/* Medium Card: Peer Code Reviews */}
                    <div className="bento-card bento-card-medium">
                        <div className="bento-icon">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h3 className="bento-title">Peer Code Reviews</h3>
                        <p className="bento-desc">
                            Don't code in a silo. Get eyes on your PRs from senior engineers who care about clean, scalable architecture.
                        </p>
                    </div>

                    {/* Medium Card: Exclusive Job Board */}
                    <div className="bento-card bento-card-medium">
                        <div className="bento-icon">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <h3 className="bento-title">Hidden Job Market</h3>
                        <p className="bento-desc">
                            Access opportunities that are never posted publicly. High-impact roles at vetted startups and enterprises.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
