import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Senior Backend Engineer",
            company: "Google",
            quote: "Joining Norf was the turning point in my career. The mentorship I received here helped me break through the 'senior' ceiling.",
            avatar: "/assets/avatar1.jpg" // Placeholder
        },
        {
            name: "David Chen",
            role: "Staff Engineer",
            company: "Shopify",
            quote: "The quality of discussions here is unmatched. It's refreshing to be in a community that focuses on deep technical challenges.",
            avatar: "/assets/avatar2.jpg"
        },
        {
            name: "Elena Rodriguez",
            role: "VP of Engineering",
            company: "TechFlow",
            quote: "I've hired three engineers from this community. They are consistently the strongest candidates in our pipeline.",
            avatar: "/assets/avatar3.jpg"
        }
    ];

    return (
        <section className="testimonials-section" id="stories">
            <div className="container">
                <div className="features-header">
                    <span className="accent-label">Wall of Love</span>
                    <h2 className="section-title-v2">Trusted by the Best</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {/* Placeholder for now */}
                                    <div style={{ width: '100%', height: '100%', background: '#333' }}></div>
                                </div>
                                <div className="testimonial-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.role} @ {t.company}</span>
                                </div>
                            </div>
                            <p className="testimonial-quote">"{t.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
