import { NavLink } from "react-router-dom";
import "../scss/navBar.scss";

export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-link">
        <span>00</span>Home
      </NavLink>
      <NavLink to="/destination" className="nav-link">
        <span>01</span>Destination
      </NavLink>
      <NavLink to="/crew" className="nav-link">
        <span>02</span>Crew
      </NavLink>

      <NavLink to="/technology" className="nav-link">
        <span>03</span>Technology
      </NavLink>
    </div>
  );
}
