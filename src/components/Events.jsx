import React from 'react';
import './Events.css';

const events = [
    {
        date: "OCT 24",
        title: "Global AI Summit 2026",
        location: "San Francisco + Online",
        type: "Conference"
    },
    {
        date: "NOV 12",
        title: "Rust for Systems Hackathon",
        location: "London + Online",
        type: "Hackathon"
    },
    {
        date: "DEC 05",
        title: "Architecture Patterns Workshop",
        location: "Online",
        type: "Workshop"
    }
];

const Events = () => {
    return (
        <section className="section bg-surface" id="events">
            <div className="container">
                <div className="events-header">
                    <div>
                        <span className="section-subtitle">Upcoming Events</span>
                        <h2 className="section-title">Hackathons &<br />Exclusives</h2>
                    </div>
                    <div>
                        <a href="#" className="btn btn-outline arrow-link">View All Events →</a>
                    </div>
                </div>

                <div className="events-list">
                    {events.map((event, index) => (
                        <div className="event-item" key={index}>
                            <div className="event-date">
                                <span className="date-month">{event.date.split(' ')[0]}</span>
                                <span className="date-day">{event.date.split(' ')[1]}</span>
                            </div>
                            <div className="event-info">
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-meta">
                                    <span className="event-type">{event.type}</span>
                                    <span className="event-location">{event.location}</span>
                                </div>
                            </div>
                            <div className="event-action">
                                <button className="btn-icon">→</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
