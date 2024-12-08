import React from "react";
import "./Home.css";
import hero_video from "../assets/hero_video.mp4";
import HeroSvg from "../assets/IGNUS 25@2x.svg";


const Home = () => {
    return (
        <div>
            <div class="hero-video">
            <video  src={hero_video}autoplay muted loop className="bg-video">

                    {/* <source src={hero_video} /> */}
                    </video>
                <div class="hero-text">
             <img src={HeroSvg} alt="HeroSvg" className="hero-svg" ></img>

                </div>
            </div>
        </div>
    );
}

export default Home;