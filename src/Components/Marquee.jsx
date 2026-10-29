
const phrases = [
    "Pahrump Valley",
    "Mountain views",
    "Golf-course living",
    "Pool & pickleball communities",
    "Residential & commercial",
    "Buyers · sellers · investors",
];

function Marquee() {
    return (
        <section className="mq" aria-label="Areas and real estate services">
            <div className="mq-track" aria-hidden="true">
                {[0, 1].map((copy) => (
                    <div className="mq-group" key={copy}>
                        {phrases.map((phrase, index) => (
                            <div className="mq-item" key={`${copy}-${index}`}>
                                <span className="mq-text">{phrase}</span>

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M7 0 14 7 7 14 0 7z"
                                        fill="#C8A25E"
                                    />
                                </svg>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Marquee;
