import './header.css';
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-logo">
                            <span>♡ </span>Vitalize
                        </div>
                <div className="header-links">
                    <p>About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div className="header-socials">
                    <SlSocialInstagram size={18} />
                    <SlSocialLinkedin size={18} />
                    <SlSocialFacebook size={18} />
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}>
                    {isOpen ? <IoMdClose /> : <CgMenuRight />}
                </div>
            </div>

            {isOpen && (
                <div className={`mobile-menu-wrapper ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-header">
                        <div className="header-logo">
                            <span>♡ </span>Vitalize
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}>
                            {isOpen ? <IoMdClose /> : <CgMenuRight />}
                        </div>
                    </div>

                    <div className="mobile-header-links">
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>

            
                    <div className="mobile-header-socials">
                        <SlSocialInstagram size={18} />
                        <SlSocialLinkedin size={18} />
                        <SlSocialFacebook size={18} />
                    </div>
                </div>
            )}
        </header>
    );
}