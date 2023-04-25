import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as NavDivider } from "../assets/nav-divider.svg";
import "../scss/sharedLayout.scss";
import NavBar from "../components/NavBar";

import homeBackground from "../assets/home/background-home-desktop.jpg";
import destinationBackground from "../assets/destination/background-destination-desktop.jpg";
import crewBackground from "../assets/crew/background-crew-desktop.jpg";
import technologyBackground from "../assets/technology/background-technology-desktop.jpg";

export default function SharedLayout() {
  const currentLink = useLocation();
  console.log(currentLink);
  const navigate = useNavigate();
  let background;

  if (currentLink.pathname === "/") {
    background = homeBackground;
  } else if (currentLink.pathname === "/destination") {
    background = destinationBackground;
  } else if (currentLink.pathname === "/crew") {
    background = crewBackground;
  } else if (currentLink.pathname === "/technology") {
    background = technologyBackground;
  }

  return (
    <div
      className="shared-layout"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <nav className="top-bar">
        <div>
          <Logo className="logo" onClick={() => navigate("/")} />
          <NavDivider className="nav-divider" />
        </div>
        <NavBar className="nav" />
      </nav>
      <Outlet />
    </div>
  );
}
