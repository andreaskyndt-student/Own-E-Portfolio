import { Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section className="contact container">
            <p className="lead">GET IN TOUCH WITH ME!</p>

            <h1>Contact</h1>

            <p className="page-intro">
                If you have any questions, suggestions, or would like to collaborate on a 
                project, feel free to reach out to me. I am always open to new 
                opportunities and connections.
            </p>

            <div className="contact-details">
                <div className="contact-item">
                    <div className="contact-icon">
                        <Phone size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                        <h2>Phone</h2>
                        <p>+32 472 78 01 32</p>
                    </div>
                    </div>

                    <div className="contact-item">
                    <div className="contact-icon">
                        <Mail size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>andreas.kyndt@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}