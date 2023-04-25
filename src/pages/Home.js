import "../scss/home.scss";
import { useNavigate } from "react-router-dom";

export default function Home({ setBackground }) {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-text-group">
          <div className="hero-intro-title">so, you want to travel to</div>
          <div className="hero-title">space</div>
          <div className="hero-text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="hero-btn">
          <button
            onClick={() => {
              navigate("/destination");
            }}
            className="hero-btn-explore"
          >
            explore
          </button>
        </div>
      </div>
    </div>
  );
}
