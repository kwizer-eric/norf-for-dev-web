import React from 'react';
import './WhatWeDo.css';

const features = [
    {
        title: "Advanced Training",
        description: "Deep-dive workshops and courses on distributed systems, AI engineering, and system architecture.",
        icon: "⚡"
    },
    {
        title: "Global Hackathons",
        description: "Compete in high-stakes coding challenges with elite teams from around the world.",
        icon: "🏆"
    },
    {
        title: "Career Acceleration",
        description: "Direct access to CTOs and hiring managers at top-tier tech companies.",
        icon: "🚀"
    },
    {
        title: "Open Source",
        description: "Collaborate on impactful open-source projects managed by the community.",
        icon: "🌐"
    }
];

const WhatWeDo = () => {
    return (
        <section className="section bg-surface" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2 className="section-title">Empowering the World's<br />Best Developers</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
