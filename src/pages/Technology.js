import "../scss/technology.scss";
import data from "../data.json";
import { useState } from "react";

export default function Technology() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="technology-page">
      <header className="technology-page-title">
        <span>03</span>space launch 101
      </header>
      <section className="technology">
        <nav className="technology-nav">
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 0 ? "active" : "")
            }
            onClick={() => setActiveLink(0)}
          >
            1
          </button>
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 1 ? "active" : "")
            }
            onClick={() => setActiveLink(1)}
          >
            2
          </button>
          <button
            className={
              "technology-nav-link" + " " + (activeLink === 2 ? "active" : "")
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
        <div
          className={
            "technology-img-container" +
            " " +
            (activeLink === 0 ? "launch-vehicle" : "") +
            (activeLink === 1 ? "spaceport" : "") +
            (activeLink === 2 ? "space-capsule" : "")
          }
        ></div>
      </section>
    </div>
  );
}
