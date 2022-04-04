import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "../../styling/css/NavBar.css";
const NavBar = () => {
  return (
    <div className="navBar">
      {/* style={{ textDecoration: "none" }} */}
      <NavLink className="mainNav" to="/">
        <h2>Andrew Ma</h2>
      </NavLink>
      <div className="headerLinks">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>
  );
};

export default NavBar;