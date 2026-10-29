import cta from '../assets/cta.jpg'
function CallToAction() {
    return (
        <section className="cta-section" aria-labelledby="cta-title">
            <div className="cta-background">
                <img
                    src={cta}
                    alt=""
                    loading="lazy"
                />
            </div>

            <div className="cta-overlay"></div>

            <div className="cta-content">
                <p className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>

                <h2 id="cta-title">Ready to make your move?</h2>

                <p>
                    Whether you're buying, selling, or exploring your options,
                    let's talk about what's next.
                </p>

                <a href="#contact" className="btn yellow-button">
                    Let's get started
                </a>
            </div>
        </section>
    );
}

export default CallToAction;
