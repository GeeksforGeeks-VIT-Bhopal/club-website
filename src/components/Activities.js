export default function Activities() {
    const activities = [
        {
            icon: "⚡",
            title: "Hackathons",
            desc: "Intense 24-hour building sessions where teams prototype, code, and pitch innovative solutions.",
        },
        {
            icon: "📚",
            title: "Workshops",
            desc: "Hands-on sessions on DSA, web dev, AI/ML, and more — led by peers and industry mentors.",
        },
        {
            icon: "🏆",
            title: "Coding Contests",
            desc: "Competitive programming events to sharpen problem-solving skills and climb leaderboards.",
        },
        {
            icon: "🎉",
            title: "Fun Events",
            desc: "Tech quizzes, game nights, and social meetups — because community is more than just code.",
        },
    ];

    return (
        <section id="activities" className="section activities-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Do</h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        From competitive coding to creative hacking
                    </p>
                </div>
                <div className="activities-grid">
                    {activities.map((item) => (
                        <div className="activity-card" key={item.title}>
                            <div className="activity-icon">{item.icon}</div>
                            <h3 className="activity-title">{item.title}</h3>
                            <p className="activity-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
