import React from "react";
import { Link, Element } from "react-scroll";  // Import from react-scroll
import "./Home.css";
import hero_video from "../assets/hero_video.mp4";
import HeroSvg from "../assets/IGNUS 25@2x.svg";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-video">
                <video src={hero_video} autoPlay muted loop className="bg-video" />
                <div className="hero-text">
                    <img src={HeroSvg} alt="HeroSvg" className="hero-svg" />
                </div>
            </section>

            {/* Smooth Scroll Links */}
            <nav>
                <ul>
                    <li>
                        <Link to="about-us" smooth={true} duration={500}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="theme" smooth={true} duration={500}>
                            Theme
                        </Link>
                    </li>
                    <li>
                        <Link to="stats" smooth={true} duration={500}>
                            Stats
                        </Link>
                    </li>
                    <li>
                        <Link to="prakriti" smooth={true} duration={500}>
                            Prakriti
                        </Link>
                    </li>
                    <li>
                        <Link to="contact-us" smooth={true} duration={500}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* About Us Section */}
            <Element name="about-us">
                <section id="about-us" className="scroll-section">
                    <div className="section-content">
                        <h2>About Us</h2>
                        <p>Learn more about who we are and what we do.</p>
                    </div>
                </section>
            </Element>

            {/* Other Sections */}
            <Element name="theme">
                <section id="theme" className="scroll-section">
                    <div className="section-content">
                        <h2>Our Theme</h2>
                        <p>Discover the core theme of this event.</p>
                    </div>
                </section>
            </Element>

            <Element name="stats">
                <section id="stats" className="scroll-section">
                    <div className="section-content">
                        <h2>Our Stats</h2>
                        <p>See the key stats of our event’s success.</p>
                    </div>
                </section>
            </Element>

            <Element name="prakriti">
                <section id="prakriti" className="scroll-section">
                    <div className="section-content">
                        <h2>Prakriti</h2>
                        <p>Our focus on sustainability and nature.</p>
                    </div>
                </section>
            </Element>

            <Element name="contact-us">
                <section id="contact-us" className="scroll-section">
                    <div className="section-content">
                        <h2>Contact Us</h2>
                        <p>Get in touch for more information.</p>
                    </div>
                </section>
            </Element>
        </div>
    );
};

export default Home;
