import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as NavDivider } from "../assets/nav-divider.svg";
import "../scss/sharedLayout.scss";
import NavBar from "../components/NavBar";

export default function SharedLayout() {
  const currentLink = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`shared-layout ${
        currentLink.pathname.substring(1) !== ""
          ? currentLink.pathname.substring(1)
          : "home"
      }Background`}
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
