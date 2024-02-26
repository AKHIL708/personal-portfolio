import React from "react";
import "./MobileNavbar.scss";

function MobileNavbar() {
  return (
    <>
      <nav role="navigation">
        <div id="navbar">
          <div id="menuToggle">
            <input type="checkbox" id="menuCheckbox" />
            asdf asdf asdf
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="navbarText">AKHIL</div>
          <div id="navbarIcon">
            {/* <!-- Replace 'your_icon_name_here' with the name of the MUI Icon you want to use --> */}
            <i class="material-icons">icon</i>
          </div>
          <ul id="sidebar">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Info</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;
