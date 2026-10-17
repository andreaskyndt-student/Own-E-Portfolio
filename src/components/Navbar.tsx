import {NavLink} from "react-router-dom";

const links = [
    { to: "/", label: "Home", end:true },
    { to: "/aboutme", label: "About Me" },
    { to: "/projects", label: "Projects" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" }
];

export default function Navbar() {
    return (
        <header className="site-header">
            <nav className="navbar container" aria-label="Main navigation">
                <NavLink to="/" className="brand" aria-label="Homepage">
                    Andreas Kyndt's Portfolio
                </NavLink>

                <div className="nav-links">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    )
}