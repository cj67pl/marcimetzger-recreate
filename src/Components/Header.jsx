
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Phone } from 'lucide-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <a className="brand" href="#home" onClick={closeMenu}>
                <img src={logo} alt="Marci Metzger Homes" className="logo" />
            </a>

            <nav
                className={`main-nav ${menuOpen ? 'is-open' : ''}`}
                aria-label="Main navigation"
            >
                <a href="#home" onClick={closeMenu}>Find a home</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#gallery" onClick={closeMenu}>Gallery</a>
                <a href="#about" onClick={closeMenu}>About Marci</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>

                <a
                    className="contact-button yellow-button mobile-contact-button"
                    href="tel:+12069196886"
                >
                    <Phone size={17} />
                    (206) 919-6886
                </a>
            </nav>

            <a
                className="contact-button yellow-button desktop-contact-button"
                href="tel:+12069196886"
            >
                <Phone size={17} className="phone-icon" />
                (206) 919-6886
            </a>

            <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </button>
        </header>
    );
}

export default Header;
