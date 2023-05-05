import "../scss/crew.scss";
import data from "../data.json";
import { useState } from "react";

export default function Crew() {
  const [crewMember, setCrewMember] = useState(data.crew[0]);

  return (
    <div className="crew-page">
      <header className="crew-page-title">
        <span>02</span>meet your crew
      </header>
      <section className="crew-member">
        <div className="crew-member-info">
          <div className="crew-member-job ">{crewMember.role}</div>
          <div className="crew-member-name">{crewMember.name}</div>
          <div className="crew-member-bio">{crewMember.bio}</div>
        </div>

        <img
          className={`crew-member-img ${crewMember.name
            .split(" ")
            .map((name) => name.toLowerCase())
            .join("-")}`}
          src={require(`../assets/crew/image-${crewMember.name
            .split(" ")
            .map((name) => name.toLowerCase())
            .join("-")}.png`)}
          alt={crewMember.name}
        />

        <nav className="crew-nav">
          <button
            className={
              "crew-nav-button" +
              " " +
              (crewMember === data.crew[0] ? "crew-active" : null)
            }
            onClick={() => setCrewMember(data.crew[0])}
          ></button>
          <button
            className={
              "crew-nav-button" +
              " " +
              (crewMember === data.crew[1] ? "crew-active" : null)
            }
            onClick={() => setCrewMember(data.crew[1])}
          ></button>
          <button
            className={
              "crew-nav-button" +
              " " +
              (crewMember === data.crew[2] ? "crew-active" : null)
            }
            onClick={() => setCrewMember(data.crew[2])}
          ></button>
          <button
            className={
              "crew-nav-button" +
              " " +
              (crewMember === data.crew[3] ? "crew-active" : null)
            }
            onClick={() => setCrewMember(data.crew[3])}
          ></button>
        </nav>
      </section>
    </div>
  );
}
