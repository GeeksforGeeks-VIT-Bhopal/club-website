export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Us</h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        Who we are and what drives us
                    </p>
                </div>
                <p className="about-body">
                    GeeksforGeeks Student Chapter at VIT Bhopal is a student-run
                    community dedicated to computer science, programming, and
                    technology. We organise hackathons, coding contests, workshops,
                    and technical sessions — creating a space where curious minds can
                    learn, collaborate, and build real skills that matter.
                </p>
                <div className="about-highlights">
                    <div className="highlight-item">
                        <div className="highlight-icon">💻</div>
                        <div className="highlight-title">Learn by Doing</div>
                        <div className="highlight-desc">
                            Hands-on workshops, live coding, and project-based learning
                        </div>
                    </div>
                    <div className="highlight-item">
                        <div className="highlight-icon">🤝</div>
                        <div className="highlight-title">Community First</div>
                        <div className="highlight-desc">
                            Peer mentorship, study groups, and a supportive network
                        </div>
                    </div>
                    <div className="highlight-item">
                        <div className="highlight-icon">🚀</div>
                        <div className="highlight-title">Build & Ship</div>
                        <div className="highlight-desc">
                            From idea to deployment — we help you ship real projects
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
