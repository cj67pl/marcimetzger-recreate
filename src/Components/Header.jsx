import { useState } from 'react'
import logo from '../assets/logo.png';
import { Phone } from 'lucide-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="site-header">
            <a className="brand" href="/">
                <img src={logo} alt="Marci Metzger" className='logo' />
            </a>

            

            <nav
                className={`main-nav ${menuOpen ? "is-open" : ""}`}
                aria-label="Main navigation"
            >
                <a href="#home" onClick={() => setMenuOpen(false)}>Find a home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About Marci</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>

            <a className="contact-button yellow-button" href="#contact">
                <Phone size={17} strokeWidth={2} className='phone-icon'/>
                (206) 919-6886
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}

export default Header;