import logo from '../assets/logo-white.png';
import equalhousing from '../assets/about/equal-housing-opportunity-white.png';
import pahrumpvalley from '../assets/about/pahrumpvalley.jpeg';
import realtor from '../assets/about/realtor.webp';
import theridge from '../assets/about/theridge.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYelp,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <img
                                src={logo}
                                alt="Marci Metzger Homes"
                                loading="lazy"
                            />
                        </a>

                        <p>
                            Local knowledge. Personal service.
                            Your next chapter starts in Pahrump Valley.
                        </p>
                        <div className="social-links">
                            <a href="https://web.facebook.com/MarciHomes/?_rdc=1&_rdr#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/marcimetzger_theridge/" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/marci-metzger-30642496/" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" aria-label="Yelp">
                                <FontAwesomeIcon icon={faYelp} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Explore</h3>
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#about">About Marci</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-contact">
                        <h3>Get in touch</h3>
                        <a href="tel:+12069196886">(206) 919-6886</a>
                        <p>The Ridge Realty Group</p>
                        <p>3190 HW-160, Suite F</p>
                        <p>Pahrump, Nevada 89048</p>
                        <a href="#contact" className="footer-contact-link">
                            Start a conversation ↗
                        </a>
                    </div>

                    <div className="footer-hours">
                        <h3>Office hours</h3>
                        <p>Open daily</p>
                        <p>8:00 AM – 7:00 PM</p>

                        <div className="about-logos">
                            <img
                                src={theridge}
                                alt="The Ridge Realty Group"
                            />
                            <img
                                src={equalhousing}
                                alt="Local chamber organization"
                            />
                            <img
                                src={pahrumpvalley}
                                alt="Pahrump Valley"
                            />
                            <img
                                src={realtor}
                                alt="The Realtor"
                            />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Marci Metzger Homes.
                        All rights reserved.
                    </p>

                    <a href="#home">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
