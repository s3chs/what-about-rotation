import './style.scss';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div
                    className="hero-text"
                    data-scroll
                    data-scroll-speed="1.5"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    <p>what</p>
                </div>
                <div
                    className="hero-text"
                    data-scroll
                    data-scroll-speed="-1.3"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    <p>about</p>
                </div>
                <div className="hero-text">
                    <span data-scroll data-scroll-speed="2.3" data-scroll-delay="0.1" data-scroll-position="top">r</span>
                    <span data-scroll data-scroll-speed="0.7" data-scroll-delay="0.035" data-scroll-position="top">o</span>
                    <span data-scroll data-scroll-speed="1" data-scroll-delay="0.1" data-scroll-position="top">t</span>
                    <span data-scroll data-scroll-speed="2.5" data-scroll-delay="0.4" data-scroll-position="top">a</span>
                    <span data-scroll data-scroll-speed="2" data-scroll-delay="0.2" data-scroll-position="top">t</span>
                    <span data-scroll data-scroll-speed="0.9" data-scroll-delay="0.7" data-scroll-position="top">i</span>
                    <span data-scroll data-scroll-speed="0.7" data-scroll-delay="" data-scroll-position="top">o</span>
                    <span data-scroll data-scroll-speed="1" data-scroll-delay="0.085" data-scroll-position="top">n</span>
                    <span data-scroll data-scroll-speed="2.2" data-scroll-delay="0.035" data-scroll-position="top">?</span>
                </div>
                <div className="hero-details">
                    <p data-scroll data-scroll-speed="4" data-scroll-delay="0.8">a lambda project</p>
                </div>
                <div
                    className="hero-visual"
                    data-scroll
                    data-scroll-delay="0.7"
                    data-scroll-speed="2"
                >
                </div>
            </div>
            <a
                className="arrow-btn"
                data-scroll data-scroll-speed="2"
                data-scroll-direction="vertical"
                data-scroll-position="top"
            >
                <div className="long-arrow-left"></div>
                <div className="long-arrow-left-overlay">
                </div>
            </a>
        </div>
    );
}
