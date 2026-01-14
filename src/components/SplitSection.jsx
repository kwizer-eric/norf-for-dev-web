import React from 'react';
import './SplitSection.css';

const SplitSection = () => {
    return (
        <section className="section" id="partners">
            <div className="container split-container">

                {/* For Developers */}
                <div className="split-card card-dev">
                    <div className="card-content">
                        <span className="card-label">For Developers</span>
                        <h3 className="card-title">Elevate Your Career</h3>
                        <p className="card-desc">
                            Get vetted, access exclusive roles, and join a network of elite engineers.
                            Your next big opportunity starts here.
                        </p>
                        <a href="#" className="btn btn-outline">Apply for Membership</a>
                    </div>
                    <div className="card-bg-glow glow-dev"></div>
                </div>

                {/* For Companies */}
                <div className="split-card card-company">
                    <div className="card-content">
                        <span className="card-label">For Companies</span>
                        <h3 className="card-title">Hire Top 1% Talent</h3>
                        <p className="card-desc">
                            Skip the noise. Connect directly with pre-vetted senior developers and technical leaders
                            ready to drive impact.
                        </p>
                        <a href="#" className="btn btn-primary">Hire Developers</a>
                    </div>
                    <div className="card-bg-glow glow-company"></div>
                </div>

            </div>
        </section>
    );
};

export default SplitSection;
