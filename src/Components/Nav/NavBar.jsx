import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import "../../styling/css/NavBar.css";
import resume from "../../assets/andrewhkma_resume.pdf";

// hide on scroll down, show on scroll up
// https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
const NavBar = () => {
  return (
    <div className="navBar">
      {/* style={{ textDecoration: "none" }} */}
      <NavLink className="mainNav" to="/" title="Home|Andrew Ma">
        <h2 className="hover-underline-animation">Andrew Ma</h2>
      </NavLink>
      <div className="headerLinks">
        {/* <NavLink to="/about" title="About|Andrew Ma">
          <span className="hover-underline-animation">About</span>
        </NavLink> */}
        {/* <NavLink to="/resume"> */}
        <a href={resume} target="_blank" className="hover-underline-animation">
          Resume
        </a>
        {/* </NavLink> */}
        {/* <a>Download Pdf</a> */}
      </div>
    </div>
  );
};

export default NavBar;

// import React, { Component } from 'react';
// import Pdf from '../Documents/Document.pdf';

// class Download extends Component {

//   render() {

//     return (
//         <div className = "App">
//           <a href = {Pdf} target = "_blank">Download Pdf</a>
//         </div>
//     );

//   }
// }

// export default Download;
