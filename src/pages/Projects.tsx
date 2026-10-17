import ProjectCard from "../components/projects/ProjectCard";

const personalProjects = [
    {
        title: "ZooFix (In Development)",
        description: "A web application for managing a zoo's animals, enclosures, and much more.",
        technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "React", "TypeScript", "HTML", "CSS", "Docker"],
        challenge: "The challenge of this project is to create a complex web application that allows zookeepers to easily manage and maintain the zoo's animals and enclosures.",
        learning: "I want to learn things about a modular monolithic architecture, and want to refresh my knowledge about C# and ASP.NET Core.",
        githubUrl: "https://github.com/andreaskyndt-student/ZooFix-Personal-Project"
    }
];

const schoolProjects = [
    {
        title: "Adria Weather App",
        description: "A weather application in the future that will provide weather information for the Adriatic region.",
        technologies: ["Vue.js", "JavaScript", "HTML", "CSS", "C#", "Project Planning", "Teamwork"],
        challenge: "The challenge of this project was to have a really good planning phase, before we started the development.",
        learning: "I learned a lot about project planning, working in a team, and how to use Vue.js to create a web application."
    },
    {
        title: "Howestprime Movies/Ticketing",
        description: "A web application for managing movies and purchasing tickets for a cinema.",
        technologies: ["Azure Deployment", "Microservices", "C#", "TypeScript", "Deno", "Docker", "PostgreSQL", "MySQL", "Message Broker"],
        challenge: "The challenge of this project was to create a microservices architecture, and to deploy the application to Azure.",
        learning: "I learned a lot about microservices, cloud deployment, and how to build a scalable web application. I also learned how to work individually."
    },
    {
        title: "Zoo Mobile App",
        description: "A mobile application made for a fictional zoo, that allows users to view/adopt animals, buy tickets, and view their location on the map.",
        technologies: ["Kotlin", "Android Studio", "GeoFencing", "Message Broker"],
        challenge: "The challenge of this project was to create a mobile application that allows users to view/adopt animals, buy tickets, and view their location on the map.",
        learning: "I learned a lot about mobile app development, working with Kotlin, and how to implement location-based features."
    }
];

export default function Projects() {
    return (
        <main className="projects container">
            <header className="projects-header">
                <p className="lead">MY WORK</p>
                <h1>Projects</h1>
                <p className="page-intro">
                    Here you can find a selection of my personal and school projects. 
                    Each project showcases my skills, knowledge, and experience in software development. 
                    I have worked on a variety of projects, ranging from web applications to mobile 
                    applications, and I am always looking for new challenges and 
                    opportunities to learn and grow as a developer.
                </p>
            </header>
            <section className="projects-section">
                <div className="projects-section-heading">
                    <h2>Personal Projects</h2>
                    <p>Projects I've built independently, driven by my own ideas and interests.</p>
                </div>
                <div className="projects-grid">
                    {personalProjects.map((project)  => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>

                <div className="projects-section-heading">
                    <h2>School Projects</h2>
                    <p>Projects I've built as part of my studies, often in collaboration with classmates.</p>
                </div>
                <div className="projects-grid">
                    {schoolProjects.map((project)  => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}