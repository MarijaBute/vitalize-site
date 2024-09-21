import './header.css'
import { Link } from "react-router-dom"
import { CgMenuRight } from "react-icons/cg";


export default function Header() {
    return(
        <header>
            <div className="site-header">
                <div className="header-wrapper">
                    <div className="header-logo">
                    ♡ Vitalize
                    </div>

                    <div className="header-links">
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>

                    <div className="header-socials">
                        socials
                    </div>

                    <div className="mobile-menu"><CgMenuRight /></div>
                </div>
            </div>
        </header>
    )
}