import { ChevronDown, Code2 } from "lucide-react";
import { useState } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    challenge: string;
    learning: string;
    githubUrl?: string;
};

export default function ProjectCard({
    title,
    description,
    technologies,
    challenge,
    learning,
    githubUrl
}: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className={`project-card ${isExpanded ? "expanded" : ""}`}>
            <button
                type="button"
                className="project-card-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <span className="project-card-main">
                    <span className="project-card-icon">
                        <Code2 size={24} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="project-card-heading">
                        <span className="project-card-title">{title}</span>
                        <span className="project-card-description">{description}</span>
                    </span>
                </span>
                <ChevronDown
                    size={20}
                    className={`project-card-chevron ${isExpanded ? "rotated" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {isExpanded && (
                <div className="project-card-details">
                    <div className="project-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="project-tag">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="project-detail-section">
                        <h3>The challenge</h3>
                        <p>{challenge}</p>
                    </div>

                    <div className="project-detail-section">
                        <h3>What I learned</h3>
                        <p>{learning}</p>
                    </div>

                    {githubUrl && (
                        <a
                            className="project-github-link"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub <span aria-hidden="true">→</span>
                        </a>
                    )}
                </div>
            )}
        </article>       
    )
}