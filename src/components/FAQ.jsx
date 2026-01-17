import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I join the community?",
            answer: "You can join as a Community Member for free by signing up on our platform. Fellowship positions require an application and interview process."
        },
        {
            question: "Is this suitable for junior developers?",
            answer: "Our core content is designed for Senior, Staff, and Principal engineers. However, ambitious mid-level engineers looking to level up are welcome to apply."
        },
        {
            question: "What is the time commitment for the Fellowship?",
            answer: "We expect Fellows to dedicate at least 3-5 hours per week for mentorship sessions, peer reviews, and community events."
        },
        {
            question: "Do you offer job placement?",
            answer: "Yes, for our Fellows. We have direct partnerships with hiring managers at top tech companies and startups."
        }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="features-header">
                    <span className="accent-label">FAQ</span>
                    <h2 className="section-title-v2">Common Questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <button className="faq-question">
                                {faq.question}
                                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
