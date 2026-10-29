
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Buying a home',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        
        console.log('Contact form submitted:', formData);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <p className="section-eyebrow">LET'S CONNECT</p>

                    <h2>
                        Let's talk about
                        <span> your next move.</span>
                    </h2>

                    <p className="contact-intro">
                        Have a question about buying or selling in Pahrump?
                        Reach out and let's start a conversation.
                    </p>

                    <div className="contact-details">
                        <a href="tel:+12069196886" className="contact-detail">
                            <span className="contact-icon">
                                <Phone size={20} />
                            </span>
                            <span>
                                <small>GIVE US A CALL</small>
                                <strong>(206) 919-6886</strong>
                            </span>
                            <ArrowUpRight size={18} className="contact-arrow" />
                        </a>

                        <div className="contact-detail">
                            <span className="contact-icon">
                                <MapPin size={20} />
                            </span>
                            <span>
                                <small>VISIT OUR OFFICE</small>
                                <strong>The Ridge Realty Group</strong>
                                <span>3190 HW-160, Suite F</span>
                                <span>Pahrump, Nevada 89048</span>
                            </span>
                        </div>

                        <div className="contact-detail">
                            <span className="contact-icon">
                                <Clock size={20} />
                            </span>
                            <span>
                                <small>OFFICE HOURS</small>
                                <strong>Open daily</strong>
                                <span>8:00 AM – 7:00 PM</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    <p className="section-eyebrow">SEND A MESSAGE</p>
                    <h3>How can we help?</h3>
                    <p className="form-intro">
                        Tell us a little about what you're looking for.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="contact-form-grid">
                            <div className="contact-field">
                                <label htmlFor="contact-name">Full name *</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email address *</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-phone">Phone number</label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    autoComplete="tel"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-interest">I'm interested in</label>
                                <select
                                    id="contact-interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                >
                                    <option>Buying a home</option>
                                    <option>Selling a property</option>
                                    <option>Investment property</option>
                                    <option>Other questions</option>
                                </select>
                            </div>

                            <div className="contact-field contact-field-full">
                                <label htmlFor="contact-message">Message *</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    rows={5}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn yellow-button contact-submit">
                            Send message <ArrowUpRight size={18} />
                        </button>

                        <p className="form-note">
                            Your information will be used to respond to your inquiry.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
