import { useState } from "react";
import { ChevronDown } from "lucide-react";

type EventCardProps = {
    title: string;
    date: string;
    location: string;
    topics: string[];
    description: string;
    learning: string;
    photos: string[];
};

export default function EventCard({
    title,
    date,
    location,
    topics,
    description,
    learning,
    photos
} : EventCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className={`event-card ${isExpanded ? "expanded" : ""}`}>
            <button
                type="button"
                className="event-card-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <div className="event-card-heading">
                    <div>
                        <p className="event-date">{date}</p>
                        <h2>{title}</h2>
                        <p className="event-location">
                            <span aria-hidden="true">⌖</span> {location}
                        </p>
                    </div>

                    <ChevronDown
                        size={20}
                        className={`project-card-chevron ${isExpanded ? "rotated" : ""}`}
                        aria-hidden="true"
                    />
                </div>

                <div className="event-topics">
                    {topics.map((topic) => (
                        <span className="event-topic" key={topic}>
                            {topic}
                        </span>
                    ))}
                </div>
            </button>

            {isExpanded && (
                <div className="event-details">
                    <section className="event-detail-section">
                        <h3>About the event</h3>
                        <p>{description}</p>
                    </section>

                    <section className="event-detail-section">
                        <h3>What I learned</h3>
                        <p>{learning}</p>
                    </section>

                    {photos.length > 0 && (
                        <section className="event-detail-section">
                            <h3>Photo gallery</h3>

                            <div className="event-gallery">
                                {photos.map((photo, index) => (
                                    <img
                                        key={photo}
                                        src={photo}
                                        alt={`${title} - gallery photo ${index + 1}`}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            )}
        </article>
    );
}

