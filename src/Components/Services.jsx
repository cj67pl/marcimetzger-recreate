
import { useState } from 'react';
import whiteVilla from '../assets/services/white-villa.jpg'
import table from '../assets/services/table.jpg'
import negotiate from '../assets/services/negotiate.jpg'

const services = {
    Selling: {
        eyebrow: 'SELL YOUR PROPERTY',
        title: 'Get it sold, at the right price.',
        description:
            'Selling a property takes more than putting it on the market. We explore every avenue to reach the right buyers and help you secure the best possible price.',
        points: [
            'Top residential sales for the last five years',
            'Nearly 90 clients helped and $28.5 million closed in 2021',
            'Local market knowledge behind every pricing decision',
        ],
        image: whiteVilla,
    },
    Buying: {
        eyebrow: 'FIND YOUR NEXT HOME',
        title: 'A local guide for buyers.',
        description:
            'Whether you are looking for a home, land, or an investment property, get local guidance to help you find the right fit at the right price.',
        points: [
            'Market analysis for local neighborhoods',
            'Guidance on potential upgrades and improvements',
            'Trusted contractor referrals',
        ],
        image: table,
    },
    Financing: {
        eyebrow: 'PLAN YOUR NEXT MOVE',
        title: 'Affordability, credit and loans, sorted.',
        description:
            'Understand your options and connect with the right professionals as you plan your next real estate move.',
        points: [
            'Introductions to lending professionals',
            'Clear guidance for planning your budget',
            'Support for buyers, sellers, and investors',
        ],
        image: negotiate,
    },
};

function Services() {
    const [activeTab, setActiveTab] = useState('Selling');
    const activeService = services[activeTab];

    return (
        <section className="services-section" id="services">
            <div className="services-heading">
                <p className="section-eyebrow">HOW WE CAN HELP</p>
                <h2>Real estate, made personal.</h2>
                <p>
                    Local knowledge and thoughtful guidance for every step
                    of your real estate journey.
                </p>
            </div>

            <div className="service-tabs" role="tablist" aria-label="Real estate services">
                {Object.keys(services).map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={`service-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="service-content">
                <div className="service-copy">
                    <p className="section-eyebrow">{activeService.eyebrow}</p>
                    <h3>{activeService.title}</h3>
                    <p className="service-description">
                        {activeService.description}
                    </p>

                    <ul className="service-points">
                        {activeService.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>

                    <a className="btn yellow-button" href="#contact">
                        Let's talk
                    </a>
                </div>

                <div className="service-image">
                    <img
                        src={activeService.image}
                        alt={`${activeTab} real estate service`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Services;
