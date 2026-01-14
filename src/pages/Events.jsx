import React from 'react';
import './Pages.css';

const Events = () => {
    return (
        <div className="container page-container">
            <header className="page-header">
                <span className="section-subtitle">Calendar</span>
                <h1 className="page-title">Connect. Compete.<br />Create.</h1>
                <p className="page-subtitle">
                    Join our global hackathons, exclusive workshops, and networking summits.
                    Sharpen your skills and meet the best in the business.
                </p>
            </header>

            <div className="list-view">
                {/* Event 1 */}
                <div className="list-item">
                    <div className="event-date-block" style={{ textAlign: 'center', minWidth: '80px', marginRight: '24px' }}>
                        <span style={{ display: 'block', color: 'var(--primary-color)', fontWeight: '700' }}>OCT</span>
                        <span style={{ fontSize: '2rem', fontWeight: '700' }}>24</span>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <h3 className="card-title" style={{ marginBottom: '8px' }}>Global AI Summit 2026</h3>
                        <p className="card-text">San Francisco • In-Person & Online</p>
                    </div>
                    <button className="btn btn-primary">Register Now</button>
                </div>

                {/* Event 2 */}
                <div className="list-item">
                    <div className="event-date-block" style={{ textAlign: 'center', minWidth: '80px', marginRight: '24px' }}>
                        <span style={{ display: 'block', color: 'var(--primary-color)', fontWeight: '700' }}>NOV</span>
                        <span style={{ fontSize: '2rem', fontWeight: '700' }}>12</span>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <h3 className="card-title" style={{ marginBottom: '8px' }}>Rust for Systems Hackathon</h3>
                        <p className="card-text">London • Hybrid</p>
                    </div>
                    <button className="btn btn-primary">Register Now</button>
                </div>

                {/* Event 3 */}
                <div className="list-item">
                    <div className="event-date-block" style={{ textAlign: 'center', minWidth: '80px', marginRight: '24px' }}>
                        <span style={{ display: 'block', color: 'var(--primary-color)', fontWeight: '700' }}>DEC</span>
                        <span style={{ fontSize: '2rem', fontWeight: '700' }}>05</span>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <h3 className="card-title" style={{ marginBottom: '8px' }}>Architecture Patterns Workshop</h3>
                        <p className="card-text">Online • Exclusive for Members</p>
                    </div>
                    <button className="btn btn-primary">Join Waitlist</button>
                </div>
            </div>
        </div>
    );
};

export default Events;
