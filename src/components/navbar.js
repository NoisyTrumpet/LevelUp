import React from "react"

import DrawerToggle from "./drawer-toggle"
import NavLine from "../images/navLine.png"

import '../styles/navbar.css'

const Navbar = () => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div id="MobileMenu">
        <DrawerToggle />
      </div>
      <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
      <div className="spacer"><img src={NavLine} className="navDivide" alt="" /></div>
      <div id="DesktopMenu" className="toolbar_nav_items">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Careers</a></li>
        </ul>
      </div>
    </nav>
  </header>
);


export default Navbar