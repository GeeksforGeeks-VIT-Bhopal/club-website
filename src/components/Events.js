import { events } from "@/data/events";

export default function Events() {
    return (
        <section id="events" className="section events-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Events</h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        What&apos;s happening and what&apos;s next
                    </p>
                </div>
                {events.length > 0 ? (
                    <div className="events-list">
                        {events.map((event, i) => (
                            <div className="event-card" key={i}>
                                <div className="event-date-badge">📅 {event.date}</div>
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <div className="event-status">
                                        <span className="event-status-dot" />
                                        {event.status === "upcoming"
                                            ? "Upcoming"
                                            : event.status === "ongoing"
                                                ? "Happening Now"
                                                : "Completed"}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="events-empty">
                        <div className="events-empty-icon">📭</div>
                        <p>No events scheduled yet. Stay tuned!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
