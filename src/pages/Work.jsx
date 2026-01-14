import React from 'react';
import './Pages.css';

const Work = () => {
    return (
        <div className="container page-container">
            <header className="page-header">
                <span className="section-subtitle">Portfolio</span>
                <h1 className="page-title">Our Impact.</h1>
                <p className="page-subtitle">
                    See how Norf for Dev members are transforming industries through code.
                    Real projects, real scale, real results.
                </p>
            </header>

            <div className="list-view">
                <div className="list-item">
                    <div>
                        <span className="section-subtitle" style={{ marginBottom: '8px' }}>FinTech</span>
                        <h3 className="card-title">Global Payments Dashboard</h3>
                        <p className="card-text">
                            Rebuilding a legacy payment processing system for a Fortune 500 bank,
                            reducing latency by 400ms.
                        </p>
                    </div>
                    <button className="btn btn-outline arrow-link">View Case Study →</button>
                </div>

                <div className="list-item">
                    <div>
                        <span className="section-subtitle" style={{ marginBottom: '8px' }}>Healthcare AI</span>
                        <h3 className="card-title">Diagnostic Assistant Agent</h3>
                        <p className="card-text">
                            An LLM-powered tool helping radiologists triage patient scans with
                            99.2% accuracy in initial screenings.
                        </p>
                    </div>
                    <button className="btn btn-outline arrow-link">View Case Study →</button>
                </div>

                <div className="list-item">
                    <div>
                        <span className="section-subtitle" style={{ marginBottom: '8px' }}>E-Commerce</span>
                        <h3 className="card-title">High-Scale Inventory System</h3>
                        <p className="card-text">
                            Distributed system handling 50k transactions per second during
                            Black Friday sales events.
                        </p>
                    </div>
                    <button className="btn btn-outline arrow-link">View Case Study →</button>
                </div>
            </div>
        </div>
    );
};

export default Work;
