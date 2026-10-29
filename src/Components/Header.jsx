import logo from '../assets/logo.png';
import { Phone } from 'lucide-react';

function Header() {
    return (
        <header className="site-header">
            <a className="brand" href="/">
                <img src={logo} alt="Marci Metzger" className='logo' />
            </a>

            <nav className="main-nav" aria-label="Main navigation">
                <a href="#home">Find a home</a>
                <a href="#properties">Buy and sell</a>
                <a href="#about">Gallery</a>
                <a href="#contact">About Marci</a>
                <a href="#contact">Contact</a>
            </nav>

            <a className="contact-button yellow-button" href="#contact">
                <Phone size={17} strokeWidth={2} className='phone-icon'/>
                (206) 919-6886
            </a>
        </header>
    )
}

export default Header;