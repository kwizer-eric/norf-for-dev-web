import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="section section-cta">
            <div className="container cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to define the future?</h2>
                    <p className="cta-desc">
                        Join the global network of senior developers and industry leaders today.
                    </p>
                    <div className="cta-actions">
                        <a href="#join" className="btn btn-primary btn-lg">Join the Community</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
