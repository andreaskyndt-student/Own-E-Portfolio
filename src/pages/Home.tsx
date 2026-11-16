import profilePhoto from "../assets/download.jpg";

export default function Home() {
    return (
        <section id="home" className="home container">
            <div className="home-hero">
                <div className="home-copy">
                    <p className="lead">WELCOME TO MY PORTFOLIO!</p>

                    <h1 className="page-title">
                        Hello, my name is <span>Andreas Kyndt.</span>
                    </h1>

                    <p className="home-description">
                        I am a motivated and passionate software developer (student) with a strong
                        interest in technology, design, and building innovative digital solutions.
                    </p>

                    <div className="home-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#aboutme" className="btn btn-secondary">
                            About Me
                        </a>
                    </div>
                </div>

                <aside className="legend-post" aria-labelledby="legend-title">
                    <div className="photo-post-it">
                        <img src={profilePhoto} alt="Andreas Kyndt" />
                    </div>
                    <h2 id="legend-title">Legend of the site</h2>
                    <ul>
                        <li><span className="legend-swatch legend-swatch--purple" aria-hidden="true" />Posts</li>
                        <li><span className="legend-swatch legend-swatch--green" aria-hidden="true" />Something about myself</li>
                        <li><span className="legend-swatch legend-swatch--blue" aria-hidden="true" />Projects I built</li>
                        <li><span className="legend-swatch legend-swatch--orange" aria-hidden="true" />Events I attended</li>
                        <li><span className="legend-swatch legend-swatch--yellow" aria-hidden="true" />Contact info</li>
                    </ul>
                </aside>
            </div>

            <section className="posts container">
                <div className="post how-it-is-built">
                    <h2>How is my portfolio built?</h2>
                    <p>
                        My portfolio is built using React, a JavaScript library for building
                        user interfaces. I used Vite as a build tool to set up the project quickly
                        and efficiently. Cloudflare Pages is used to host the portfolio, making it
                        easy to share and showcase my work. It is really easy to connect your GitHub
                        repository to a Cloudflare Pages site. Every time I push changes to the 
                        main branch of my GitHub repository, Cloudflare Pages automatically rebuilds and deploys 
                        the site, ensuring that the latest version is always live.
                    </p>
                </div>
                <div className="post why-event-storming">
                    <h2>Why is the website based on event storming?</h2>
                    <p>You can see the different post-its used in this website, each with a
                        different color. In a lesson from my domain-driven design course, we 
                        used a technique called event storming to visualize
                        the different events and processes of a system. It was a really fun and
                        engaging way to learn about the core of the system. This is why I wanted
                        to use this technique in my portfolio. Each color has its own meaning, but
                        it is explained in the legend of the website.
                    </p>
                </div>
                <div className="post what-am-i-doing-currently">
                    <h2>What am I doing currently?</h2>
                    <p>
                        I am currently working on two personal projects. The first one is a zoo
                        management system (ZooFix), and the second one is a speach-to-summary application
                        (Recap), where I learn how to use open-source AI models to summarize text.
                    </p>
                </div>
            </section>
        </section>
    )
}
