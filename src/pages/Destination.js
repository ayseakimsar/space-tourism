import { useState } from "react";
import "../scss/destination.scss";
import data from "../data.json";

export default function Destination() {
  const [active, setActive] = useState("moon");
  const destination =
    data.destinations.find((destination) => destination.name === active) ||
    data.destinations[0];

  return (
    <div className="destination-page">
      <header className="destination-page-title">
        <span>01</span>pick your destination
      </header>
      <nav className="destination-nav">
        <button
          className={
            "destination-nav-link" +
            " " +
            (active.toLowerCase() === "moon" ? "active" : null)
          }
          onClick={() => setActive("Moon")}
        >
          moon
        </button>
        <button
          className={
            "destination-nav-link" +
            " " +
            (active.toLowerCase() === "mars" ? "active" : null)
          }
          onClick={() => setActive("Mars")}
        >
          mars
        </button>
        <button
          className={
            "destination-nav-link" +
            " " +
            (active.toLowerCase() === "europa" ? "active" : null)
          }
          onClick={() => setActive("Europa")}
        >
          europa
        </button>
        <button
          className={
            "destination-nav-link" +
            " " +
            (active.toLowerCase() === "titan" ? "active" : null)
          }
          onClick={() => setActive("Titan")}
        >
          titan
        </button>
      </nav>
      <section className="destination-section">
        <img
          src={require(`../assets/destination/image-${active.toLowerCase()}.png`)}
          alt={destination.name}
        />
        <div className="destination-info">
          <div className="destination-title">{destination.name}</div>
          <div className="destination-text">{destination.description}</div>
          <div className="destination-divider"></div>
          <div className="destination-stats">
            <div className="destination-distance">
              <div className="destination-distance-text">avg. distance</div>
              <div className="destination-distance-value">
                {destination.distance}
              </div>
            </div>
            <div className="destination-time">
              <div className="destination-time-text">est. travel time</div>
              <div className="destination-time-value">{destination.travel}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
