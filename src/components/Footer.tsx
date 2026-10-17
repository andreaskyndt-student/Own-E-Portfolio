export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container footer-content">
                <p>© {new Date().getFullYear()} Andreas Kyndt's Portfolio</p>

                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/andreas-kyndt/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-button"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9h2.97v9.34ZM6.45 7.72a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.62h-2.97v-4.55c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.63H9.15V9h2.85v1.28h.04c.4-.74 1.37-1.51 2.82-1.51 3.01 0 3.57 1.98 3.57 4.55v5.02Z" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/andreaskyndt-student"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-button"
                        aria-label="Visit my GitHub profile"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.2 3.23 1.68.1-.71.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.09 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}