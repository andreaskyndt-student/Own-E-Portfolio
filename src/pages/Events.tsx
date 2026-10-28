import EventCard from "../components/events/EventCard";

import photo1 from "../assets/howest_stagemarkt_picture1.jpg";
import photo2 from "../assets/howest_stagemarkt_picture2.jpg";
import photo3 from "../assets/howest_stagemarkt_picture3.jpg";
import photo4 from "../assets/orbid_event_photo1.jpg";
import photo5 from "../assets/orbid_event_photo2.jpg";
import photo6 from "../assets/orbid_event_photo3.jpg";
import photo7 from "../assets/mythos_event_picture1.jpg";
import photo8 from "../assets/mythos_event_picture2.jpg";
import photo9 from "../assets/mythos_event_picture3.jpg";

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
        date: "22/10/2026",
        location: "O'Leary's Gent",
        topics: ["AI integration", "Software Development", "C#", "Networking", ".NET"],
        description: "The Orbid Young Potentials Classes at O'Leary's in Ghent brought together young software developers to expand their knowledge, gain insights, and exchange experiences with others in the IT sector. The event offered an interesting combination of practical knowledge, and networking opportunities. During the event, I attended the session AI Development in C# (.NET), which focused on the possibilities of artificial intelligence in software development. We gained a better understanding of how Orbid integrates AI into its software solutions, and how this technology can be used to support its clients. An example of this was the garbage collection system in Ghent, which uses AI to let people know immediately why their garbage collection was not successful. The session also highlighted the importance of knowing what you are doing when working with AI, and how to avoid common pitfalls. The session was presented by Wolf Roels, who has been working at Orbid for a few years. With his enthiousiast approach, he managed to keep us engaged throughout the session. After the presentation there was some time to network with fellow students and Orbid employees. Overall, the event was a great opportunity to learn from experts in the field, and to connect with other young software developers.",
        learning: "I learned more about the company Orbid, what they offer to their customers, and how they integrate AI into their software solutions. This helped me understand how Orbid integrates AI into their software solutions, it was really focused on helping their customers. I also learned more about the possibilities of AI in software development, and how to avoid common pitfalls when working with AI. For example AI hallucinations can occur when the prompt is not properly formulated, or when the context is becoming unclear and too long for AI to understand. Additionally, I gained some valuable networking experience, and made some new connections in the IT sector. AI is something that is becoming more and more important in the field of software development, and I am glad this event gave me the opportunity to learn more about how they implement it in their real-world applications.",
        photos: [
            photo4,
            photo5,
            photo6,
        ]
    },
    {
        title: "From Mythos to Open Models",
        date: "27/10/2026",
        location: "Howest Brugge",
        topics: ["AI", "AI Models", "Security Issues", "Networking", "Open Source/Weight Models"],
        description: "The Tech&Meet session “From Mythos to Open Models”, presented by Niels Rogge (Machine Learning Engineer at Hugging Face) and organised by Howest Applied Computer Science, focused on the latest AI models and their ability to identify security vulnerabilities in software. After the session, there was also time to network with other software and AI enthusiasts. One of the most interesting parts of the session was when Niels discussed the hacking incident involving Hugging Face, during which OpenAI’s agents discovered secrets and other issues in Hugging Face’s software. What stood out to me most was how both companies learned from the incident and worked together to understand how it had happened, they also made sure that the outside world knew what had happened. Hugging Face then used one of the millions of open-source models to help ensure that these issues were fixed. So AI can help you both ways, with finding these issues, and solving them. Another memorable moment was hearing about someone who hacked their own Samsung TV using an open-source model. They discovered that the TV sends data about what people watch to around 400 of its partners. Not that good for privacy, right? Overall, the event was truly eye-opening. It inspired me to start my own small project to learn the basics of using Hugging Face and open-source models in my software. I believe that understanding these fundamentals and knowing how to work with these models will become increasingly important in the future.",
        learning: "During this Tech&Meet session, I learned more about the capabilities of modern AI models and how they can be used to identify security vulnerabilities in software. I also gained a better understanding of the role of open-source models and how they can help developers improve software security. One of the most important things I learned was that collaboration is essential when dealing with security issues. The incident involving Hugging Face and OpenAI showed me that even when vulnerabilities are discovered, companies can learn from the situation and work together to find solutions. I also learned that open-source models can be useful tools for identifying and fixing these issues. Another interesting takeaway was that everyday devices, such as smart TVs, can collect and share more data than expected. This made me more aware of the importance of privacy and understanding how technology handles personal data. Finally, I learned that we should not blindly believe everything OpenAI and Anthropic claim. Their models are capable of many impressive things, but some of their claims are also influenced by marketing. It is important to look critically at these claims and understand what the models can actually do.",
        photos: [
            photo7,
            photo8,
            photo9,
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