import React from 'react';
import './Community.css';

const Community = () => {
    return (
        <section className="section" id="community">
            <div className="container community-grid">
                <div className="community-content">
                    <span className="section-subtitle">The Community</span>
                    <h2 className="section-title">Built on Trust,<br />Fueled by Innovation</h2>
                    <p className="description">
                        Norf for Dev is more than a platform; it's a vetted ecosystem of senior professionals.
                        We prioritize quality over quantity, ensuring every interaction adds value to your career.
                    </p>

                    <ul className="benefits-list">
                        <li>
                            <span className="check-icon">✓</span>
                            <span><strong>Vetted Membership:</strong> Only for confirmed Senior+ Engineers.</span>
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            <span><strong>No Recruiter Spam:</strong> Direct connections to decision makers.</span>
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            <span><strong>Peer Code Reviews:</strong> Get feedback from industry experts.</span>
                        </li>
                    </ul>
                </div>

                <div className="community-visual">
                    <div className="code-block-mockup">
                        <div className="window-controls">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="code-lines">
                            <div className="code-line"><span className="keyword">class</span> <span className="class-name">SeniorDev</span> <span className="keyword">extends</span> <span className="class-name">CommunityMember</span> {'{'}</div>
                            <div className="code-line indent">  <span className="keyword">constructor</span>(experience, stack) {'{'}</div>
                            <div className="code-line indent-2">    <span className="keyword">super</span>(experience);</div>
                            <div className="code-line indent-2">    <span className="this">this</span>.stack = stack;</div>
                            <div className="code-line indent-2">    <span className="this">this</span>.level = <span className="string">'elite'</span>;</div>
                            <div className="code-line indent">  {'}'}</div>
                            <div className="code-line">{'}'}</div>
                        </div>
                    </div>
                    <div className="floating-badge">
                        <span className="badge-icon">🛡️</span>
                        <div>
                            <span className="badge-title">Verified</span>
                            <span className="badge-sub">Senior Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
