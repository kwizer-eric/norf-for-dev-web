import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="features-header">
                    <span className="accent-label">Membership</span>
                    <h2 className="section-title-v2">Choose Your Path</h2>
                </div>

                <div className="pricing-grid">
                    {/* Community Member */}
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>Community Member</h3>
                            <p className="text-secondary">For developers looking to network and learn.</p>
                        </div>
                        <div className="pricing-price">
                            Free
                        </div>
                        <ul className="pricing-features">
                            <li><CheckIcon /> Access to Community Events</li>
                            <li><CheckIcon /> Monthly Newsletters</li>
                            <li><CheckIcon /> Public Slack Channels</li>
                            <li className="unavailable"><CheckIcon /> Direct Mentorship</li>
                            <li className="unavailable"><CheckIcon /> Job Placement</li>
                        </ul>
                        <a href="/join" className="btn btn-outline btn-block">Join Community</a>
                    </div>

                    {/* Fellow */}
                    <div className="pricing-card featured">
                        <span className="featured-label">Recommended</span>
                        <div className="pricing-header">
                            <h3>Fellow</h3>
                            <p className="text-secondary">For ambitious engineers seeking rapid growth.</p>
                        </div>
                        <div className="pricing-price">
                            Application
                            <span> / cohort</span>
                        </div>
                        <ul className="pricing-features">
                            <li><CheckIcon /> All Community Benefits</li>
                            <li><CheckIcon /> 1-on-1 Mentorship</li>
                            <li><CheckIcon /> Exclusive Job Board</li>
                            <li><CheckIcon /> Peer Code Reviews</li>
                            <li><CheckIcon /> Career Mapping</li>
                        </ul>
                        <a href="/apply" className="btn btn-primary btn-block">Apply for Fellowship</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CheckIcon = () => (
    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default Pricing;
