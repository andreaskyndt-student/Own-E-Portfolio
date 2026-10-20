import EventCard from "../components/events/EventCard";

const eventsData = [
    {
        title: "Howest StageMarket 2026",
        date: "05/10/2026",
        location: "Howest Kortrijk",
        topics: ["Finding internship", "Networking", "Career Development"],
        description: "Howest StageMarket is an event organized by Howest to help students find internships and job opportunities. It provides a platform for students to connect with potential employers, learn about different companies, and explore career paths.",
        learning: "I learned a lot about networking, career development, and how to present myself to potential employers. I also learned how to make the most out of an event like this, and how to approach companies and ask questions.",
        photos: [
            "src/assets/howest_stagemarkt_picture1.jpg",
            "src/assets/howest_stagemarkt_picture2.jpg",
            "src/assets/howest_stagemarkt_picture3.jpg",
        ]
    }
];

export default function Events() {
    return (
        <main className="events container">
            <header className="events-header">
                <p className="lead">MY EXPERIENCES</p>
                <h1 className="page-title">Events & Experiences</h1>
                <p className="page-intro">
                    An overview of the events I attended, the experiences I gained,
                    and the things I learned along the way. These experiences have helped 
                    shape my skills, knowledge, and perspective in the field of 
                    software development.
                </p>
            </header>
            <section className="events-section">
                <div className="events-grid">
                    {eventsData.map((event) => (
                        <EventCard
                            key={event.title}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            topics={event.topics}
                            description={event.description}
                            learning={event.learning}
                            photos={event.photos}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}