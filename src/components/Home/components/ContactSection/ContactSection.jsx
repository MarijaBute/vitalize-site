import './contactsection.css';

export default function ContactSection() {
    return (
        <div className="contact-section">
            <div className="contact-section-wrapper">
                <h4 className="contact-section-subheading">Contact</h4>
                <h4 className="contact-section-heading">Let’s get in touch</h4>
                <p className="contact-section-paragraph">Start your healthy journey today.</p>
                <div className="contact-section-button">
                    <button className="contact-section-btn">Book a consultation</button>
                </div>
                <a href="/" className="contact-section-link">email us</a>
            </div>
        </div>
    );
}