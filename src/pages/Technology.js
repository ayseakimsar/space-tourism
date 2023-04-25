import "../scss/technology.scss";
import data from "../data.json";
import { useState } from "react";
import launchVehicleImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportImg from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";

export default function Technology() {
  const [activeLink, setActiveLink] = useState(0);
  let currentImg;
  if (activeLink === 0) {
    currentImg = launchVehicleImg;
  } else if (activeLink === 1) {
    currentImg = spaceportImg;
  } else if (activeLink === 2) {
    currentImg = spaceCapsuleImg;
  }

  return (
    <div className="technology-page">
      <header className="destination-page-title">
        <span>01</span>pick your destination
      </header>
      <section className="technology">
        <nav className="technology-nav">
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 0 ? "active" : null)
            }
            onClick={() => setActiveLink(0)}
          >
            1
          </button>
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 1 ? "active" : null)
            }
            onClick={() => setActiveLink(1)}
          >
            2
          </button>
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 2 ? "active" : null)
            }
            onClick={() => setActiveLink(2)}
          >
            3
          </button>
        </nav>
        <div className="technology-info">
          <div className="technology-intro-title">the terminology...</div>
          <div className="technology-main-title">
            {data.technology[activeLink].name}
          </div>
          <div className="technology-text">
            {data.technology[activeLink].description}
          </div>
        </div>
        <img
          className="technology-img"
          src={currentImg}
          alt={data.technology[activeLink].name}
        />
      </section>
    </div>
  );
}
