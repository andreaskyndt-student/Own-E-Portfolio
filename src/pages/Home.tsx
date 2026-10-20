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
        </section>
    )
}