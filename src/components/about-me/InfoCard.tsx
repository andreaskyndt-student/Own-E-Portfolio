import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
    title: string;
    description: string;
    details: string[];
    icon: LucideIcon;
};

export default function InfoCard({
    title,
    description,
    details,
    icon: Icon
}: InfoCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className={`info-card ${isExpanded ? "expanded" : ""}`}>
            <button
                type="button"
                className="info-card-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <span className="info-card-main">
                    <span className="info-card-icon-box">
                        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="info-card-heading">
                        <span className="info-card-title">{title}</span>
                        <span className="info-card-description">{description}</span>
                    </span>
                </span>

                <ChevronDown
                    size={20}
                    className={`project-card-chevron ${isExpanded ? "rotated" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {isExpanded && (
                <div className="info-card-details">
                    {details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
            )}
        </article>
    )
}
