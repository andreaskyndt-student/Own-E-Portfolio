import { useEffect, useState } from "react";

const links = [
    { to: "#home", label: "Home" },
    { to: "#aboutme", label: "About Me" },
    { to: "#projects", label: "Projects" },
    { to: "#events", label: "Events" },
    { to: "#contact", label: "Contact" }
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const updateActiveSection = () => {
            const marker = window.scrollY + window.innerHeight * 0.35;
            let current = "home";

            for (const link of links) {
                const section = document.getElementById(link.to.slice(1));
                if (section && section.offsetTop <= marker) {
                    current = section.id;
                }
            }

            setActiveSection(current);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.to}
                            href={link.to}
                            className={`nav-link ${activeSection === link.to.slice(1) ? "active" : ""}`}
                            aria-current={activeSection === link.to.slice(1) ? "location" : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
