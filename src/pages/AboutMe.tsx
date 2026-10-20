import InfoCard from "../components/about-me/InfoCard";
import {
    GraduationCap,
    Brain,
    Hammer,
    Volleyball,
} from "lucide-react";

export default function AboutMe() {
    return (
        <section className="about-me container">
            <p className="lead">WHO AM I?</p>

            <h1 className="page-title">About Me</h1>

            <p className="page-intro">
                I am Andreas Kyndt, a motivated last year student in the field of software
                development. My interests lie in the architecture and design of software
                systems, front-end development, and back-end development.
            </p>

            <div className="info-grid">
                <InfoCard
                    title="Education"
                    description="If you open this card, you will find information about 
                    my educational background."
                    details={[
                        "My first experience in the IT sector was during secondary school, where I chose the IT Management programme in my fourth year.",

                        "During this time, I took my first steps into programming, primarily using Java and PHP, while also gaining some basic knowledge of Python.",

                        "I decided to continue my studies in Applied Computer Science at Howest Brugge.",

                        "During this programme, I learned to work with many new programming languages and development tools. Beyond the technical skills, I also gained valuable experience working in a team and preparing projects during the planning phase."
                    ]}
                    icon={GraduationCap}
                />

                <InfoCard
                    title="Skills & Knowledge"
                    description="If you open this card, you will find information about
                    my technical skills and knowledge."
                    details={[
                        "I have experience with a variety of programming languages, including Python, Java, C#, JavaScript, Typescript, and PHP.",

                        "The knowledge of the Javascript frameworks React and Vue.js is also part of my skill set. The same applies for HTML and CSS, which I have used in many projects.",

                        "I am also familiar with database management systems such as MySQL, PostgreSQL, MongoDB, and Redis.",

                        "Some of the development tools I used include GitHub, GitLab, Docker, and Postman. I also have experience with CI/CD pipelines and the cloud platform Azure."
                    ]}
                    icon={Brain}
                />

                <InfoCard
                    title="Hobbies & Free Time"
                    description="If you open this card, you will find information about
                    my hobbies and how I spend my free time."
                    details={[
                        "I have experience as a volunteer in the youth movement Chiro (four years). During this time, I learned to work in a team and take on responsibilities.",

                        "Another hobby of mine is playing football. I have been playing football since I was six years old, and have been a member of the club FC Veldegem since then.",

                        "In my free time, I like to work on my own personal projects, such as developing a zoo management system (ZooFix) and I like to read, and play video games. I also enjoy spending time with my friends and family."
                    ]}
                    icon={Volleyball}
                />

                <InfoCard
                    title="Work Experience"
                    description="If you open this card, you will find information about
                    my work experience and the different (student) jobs I have had."
                    details={[
                        "My first work experience was in the Carrefour supermarket, where I worked as a cashier and in the warehouse. This experience taught me to work in a team and to communicate effectively with customers.",

                        "I also worked as a student for Bpost, where I have to help customers with their parcels and letters. This experience taught me to work under pressure and to be flexible.",

                        "Another work experience I had was in the technical department of the company ICO, where I worked as a student. This experience taught me to work with my hands and to solve problems independently.",

                        "I also did a small internship (three weeks) at the company ICO, this was in the IT department. During this internship, I learned about server management, network configuration, and IT security."
                    ]}
                    icon={Hammer}
                />
            </div>
        </section>
    )
}