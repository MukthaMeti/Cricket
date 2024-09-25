import React from "react";
import cricket1 from "../../assests/cricket1.jpg";
import cricket2 from "../../assests/cricket2.jpeg";
import cricket3 from "../../assests/cricket3.jpeg";
import cricket4 from "../../assests/cricket4.jpeg";
import cricket5 from "../../assests/cricket5.jpeg";
import cricket6 from "../../assests/cricket6.jpeg";
import cricket7 from "../../assests/cricket7.jpg";
import "./Cards.css";

const MainCard = () => (
  <div id="home" className="main-card">
    <div className="main-card-image">
      <img src={cricket1} alt="ICC Men's World Cup 2011" />
    </div>
    <div className="main-card-content">
      <h2 className="heading">XYZ ORGANIZATION</h2>
      <p>
      XYZ Organization is a dynamic and passionate sports organization dedicated to the promotion and development of cricket tournaments across various formats. Established with the mission to bring cricket enthusiasts together, XYZ Organization hosts a wide range of tournaments that cater to players of all skill levels, from grassroots amateurs to seasoned professionals.
      </p>
    </div>
  </div>
);

const SubCard = ({ imageSrc, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="sub-card">
    <img src={imageSrc} alt={title + " Image"} />
    <div className="sub-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);

const Cards = () => (
  <div className="card-container">
    <MainCard />

    <h2 id="my-work" className="heading">ABOUT US</h2>
    <div className="sub-card-container">
      <SubCard
        imageSrc={cricket2}
        title="WHO WE ARE"
        description="XYZ Organization is a premier sports entity specializing in organizing cricket tournaments across multiple formats. Our goal is to create a thriving platform for cricket enthusiasts of all skill levels, connecting players, fans, and sponsors in the world of cricket."
        link="https://example.com/indias-first-stint-83"
      />
      <SubCard
        imageSrc={cricket3}
        title="OUR VISION"
        description="With a vision to create a vibrant cricketing community, XYZ Organization organizes events that include T20, One-Day Internationals (ODI), and Test matches, providing a platform for talented cricketers to showcase their skills on a grand stage. The organization's commitment to the sport goes beyond just organizing matches—it fosters sportsmanship, nurtures young talent, and contributes to the overall growth of cricket."
        link="https://example.com/dhoni-finishes-off-2011"
      />
      <SubCard
        imageSrc={cricket4}
        title="OUR GOALS"
        description="XYZ Organization also partners with sponsors, cricket academies, and other stakeholders to bring world-class experiences to fans and players alike. With a focus on fair play, community involvement, and the spirit of the game, XYZ Organization is dedicated to shaping the future of cricket by encouraging participation, competition, and excellence."
        link="https://example.com/india-dream-run"
      />
      <SubCard
        imageSrc={cricket5}
        title="OUR MISSION"
        description="Our mission is to promote the sport of cricket by providing world-class tournament experiences. We aim to foster talent, sportsmanship, and fair play, ensuring that cricket remains an inclusive and celebrated sport."
        link="https://example.com/behind-scenes-india"
      />
      <SubCard
        imageSrc={cricket6}
        title="FOR FANS"
        description="We bring you unforgettable cricketing experiences! Attend live matches or follow the tournaments online to cheer for your favorite teams and players. Get updates, match schedules, and more at your fingertips."
        link="https://example.com/software-jobs-icc"
      />
      <SubCard
        imageSrc={cricket7}
        title="GLOBAL REACH"
        description="Though rooted in local tournaments, XYZ Organization is committed to extending the reach of cricket to a global audience. We organize international tournaments, inviting teams from different countries to compete and bring a truly global flavor to our events.
Relive the unforgettable cricket moments that shaped history."
        link="https://example.com/memorable-cricket-moments"
      />

    </div>
  </div>
);

export default Cards;