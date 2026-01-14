import React from 'react';
import './Pages.css';

const Services = () => {
    return (
        <div className="container page-container">
            <header className="page-header-v3">
                <div className="header-text">
                    <span className="accent-label">Our Expertise</span>
                    <h1 className="page-title">Engineering Solutions<br />that Scale.</h1>
                    <p className="page-subtitle">
                        From architecture audits to AI agent integration, we leverage senior engineering talent to solve your most complex technical challenges.
                    </p>
                </div>
                <div className="header-visual">
                    <img src="/assets/abstract_system_architecture_1768418300946.png" alt="System Architecture" className="header-img-premium" />
                </div>
            </header>

            <div className="services-grid-v3">
                <div className="service-v3-item">
                    <div className="service-icon-box">⚡</div>
                    <h3>Distributed Systems</h3>
                    <p>Designing high-availability architectures that handle massive scale across global regions.</p>
                </div>
                <div className="service-v3-item">
                    <div className="service-icon-box">🤖</div>
                    <h3>AI & Automation</h3>
                    <p>Integrating LLMs and autonomous agents into production workflows for intelligent scaling.</p>
                </div>
                <div className="service-v3-item">
                    <div className="service-icon-box">🛡️</div>
                    <h3>Security Audits</h3>
                    <p>Deep-dive code reviews and penetration testing by industry veterans.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
