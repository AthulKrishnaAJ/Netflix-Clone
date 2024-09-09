import React from "react";
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import heroBanner from '../../assets/hero_banner.jpg';
import heroTitle from '../../assets/hero_title.png';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';
import TitleCards from "../../Components/TitleCards/TitleCards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home () {

    return (
        <div className="home">
            < Navbar />
            <div className="hero">
                <img src={heroBanner} alt="" className="banner-img"/>
                <div className="hero-caption">
                    <img src={heroTitle} alt="" className="caption-img"/>
                    <p>There is always someone there for you</p>
                    <div className="hero-button">
                        <button className="btn"><img src={playIcon} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={infoIcon} alt="" />More info</button>
                    </div>
                    {/* < TitleCards /> */}
                </div>
            </div>
            <div className="more-cards">
                < TitleCards title={"Blockbuster Movies"}/>
                < TitleCards title={"Only on Netflix"} category={'top_rated'}/>
                < TitleCards title={"Upcoming"} category={'popular'}/>
                < TitleCards title={"Top Pics for You"} category={'upcoming'}/>
            </div>

            < Footer />
        </div>
    )
}


export {
    Home
}