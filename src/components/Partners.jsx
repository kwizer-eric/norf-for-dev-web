import React from 'react';
import './Partners.css';

const Partners = () => {
    // We duplicate the list to ensure seamless infinite scrolling
    const logos = [
        "GOOGLE", "META", "NETFLIX", "STRIPE", "UBER",
        "AIRBNB", "PALANTIR", "DATADOG", "Vercel", "OpenAI"
    ];

    return (
        <section className="partners-wrapper">
            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '40px' }}>
                <p className="partners-label-animated" style={{ marginBottom: 0 }}>Trusted by Engineering Teams from</p>
            </div>

            <div className="partners-content">
                {/* Track 1 */}
                <div className="marquee-track">
                    {logos.map((logo, index) => (
                        <span key={`1-${index}`} className="partner-logo-holographic">
                            {logo}
                        </span>
                    ))}
                </div>
                {/* Track 2 (Duplicate) */}
                <div className="marquee-track" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <span key={`2-${index}`} className="partner-logo-holographic">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
