import './footer.css';

export default function Footer() {
    return(
        <footer>
            <div className="footer-wrapper">
                <div className="footer-sections">
                    <div className="footer-section">
                        <h4 className="footer-heading">♡ Vitalize</h4>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul>
                            <li>Book a consultation</li>
                            <li>vitalize@contact.com</li>
                            <li>+123 456 789</li>
                            <li>socials</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Join our newsletter!</h4>
                        <input type="email" placeholder='name@email.com' className='input-email'/>
                        <div className="footer-button">
                        <button className='footer-btn'>Join</button>
                        </div>
                    </div>
                </div>

                <h6 className="copyright">© 2024. All rights reserved to Marija Buteska.</h6>
            </div>
        </footer>
    )
}