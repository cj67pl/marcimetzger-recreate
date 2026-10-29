function TrackRecord() {
    return (
        <section aria-label="Track Record" className="track-record">
            <svg
                className="ridge"
                viewBox="0 0 1440 160"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,140 L120,90 L190,115 L330,40 L430,100 L520,70 L650,130 L780,60 L900,110 L1010,30 L1130,105 L1250,70 L1340,100 L1440,60"
                    fill="none"
                    stroke="#D4AE62"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>

            <div className="data-wrapper">
                <div className="data-cont">
                    <span className="disp">
                        <span className="cn c3" role="img" aria-label="About 3 decades" />
                    </span>
                    <span className="track-desc">
                        Serving buyers and sellers as a Realtor
                    </span>
                </div>

                <div className="data-cont">
                    <span className="disp">
                        <span className="cn c90" role="img" aria-label="About 90 clients" />
                    </span>
                    <span className="track-desc">
                        Clients helped in 2021
                    </span>
                </div>

                <div className="data-cont">
                    <span className="disp">
                        <span className="cn c28" role="img" aria-label="28.5 million dollars" />
                    </span>
                    <span className="track-desc">
                        In sales closed in 2021
                    </span>
                </div>

                <div className="data-cont">
                    <span className="disp">
                        <span className="cn c-rank">Top 5-yr</span>
                    </span>
                    <span className="track-desc">
                        Residential sales ranking, last five years
                    </span>
                </div>
            </div>
        </section>
    );
}

export default TrackRecord;