import {Link} from "react-router-dom";

export default function Home() {
    return (
        <section className="home container">
            <p className="lead">WELCOME TO MY PORTFOLIO!</p>

            <h1 className="page-title">
                Hello, my name is <span>Andreas Kyndt.</span>
            </h1>

            <p className="home-description">
                I am a motivated and passionate software developer (student) with a strong
                interest in technology, design, and building innovative digital solutions.
            </p>

            <div className="home-actions">
                <Link to="/projects" className="btn btn-primary">
                    View Projects
                </Link>
                <Link to="/aboutme" className="btn btn-secondary">
                    About Me
                </Link>
            </div>

            <section className="posts container">
                <div className="post how-it-is-built">
                    <h2>How is my portfolio built?</h2>
                    <p>
                        My portfolio is built using React, a JavaScript library for building
                        user interfaces. I used Vite as a build tool to set up the project quickly
                        and efficiently. GitHub Pages is used to host the portfolio, making it
                        easy to share and showcase my work. I use a simple pipeline to build and deploy
                        the portfolio. Every time I push changes to the main branch, the pipeline
                        automatically builds the project and deploys it.
                    </p>
                </div>
            </section>
        </section>
    )
}