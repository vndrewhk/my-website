import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "../../styling/css/NavBar.css";

// hide on scroll down, show on scroll up
// https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
const NavBar = () => {
  return (
    <div className="navBar">
      {/* style={{ textDecoration: "none" }} */}
      <NavLink className="mainNav" to="/" title="Home|Andrew Ma">
        <h2>Andrew Ma</h2>
      </NavLink>
      <div className="headerLinks">
        <NavLink to="/about" title="About|Andrew Ma">
          About
        </NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
