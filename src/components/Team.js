import { teamMembers } from "@/data/team";

export default function Team() {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Team</h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        The people behind the chapter
                    </p>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, i) => (
                        <div className="team-card" key={i}>
                            <div className="team-avatar">{member.initial}</div>
                            <div className="team-name">{member.name}</div>
                            <div className="team-role">{member.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
