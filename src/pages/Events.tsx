import EventCard from "../components/events/EventCard";

import photo1 from "../assets/howest_stagemarkt_picture1.jpg";
import photo2 from "../assets/howest_stagemarkt_picture2.jpg";
import photo3 from "../assets/howest_stagemarkt_picture3.jpg";
import photo4 from "../assets/orbid_event_photo1.jpg";
import photo5 from "../assets/orbid_event_photo2.jpg";
import photo6 from "../assets/orbid_event_photo3.jpg";

const eventsData = [
    {
        title: "Howest StageMarket 2026",
        date: "05/10/2026",
        location: "Howest Kortrijk",
        topics: ["Finding internship", "Networking", "Career Development"],
        description: "Howest StageMarket is an event organized by Howest to help students find internships and job opportunities. It provides a platform for students to connect with potential employers, learn about different companies, and explore career paths.",
        learning: "I learned a lot about networking, career development, and how to present myself to potential employers. I also learned how to make the most out of an event like this, and how to approach companies and ask questions.",
        photos: [
            photo1,
            photo2,
            photo3,
        ]
    },
    {
        title: "Orbid Young Potentials Classes",
        date: "22/10/2025",
        location: "O'Leary's Gent",
        topics: ["AI integration", "Software Development", "C#", "Networking", ".NET"],
        description: "The Orbid Young Potentials Classes at O'Leary's in Ghent brought together young software developers to expand their knowledge, gain insights, and exchange experiences with others in the IT sector. The event offered an interesting combination of practical knowledge, and networking opportunities. During the event, I attended the session AI Development in C# (.NET), which focused on the possibilities of artificial intelligence in software development. We gained a better understanding of how Orbid integrates AI into its software solutions, and how this technology can be used to support its clients. An example of this was the garbage collection system in Ghent, which uses AI to let people know immediately why their garbage collection was not successful. The session also highlighted the importance of knowing what you are doing when working with AI, and how to avoid common pitfalls. The session was presented by Wolf Roels, who has been working at Orbid for a few years. With his enthiousiast approach, he managed to keep us engaged throughout the session. After the presentation there was some time to network with fellow students and Orbid employees. Overall, the event was a great opportunity to learn from experts in the field, and to connect with other young software developers.",
        learning: "I learned more about the company Orbid, what they offer to their customers, and how they integrate AI into their software solutions. This helped me understand how Orbid integrates AI into their software solutions, it was really focused on helping their customers. I also learned more about the possibilities of AI in software development, and how to avoid common pitfalls when working with AI. For example AI hallucinations can occur when the prompt is not properly formulated, or when the context is becoming unclear and too long for AI to understand. Additionally, I gained some valuable networking experience, and made some new connections in the IT sector. AI is something that is becoming more and more important in the field of software development, and I am glad this event gave me the opportunity to learn more about how they implement it in their real-world applications.",
        photos: [
            photo4,
            photo5,
            photo6,
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