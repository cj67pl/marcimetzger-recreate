import marci from '../assets/about/marci.jpg';
import equalhousing from '../assets/about/equalhousing.png';
import pahrumpvalley from '../assets/about/pahrumpvalley.jpeg';
import realtor from '../assets/about/realtor.webp';
import theridge from '../assets/about/theridge.png';

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image">
                    <img
                        src={marci}
                        alt="Marci Metzger"
                    />

                    <div className="floaty" aria-label="Nearly three decades serving Pahrump Valley">
                        <svg
                            className="spin"
                            viewBox="0 0 200 200"
                            aria-hidden="true"
                        >
                            <defs>
                                <path
                                    id="about-circle-path"
                                    d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
                                />
                            </defs>

                            <text
                                fontFamily="Manrope, sans-serif"
                                fontSize="13.5"
                                fontWeight="700"
                                fill="#E8C888"
                            >
                                <textPath
                                    href="#about-circle-path"
                                    textLength="470"
                                    lengthAdjust="spacing"
                                >
                                    NEARLY 3 DECADES · PAHRUMP VALLEY · REALTOR ·
                                </textPath>
                            </text>
                        </svg>

                        <img
                            src={theridge}
                            alt=""
                        />
                    </div>


                    {/* <div className="about-image-caption">
                        <span>YOUR LOCAL REAL ESTATE EXPERT</span>
                        <p>Rooted in Pahrump. Focused on you.</p>
                    </div> */}
                </div>

                <div className="about-content">
                    <p className="section-eyebrow">MEET MARCI METZGER</p>

                    <h2>
                        Real estate is personal.
                        <span> And so is my approach.</span>
                    </h2>

                    <p>
                        Marci Metzger leads The Ridge Realty Group from Pahrump.
                        She lives and works in the community she serves, so her
                        advice on pricing, neighborhoods and timing comes from
                        everyday experience, not guesswork.
                    </p>

                    <p>
                        Her promise is simple: every avenue explored to get you
                        the right home, or the right price.
                    </p>

                    <a href="#contact" className="btn yellow-button">
                        Get to know Marci
                    </a>

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
        </section>
    );
}

export default About;
