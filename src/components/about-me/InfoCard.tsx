import { useState } from "react";
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
                className="info-card-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <span className="info-card-text">
                    <span className="info-card-icon-box">
                        <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    
                    <span className="info-card-title">{title}</span>

                    {!isExpanded && (
                        <span className="info-card-description">{description}</span>
                    )}
                </span>

                <span className="info-card-expand" aria-hidden="true">
                    {isExpanded ? "-" : "+"}
                </span>
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