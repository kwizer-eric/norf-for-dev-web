import React, { useEffect, useState } from 'react';
import './Home.css';
import '../components/ArcSeparator.css';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="home-v3">
            {/* Parallax Layers */}
            <div className="parallax-bg" style={{ transform: `translateY(${offsetY * 0.3}px)` }}></div>
            <div className="bg-grid-parallax" style={{ transform: `translateY(${offsetY * 0.15}px)` }}></div>

            {/* 1. Hero Section - Refactored based on Reference Image Structure */}
            <section className="hero-v3">
                <div className="container hero-split">
                    <div className="hero-left">
                        <span className="accent-label fade-in">Norf for Dev</span>
                        <h1 className="hero-main-title fade-in">
                            Empowering Developers. <br />
                            Creating Opportunities.
                        </h1>

                        <div className="programme-list fade-in" style={{ animationDelay: '0.2s' }}>
                            <h3>Our Focus Areas</h3>
                            <ul>
                                <li>— Advanced Software Engineering</li>
                                <li>— Distributed Systems & Mentorship</li>
                                <li>— Global Career Opportunities</li>
                                <li>— High-Stakes Hackathons</li>
                                <li>— Open Source Collaboration</li>
                            </ul>
                        </div>

                        <div className="hero-actions-v3 fade-in" style={{ animationDelay: '0.4s' }}>
                            <a href="#pricing" className="btn btn-primary">Join as Developer</a>
                            <a href="/partner" className="btn btn-outline">Partner With Us</a>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="image-card-parallax" style={{ transform: `translateY(${offsetY * -0.05}px)` }}>
                            <img src="/assets/hero_senior_devs_1768418268095.png" alt="Senior Developers Collaborating" className="hero-img" />
                            <div className="card-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arc Separator */}
            <div className="hero-separator-arc">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 0C480 80 960 80 1440 0V100H0V0Z" fill="var(--bg-color)" fillOpacity="0.5" />
                    <path d="M0 20C480 100 960 100 1440 20V120H0V20Z" fill="var(--bg-color)" />
                    <path d="M0 20C480 100 960 100 1440 20" stroke="var(--primary-glow)" strokeWidth="2" strokeOpacity="0.5" />
                </svg>
            </div>

            {/* Trusted Partners - Infinite Scrolling Marquee */}
            <Partners />

            {/* 2. Features Bento Grid */}
            <Features />

            {/* 3. Social Proof */}
            <Testimonials />

            {/* 4. Pricing / Membership */}
            <Pricing />

            {/* 5. FAQ */}
            <FAQ />

            {/* 4. Final CTA */}
            <section className="cta-v3">
                <div className="container">
                    <div className="cta-v3-box">
                        <h2>Ready to grow with Norf?</h2>
                        <div className="cta-actions-v2">
                            <a href="/join" className="btn btn-primary btn-lg">Join as Developer</a>
                            <a href="/partner" className="btn btn-secondary btn-lg">Become a Partner</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
